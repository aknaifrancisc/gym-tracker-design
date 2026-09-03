# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A design repository for **Gym Tracker**, a fitness tracking platform (web, desktop-first). It is not an application — there is no `package.json`, no build step, no tests, and no git repo. It holds a design system (tokens, guidelines, React primitives) plus a set of high-fidelity screen prototypes.

`SKILL.md` at the root makes this folder a user-invocable Claude Code skill (`gym-tracker-design`); `readme.md` is the design-system spec that skill points at. Read `readme.md` before producing any markup.

## Running / previewing

Nothing compiles. Serve the directory over HTTP (relative `fetch` calls in `ds-loader.js`, `image-slot.js`, and the `_ds` bundle break on `file://`):

```
python3 -m http.server 8000     # then open Prototype.dc.html
```

`Prototype.dc.html` is the click-through shell: it iframes each screen at 1920×1080, scales to fit, and steps with ← / →. Its `SCREENS` array is the authoritative screen list — add new `.dc.html` screens there.

## Two token systems coexist — know which one you are in

This is the single biggest trap in the repo. The same concepts have two different names depending on which tree you are editing.

| | Root (`tokens/`, `components/`, `guidelines/`) | `_ds/gym-tracker-design-system-42e631ff-…/` |
| --- | --- | --- |
| Entry | `styles.css` | `_ds/…/styles.css` |
| Neutrals | warm paper ramp `--neutral-*`, `--ink` | slightly cool `--ink-000…950` |
| Surfaces | `--surface`, `--bg`, `--text-1/2/3` | `--surface-card`, `--surface-page`, `--text-heading/body/muted` |
| Accent | `--primary` (scheme-driven) | `--blue-500`, `--text-brand` |
| Type | Instrument Sans + Space Grotesk | Outfit + Manrope + JetBrains Mono |
| Schemes | `data-scheme` / `data-theme` supported | **not** supported (no scheme tokens present) |

The root tree is the **current approved direction** (v3: warm neutrals, flat surfaces, corner glow). `_ds/` is an **older vendored snapshot** that the `.dc.html` screens actually link and load components from. `ds-patch/` is an unapplied patch that would backport schemes, dark theme, warm neutrals, and the corner glow into `_ds/` — see `ds-patch/APPLY.md`; it is a mirror tree meant to be copied file-for-file, and it still carries two open decisions (warm neutrals, font swap). Nothing in `ds-patch/` has been applied.

Consequence: a `.dc.html` screen cannot use `--primary` or `--surface` — those tokens do not exist in `_ds`. The existing screens work around this with inline hex plus a small `--accent` / `--accent-tint` / `--glow` block on `body`. Match that pattern rather than introducing root tokens into a screen.

## Hard rules when writing markup against the root system

1. **Every page declares both attributes**: `<html data-scheme="brand|green" data-theme="light|dark">`. There is no default. A page missing `data-scheme` renders a visible amber reminder chip (`tokens/base.css`) — that chip means "declare your scheme", not "broken".
2. **Semantic aliases only** — `--primary`, `--surface`, `--text-1`, `--success`, `--glow-tr`. Reaching for `--brand-*` or `--gr-*` directly stops the element following its scheme.
3. **Green never means "good" in the `_brand` scheme.** Positive status is always `--success`, even though in `_green` the accent and success hues coincide.
4. **One corner glow per widget**, alternating corners across a grid, `--glow-accent-any` only on secondary-metric cards, never behind a table or paragraph. This is the one documented exception to "no gradients". `<Card glow="tr">` does it for you.
5. Every metric, table number, and axis tick is Space Grotesk, tabular (`.num`).

New screens start from `ui_kits/gym-tracker-web/theme-matrix.html`. The other ten files in that folder are legacy — they still compose against the retired gradient layer and should not be copied.

## `.dc.html` screen anatomy

Each root-level `.dc.html` is one self-contained screen for the `dc-runtime` (`support.js`, generated — never edit it by hand). Structure:

- `<x-dc>` — a template using `{{ expr }}` bindings, `<sc-if value="{{ … }}">`, `<sc-for list="{{ … }}" as="x">`, `onClick="{{ handler }}"`, and `style-hover="…"` for hover states.
- `<helmet>` — per-screen `<link>`/`<script>`/`<style>`. This is where the `_ds` stylesheet, the `_ds_bundle.js`, fonts, Lucide, `anim-engine.js`, and `slot-images.js` get pulled in.
- `<x-import component-from-global-scope="GymTrackerDesignSystem_42e631.Icon" …>` — design-system components come from that global namespace (declared in `_ds/…/_ds_manifest.json`), not from ES imports. `<x-import component-from-global-scope="image-slot" from="./image-slot.js">` for photo slots.
- `<script type="text/x-dc" data-dc-script data-props="{…}">` with `class Component extends DCLogic`. `data-props` is HTML-escaped JSON declaring editor-facing props (`accent`, `glow`, `loadMs`) with `editor`/`default`/`tsType`/`section`. `renderVals()` returns the object the template binds against.

`_adherence.oxlintrc.json` in `_ds/` encodes the component prop contracts and bans raw hex / raw px / non-system fonts in JSX. There is no runner wired up, but it is the source of truth for what props each `_ds` component accepts.

### Animation

`anim-engine.js` drives a two-phase load: shells rise in staggered, then after `loadMs` the data lands (numbers roll, bars fill, arcs draw). Wire it from the logic class:

```js
componentDidMount(){ GTAnim.boot(this); }
componentWillUnmount(){ GTAnim.stop(this); }
anim(ms){ return GTAnim.anim(ms); }
prog(d, dur){ return GTAnim.prog(this, d, dur); }
roll(v, p){ return GTAnim.roll(v, p); }
```

State must include `{ now: 0, loaded: true }`. The clock lives in module scope, not on the instance, because the runtime remounts logic instances — do not move it onto `this`.

### Images

`<image-slot id="…">` is a drag-and-drop placeholder. Dropped images persist to `.image-slots.state.json`, a **sidecar shared by every page in the same directory** — so slot ids must be unique across all screens, not just within one. `slot-images.js` is the fallback path for standalone bundles (`window.GTSlotImages` or a `gt-slot-images` postMessage). `image-prompts.md` holds the Midjourney prompt per slot id; keep it in sync when you add a slot. No third-party imagery is bundled.

## Components

`components/{forms,display,navigation,fitness}/` — root-system React primitives, each with `.jsx`, `.d.ts` (props contract), and `.prompt.md` (what/when + usage). They are token-driven inline-style components with no CSS file of their own; `ds-loader.js` resolves them at runtime, preferring a compiled `_ds_bundle.js` and falling back to fetching sources and transpiling with Babel in-page (the file list in `ds-loader.js:31` must be updated when you add a component).

`guidelines/*.html` are foundation specimen pages carrying a `<!-- @dsCard group="…" name="…" -->` header comment; they link `../styles.css` and each declares its own scheme/theme.

## Content conventions

Sentence case everywhere (no Title Case, no ALL CAPS except tiny overlines). Second person, direct, never chirpy. No emoji anywhere, no exclamation marks. Units always shown at roughly one third the value's size in `--text-2`. Dates as "Jun 6, 2025"; axis labels as "Aug 19". Empty states state the fact plus one action ("No goal date set · Add date").
