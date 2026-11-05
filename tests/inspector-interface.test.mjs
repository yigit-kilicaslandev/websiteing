import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { JSDOM } from "jsdom";
import ts from "typescript";
import { inspectHTML } from "../src/lib/accessibility-inspector.js";

// Exercise the actual page's event handlers in a DOM. This does not replace
// a browser layout check or a test of Astro hydration/loading in a browser.
function interfaceDOM() {
  const source = readFileSync(new URL("../src/pages/labs/accessibility-inspector.astro", import.meta.url), "utf8");
  const script = source.match(/<script>([\s\S]*?)<\/script>/)[1].replace(/import .*?;/, "const inspectHTML = window.inspectHTML;");
  const markup = source.replace(/^---[\s\S]*?---/, "").replace(/<script>[\s\S]*?<\/script>/, "")
    .replace(/placeholder=\{[^}]*\}/g, 'placeholder="HTML"');
  const dom = new JSDOM(markup, { runScripts: "outside-only" });
  dom.window.inspectHTML = inspectHTML;
  dom.window.eval(ts.transpileModule(script, { compilerOptions: { target: ts.ScriptTarget.ES2022 } }).outputText);
  const document = dom.window.document;
  const submit = () => document.querySelector("form").dispatchEvent(new dom.window.Event("submit", { cancelable: true }));
  return { dom, document, submit };
}

test("sample produces three findings, focuses results and clears stale results on edits", () => {
  const { dom, document, submit } = interfaceDOM();
  document.querySelector("#load-example").click();
  submit();
  assert.equal(document.querySelectorAll("#finding-list li").length, 3);
  assert.equal(document.activeElement.id, "results-heading");
  assert.match(document.querySelector("#inspection-status").textContent, /3 potential issues/);
  document.querySelector("textarea").dispatchEvent(new dom.window.Event("input"));
  assert.equal(document.querySelector("#results").hidden, true);
  assert.equal(document.querySelectorAll("#finding-list li").length, 0);
  dom.window.close();
});
test("empty input gives an error, valid input gives qualified success and clear resets", () => {
  const { dom, document, submit } = interfaceDOM();
  submit();
  assert.equal(document.querySelector("#input-error").hidden, false);
  assert.equal(document.querySelector("textarea").getAttribute("aria-invalid"), "true");
  document.querySelector("textarea").value = '<button>Save</button><label>Name<input></label>';
  submit();
  assert.equal(document.querySelector("#no-findings").hidden, false);
  assert.match(document.querySelector("#no-findings").textContent, /does not mean/);
  document.querySelector("#clear-input").click();
  assert.equal(document.querySelector("textarea").value, "");
  assert.equal(document.querySelector("#results").hidden, true);
  assert.equal(document.querySelector("#input-error").hidden, true);
  dom.window.close();
});
test("finding snippets display markup as text, never as active elements", () => {
  const { dom, document, submit } = interfaceDOM();
  document.querySelector("textarea").value = '<img src="https://example.test/track" onerror="alert(1)">';
  submit();
  assert.equal(document.querySelectorAll("#finding-list img, #finding-list script").length, 0);
  assert.match(document.querySelector("#finding-list code").textContent, /onerror/);
  dom.window.close();
});
