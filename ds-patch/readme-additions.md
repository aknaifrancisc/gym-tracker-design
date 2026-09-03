# readme.md — sections to splice

Three edits to the design system's `readme.md`.

---

## 1. Replace the **Colour** paragraph under "Visual foundations"

**Colour.** Two accent schemes, declared per page and never mixed on one screen:
**`_brand`** — the logo blue `--blue-500` `#2A69C8` — and **`_green`** —
`--leaf-500` `#1A8F5A`. Set `data-scheme="brand"` or `data-scheme="green"` on
`<html>` (or `.scheme-*` on any container); components read `--primary`,
`--primary-hover`, `--surface-brand`, `--text-brand`, never the ramps. Plate
black `--ink-900` `#1E1E1E` and the neutral ramp are shared. The accent means
*action or brand*; it is never used for a status. Statuses are green `#1F9D5B`,
amber `#E9A020`, red `#D64545`, each with a tint (`--surface-*-subtle`) — so in
the `_green` scheme, accent green and success green look alike but are not
interchangeable: state still comes from `--text-success`. Amber is the single
secondary in data widgets. Tracking data keeps its fixed colours (protein blue,
carbs amber, fat coral, fibre/steps teal, calories coral). Screens carry at most
two background colours plus ink.

## 2. Replace the **Dark theme** paragraph

**Dark theme.** `.theme-dark` or `data-theme="dark"` on any container — the two
are equivalent. The mobile app runs light everywhere *except* the active-workout
screen. The **web dashboard now ships both themes**: same layout, same markup,
dark surfaces from the ink ramp (`#141516` page, `#1B1D1F` card), accents lifted
one step (blue 500 → 400, leaf 500 → 400) because both primaries are too dim on
charcoal, brand shadows dropped, borders and the corner glow carrying depth
instead. The marketing site uses one ink section.

## 3. Amend the **Backgrounds** paragraph — the gradient exception

Replace "**No gradients anywhere** — flat fills only." with:

**One gradient, by exception: the corner glow.** A single soft radial bloom
bleeding in from one corner of a data widget (`--glow-primary` /
`--glow-accent`, applied with `gt-card--glow-{tl|tr|bl|br}` or
`<Card glow="tr">`). It marks which card carries the headline metric, and it is
the only gradient the system ships: one per card, corners alternating across a
grid, never behind a table, a paragraph or a form, dashboard and marketing only
— the mobile app stays flat. Everything else remains flat fills.

## 4. Index table — new rows

| Path | What it is |
| --- | --- |
| `tokens/schemes.css` | Accent schemes (`_brand`, `_green`) × light/dark + corner-glow tokens. |
| `tokens/neutrals-warm.css` | Optional warm-paper remap of the ink ramp (not imported by default). |
| `ui_kits/dashboard/theme-matrix.html` | Reference implementation: one dashboard slice in all four scheme × theme combinations. |
