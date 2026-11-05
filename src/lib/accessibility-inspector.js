// Deliberately limited markup checks, not a complete accessible-name algorithm.
export const MAX_HTML_LENGTH = 200_000;

/** @param {string} html @param {Document} document */
export function inspectHTML(html, document) {
  if (!html.trim()) throw new Error("Paste some HTML before running the checks.");
  if (html.length > MAX_HTML_LENGTH) throw new Error("Use 200,000 characters or fewer per check.");

  // Template contents remain inert: no scripts, custom elements, or resource loads.
  // Never attach this template or any of its contents to the live page.
  const template = document.createElement("template");
  template.innerHTML = html;
  const root = template.content;
  const elements = [...root.querySelectorAll("*")];
  const byId = new Map();
  for (const element of elements) {
    if (element.id && !byId.has(element.id)) byId.set(element.id, element);
  }
  const normalize = (value) => (value || "").replace(/\s+/g, " ").trim();
  const hidden = (element) => !!element.closest('[hidden], [inert], [aria-hidden="true"]');
  const text = (node, includeHidden = false) => {
    if (node.nodeType === 3) return node.textContent || "";
    if (node.nodeType !== 1) return "";
    if (node.matches("script, style, template")) return "";
    if (!includeHidden && hidden(node)) return "";
    if (node.matches("img")) return node.getAttribute("alt") || "";
    return [...node.childNodes].map((child) => text(child, includeHidden)).join(" ");
  };
  const ariaName = (element) => {
    const refs = normalize(element.getAttribute("aria-labelledby")).split(" ").filter(Boolean);
    const referenced = normalize(refs.map((id) => {
      const target = byId.get(id);
      return target ? text(target, true) : "";
    }).join(" "));
    return referenced || normalize(element.getAttribute("aria-label"));
  };
  const labels = [...root.querySelectorAll("label")];
  const labelName = (element) => normalize(labels.filter((label) => {
    // An explicit for wins over containment. Only the first labelable child
    // gets an implicit label, and duplicate IDs resolve to the first element.
    if (label.hasAttribute("for")) return !!element.id && label.htmlFor === element.id && byId.get(element.id) === element;
    return label.querySelector('button, input:not([type="hidden"]), select, textarea, meter, output, progress') === element;
  }).map((label) => text(label)).join(" "));
  const findings = [];
  const counts = { images: 0, buttons: 0, fields: 0 };
  const add = (element, rule, title, explanation, fix) => {
    findings.push({
      rule, title, explanation, fix,
      element: `${element.localName}${element.id ? `#${element.id}` : ""} (element ${elements.indexOf(element) + 1})`,
      snippet: element.outerHTML.slice(0, 400) + (element.outerHTML.length > 400 ? "…" : ""),
    });
  };

  for (const element of elements) {
    if (hidden(element)) continue;
    const tag = element.localName;
    const type = (element.getAttribute("type") || "text").toLowerCase();
    if (tag === "img") {
      counts.images++;
      if (!element.hasAttribute("alt")) add(element, "image-alt", "Image is missing an alt attribute",
        "Screen readers use alt text to describe an image to someone who cannot see it.",
        'Add a short description in the alt attribute. If the image is only decoration, use alt="". You need to decide which fits the image.');
    }
    const isButton = tag === "button" || element.getAttribute("role") === "button" || (tag === "input" && ["button", "submit", "reset", "image"].includes(type));
    if (isButton) {
      counts.buttons++;
      const inputName = tag === "input" ? (type === "image" ? element.getAttribute("alt") : element.getAttribute("value")) : "";
      const defaultName = tag === "input" && ["submit", "reset"].includes(type) && !element.hasAttribute("value");
      if (!ariaName(element) && !labelName(element) && !normalize(inputName) && !defaultName && !(tag !== "input" && normalize(text(element))) && !normalize(element.getAttribute("title"))) {
        add(element, "button-name", "Could not find a name for this button",
          "Someone using a screen reader needs to know what this button does.",
          'Add text such as "Save changes". If the button only has an icon, give it a name with aria-label or aria-labelledby.');
      }
    } else if (["input", "select", "textarea"].includes(tag) && !(tag === "input" && type === "hidden")) {
      counts.fields++;
      if (!ariaName(element) && !labelName(element) && !normalize(element.getAttribute("title"))) {
        add(element, "form-label", "Could not find a label for this field",
          "People need a label to know what to enter. Placeholder text alone is not enough.",
          'Add a <label for="field-id"> and give the field the same id. You can also wrap the field in a label, or use aria-label or aria-labelledby.');
      }
    }
  }
  return { findings, counts };
}
