import test from "node:test";
import assert from "node:assert/strict";
import { JSDOM, ResourceLoader } from "jsdom";
import { inspectHTML, MAX_HTML_LENGTH } from "../src/lib/accessibility-inspector.js";

const { document } = new JSDOM("").window;
const inspect = (html) => inspectHTML(html, document);

test("reports all three requested issues with explanations and snippets", () => {
  const result = inspect('<img src="x"><button></button><input placeholder="Email">');
  assert.deepEqual(result.counts, { images: 1, buttons: 1, fields: 1 });
  assert.deepEqual(result.findings.map((f) => f.rule), ["image-alt", "button-name", "form-label"]);
  assert.ok(result.findings.every((f) => f.explanation && f.fix && f.snippet && f.element));
});
test("accepts descriptive and decorative alt attributes", () => {
  assert.equal(inspect('<img alt="A cat"><img alt="">').findings.length, 0);
});
test("accepts explicit, wrapped, ARIA and title labels", () => {
  assert.equal(inspect(`<label for="email">Email</label><input id="email">
    <label>Name<input></label><textarea aria-label="Message"></textarea>
    <span id="country">Country</span><select aria-labelledby="country"></select>
    <input title="Search">`).findings.length, 0);
});
test("rejects empty, mismatched, broken and incorrectly wrapped labels", () => {
  assert.equal(inspect(`<label for="missing">Email<input></label>
    <input aria-labelledby="absent"><label for="empty"></label><input id="empty">
    <input aria-label="  ">`).findings.length, 4);
});
test("handles duplicate ids and first labelable descendant", () => {
  assert.equal(inspect('<label for="x">Name</label><input id="x"><input id="x">').findings.length, 1);
  assert.equal(inspect('<label>Name<input><input></label>').findings.length, 1);
});
test("recognizes button text, image alternatives, ARIA and native defaults", () => {
  assert.equal(inspect(`<button>Save</button><button><img alt="Search"></button>
    <button aria-label="Close"></button><span id="action" hidden>Continue</span>
    <button aria-labelledby="action"></button><input type="submit"><input type="reset">
    <input type="button" value="Save"><input type="image" alt="Search">
    <div role="button" aria-label="Open"></div>`).findings.length, 0);
});
test("ignores hidden text and scripts when naming buttons", () => {
  assert.equal(inspect('<button><span aria-hidden="true">×</span><script>name</script></button>').findings.length, 1);
  assert.equal(inspect('<input type="button"><input type="image"><input type="submit" value="">').findings.length, 3);
});
test("skips explicitly hidden elements and nested template contents", () => {
  assert.deepEqual(inspect('<div hidden><img><button></button><input></div><input type="hidden"><template><img></template>').counts,
    { images: 0, buttons: 0, fields: 0 });
});
test("supports full documents, malformed markup, and unusual ids", () => {
  assert.equal(inspect('<!doctype html><html><body><label for="a:b">Name</label><input id="a:b"><button>Save').findings.length, 0);
});
test("rejects empty and oversized input", () => {
  assert.throws(() => inspect("  "), /Paste some HTML/);
  assert.throws(() => inspect("x".repeat(MAX_HTML_LENGTH + 1)), /200,000/);
});
test("keeps hostile markup inert without loading resources or mutating the page", async () => {
  const requests = [];
  class Loader extends ResourceLoader { fetch(url) { requests.push(url); return null; } }
  const dom = new JSDOM('<main id="original">Safe</main>', { runScripts: "dangerously", resources: new Loader(), url: "https://example.test" });
  const before = dom.window.document.documentElement.outerHTML;
  inspectHTML(`<script>window.compromised = true</script>
    <img src="https://example.test/track" onerror="window.compromised=true">
    <iframe src="https://example.test/frame"></iframe>
    <link rel="stylesheet" href="https://example.test/style.css">
    <style>@import url('https://example.test/import.css');</style>`, dom.window.document);
  await new Promise((resolve) => setTimeout(resolve, 20));
  assert.equal(dom.window.compromised, undefined);
  assert.deepEqual(requests, []);
  assert.equal(dom.window.document.documentElement.outerHTML, before);
  dom.window.close();
});
