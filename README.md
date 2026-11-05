# My Website

Hey, I'm Yiğit. I started this website in 2026 when I was 10, using Starfolio to start. I've changed it to show my projects and things I'm still learning a lot. I'm still tryna figure out the code, but it's fun when my changes show up on a real website on my domain.

## [Come check it out!](https://yigitkilicaslan.com)

[![Screenshot of my website (pls click to visit it)](public/photos/Screenshot.png)](https://yigitkilicaslan.com)

## What's on here?

Projects I've made, robot and coding competitions in the past, photos from places I've visited, and blog posts about stuff I'm trying.

## What's it made with?

Astro puts the website together. React and TypeScript help with interactive parts, CSS and Tailwind make it look really good, and MDX is for blog posts in blogs section.

## Run locally

Use Node.js 22.12 or newer and pnpm.

```sh
pnpm install
pnpm dev
```

Open the local address printed by Astro, then visit `/labs` or
`/labs/accessibility-inspector`.

```sh
pnpm test
pnpm astro check
pnpm build
```

## Labs: Website Accessibility Inspector

The first Labs project checks pasted HTML for missing image `alt` attributes,
buttons without detectable names, and form controls without detectable labels.
It runs locally using an inert HTML template; submitted markup is never attached
to the page, executed, or uploaded. Findings are displayed as text.

This is a limited markup checker, not a compliance audit or a full accessible-name
implementation. It does not fetch external URLs, evaluate CSS/JavaScript, inspect
shadow DOM or nested template content, or test keyboard behavior and contrast.
Empty image alt attributes are accepted for decorative images. Common labels,
ARIA names, title fallbacks, and native submit/reset defaults are recognized.
Review the page's limitations and test manually as well.

Analyzer tests include broken labels, duplicate IDs, hidden content, size limits,
and hostile markup that must remain inert.

## Photo credits

The photos are from other people. Their names, pictures, and licenses are being credited on the [photo credits](credits.md) page.
