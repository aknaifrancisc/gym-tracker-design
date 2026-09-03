# Patch set — accent schemes, dark theme, corner glow

Everything in this folder is written against the **Gym-Tracker Design System**
(project `42e631ff-e31a-4d3e-8495-62b3190c9d4a`) and follows its conventions:
`gt-` class names, `--ink-*`/`--surface-*`/`--text-*` token vocabulary,
`guidelines/*.card.html` specimen naming, Outfit / Manrope / JetBrains Mono type.

I can read that project but not write to it, so this is a mirror of its tree:
**copy each file to the same path** and the system is updated. Paths below are
relative to the design system root.

## Copy as-is (new files)

| File | What it adds |
| --- | --- |
| `tokens/schemes.css` | The two accent schemes (`_brand`, `_green`) × light/dark, plus the corner-glow tokens and `.gt-card--glow-*` modifiers. |
| `guidelines/colors-schemes.card.html` | Specimen card: both schemes in both themes. |
| `guidelines/shape-glow.card.html` | Specimen card: the corner glow and its rules. |
| `ui_kits/dashboard/theme-matrix.html` | Reference implementation — one dashboard slice in all four combinations. Start new dashboard screens from this file. |
| `tokens/neutrals-warm.css` | **Optional.** Remaps the ink ramp to warm paper neutrals (see "Two decisions" below). Not imported by default. |

## Replace (patched originals)

| File | Change |
| --- | --- |
| `styles.css` | Imports `tokens/schemes.css` after `elevation.css` (it overrides `--shadow-brand`), and carries the commented-out optional warm-neutrals import. |
| `tokens/colors.css` | Adds the `--leaf-*` ramp (the `_green` accent; status green stays `--green-*`) and makes `[data-theme="dark"]` an equal alias of `.theme-dark`. Nothing existing was removed or re-valued. |
| `components/components.css` | The eleven places that hard-coded `--blue-500/600/700/400` (primary button, solid icon button, solid badge, checkbox/radio, switch, underline tab, progress fill) now read `--primary`, `--primary-hover`, `--primary-active`, `--primary-soft`, `--primary-fg` — so a scheme attribute reskins them. Visually identical under `_brand`. |
| `components/core/Card.jsx` + `.d.ts` + `.prompt.md` | New `glow` prop (`'tr'`, `'bl-accent'`, …) that adds the modifier class and the `<span class="gt-glow">` child. |

## How a page declares itself

```html
<html data-scheme="brand">                    <!-- light -->
<html data-scheme="green" data-theme="dark">   <!-- dark  -->
```

Class forms work on any container too — `.scheme-brand` / `.scheme-green` and
the existing `.theme-dark` — so one page can show several combinations, which is
how `theme-matrix.html` renders four panels from one block of markup.

There is **no default scheme** by request: a page that declares none falls back
to `_brand` values defined on `:root` so nothing renders invisible.

## Rules this patch adds to the system

- Components read `--primary*` and the `--*-brand` aliases. Referencing
  `--blue-*` or `--leaf-*` directly in a screen breaks scheme switching.
- **Green-as-accent never means "good".** Status stays on `--green-500` /
  `--text-success`; in the `_green` scheme accent and success coincide only by
  coincidence of hue.
- Amber (`--amber-500`) is the single secondary in data widgets. Blue still
  means action-or-brand.
- Corner glow: one per card, alternate corners across a grid, `-accent` on at
  most one or two secondary cards per screen, never behind a table, a paragraph
  or a form, dashboard and marketing surfaces only — the mobile app stays flat.
  This is the **one documented exception** to "no gradients anywhere"; the
  readme line needs the amendment in `readme-additions.md`.

## Two decisions you should confirm

1. **Warm neutrals.** The approved direction sits on warm paper (off-white
   canvas, warm hairlines, warm charcoal dark shell); the system ships slightly
   cool neutrals. Rather than re-value the ramp for everyone, `tokens/neutrals-warm.css`
   remaps `--ink-*` in one file — uncomment its import in `styles.css` to flip
   the whole system warm, leave it out to stay cool. Every surface, text and
   border alias already resolves through the ramp, so nothing else changes.
2. **Type.** The exploration used Instrument Sans + Space Grotesk. The system
   already has an equivalent split (Outfit display/metrics, Manrope UI,
   JetBrains Mono data) documented as a substitution pending real font files, so
   I did **not** import the exploration's fonts — the patch keeps Outfit and
   Manrope. Say the word if you want the swap instead; it is one file
   (`tokens/fonts.css` + the three family vars in `tokens/typography.css`).

## Unchanged copies

`tokens/fonts.css`, `typography.css`, `spacing.css`, `shape.css`,
`elevation.css`, `motion.css`, `base.css` are byte-copies of the originals,
present only so this folder previews standalone. Do not copy them back.
