# Gym Tracker — web prototype (GitHub Pages)

`index.html` is the full 11-screen click-through prototype, self-contained in one
4.2 MB file. No build step, no server-side anything: serve the directory.

**Pages setup:** repository Settings → Pages → Source: `main` branch, `/docs` folder.

## Do not delete `.nojekyll`

The prototype's screen templates contain **1,559 `{{ ... }}` binding expressions**.
GitHub Pages runs Jekyll by default, and Liquid would evaluate every one of them as
a template variable and substitute empty strings — the page would still load, but
silently render blank values everywhere. `.nojekyll` disables Jekyll entirely and is
required for this to work.

## What it loads from the network

Everything else (all 77 photos, the logos, the design-system CSS, the component
bundle and the dc-runtime) is inlined as data URIs or inline scripts.

| Host | What |
| --- | --- |
| `cdnjs.cloudflare.com` | React 18.3.1, ReactDOM 18.3.1, Lucide 0.454.0 |
| `fonts.googleapis.com` / `fonts.gstatic.com` | Outfit, Manrope, JetBrains Mono |
| `cdn.jsdelivr.net` | Fontsource `@font-face` files referenced by the design-system CSS |

`unpkg.com` appears in the file only as inert string constants inside the embedded
`support.js`; `window.__resources` redirects those to cdnjs before they are used.

## Rebuilding

`tools/build-prototype.js` regenerates this file from the archive sources:

```
node tools/build-prototype.js docs/index.html
```

It reads the eleven `*.dc.html` screens, the `_ds` bundle, `support.js`,
`anim-engine.js`, `image-slot.js` and `assets/slot-images/*.webp`, and inlines
them all. Two non-obvious things it handles, both of which cause silent breakage
if changed:

- **Output is escaped to pure ASCII.** An `srcdoc` iframe inherits the *parent*
  document's encoding and ignores its own `<meta charset>`, so raw UTF-8 renders
  as mojibake (`Â·` instead of `·`).
- **The `image-slot.js` blob is constructed with the iframe's `Blob`.**
  `support.js` tests `b instanceof Blob` in its own realm; a parent-realm Blob
  fails that check and falls back to a network fetch that 404s on a loop.
