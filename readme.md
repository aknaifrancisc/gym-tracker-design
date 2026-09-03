# Gym Tracker Design System

A design system for **Gym Tracker** — a fitness tracking platform (web app, desktop-first; native mobile planned) serving end users tracking their own fitness and coaches managing clients. Core surfaces: dashboard, personal info / fitness profile, weight loss, steps, workouts (logs + exercises), macros tracker.

**Logo:** `assets/Logo.svg` (pill wordmark + compass roundel). Brand blue #2A69C8, ink #1E1E1E. Min height 28px; on dark surfaces use as-is (self-contained colors).

## Declare a scheme and a theme — always
There is **no default**. Every page sets both on `<html>`:

```html
<html data-scheme="brand" data-theme="light">   <!-- scheme: brand | green   theme: light | dark -->
```

- **_brand** — the logo blue accent. #2A69C8 in light, lifted to #5B9BF5 in dark (the logo blue is too dim on charcoal).
- **_green** — the alternative accent, #1A8F5A in light, #34C47F in dark.
- Both schemes share the warm neutral ramp, amber secondary, clay danger, and **green as success/positive only** — in the _green scheme the accent and success hues coincide by design; never use accent green to mean "good" in the _brand scheme, use `--success`.
- Screens reference semantic aliases only (`--primary`, `--surface`, `--text-1`, `--success`…). Never `--brand-*` or `--gr-*` directly, or the page stops following its scheme.
- Both attributes also work on any subtree, so one page can show several combinations (see `ui_kits/gym-tracker-web/theme-matrix.html`).
- A page missing `data-scheme` renders with the brand fallback and shows a small amber reminder chip — that chip means "declare your scheme", not "broken".

## Content fundamentals
- Voice: direct, second person, encouraging but not chirpy. "Track your progress", "You're 1.2 kg from your goal."
- Casing: sentence case everywhere — page titles, buttons ("Edit personal info"), labels. No Title Case, no ALL CAPS except tiny overline labels.
- Numbers carry the meaning: units always shown, ~one third the value's size, `--text-2`. Values use tabular Space Grotesk.
- No emoji. No exclamation-mark enthusiasm. Empty states state the fact + one action ("No goal date set · Add date").
- Dates: "Jun 6, 2025" format; short axis labels "Aug 19".

## Visual foundations
- **Type:** Instrument Sans for interface, Space Grotesk (tabular numerals) for **every** metric, table number and axis tick. Page title 23/600, section title 16/600, card title 13.5/600, body 13, caption 12.5, micro 11.5. Hero stat 46, card stat 34, tile stat 19 — tracking tightens as size grows (`--track-tight`, `--track-tighter`).
- **Color:** one warm neutral ramp (off-white paper #EFECE6 canvas, white cards, #EAE6DF hairlines; dark: #131217 canvas, #1C1B21 cards, #2C2A34 hairlines) + exactly one accent from the active scheme. Amber (#E0A83A) is the only secondary. Clay (#C25A44) for danger/neglected. Chart series 1 always follows the accent.
- **Surfaces:** flat. No bold gradients, no textures, no image backgrounds — the v2 gradient layer is retired (`tokens/gradients.css` is a migration shim).
- **Corner glow — the signature detail:** one soft radial bloom per widget, 250×215 offset past a corner, `z-index:-1` inside a `position:relative; overflow:hidden; isolation:isolate` card. Alternate the corner across a grid so the page does not read uniform; primary tint by default, `--glow-accent-any` only on secondary-metric cards; never behind a table or a paragraph. `<Card glow="tr">` does it for you.
- **Cards:** radius 18, 1px hairline border, shadow-sm in light, **no shadow in dark** (borders + glow carry depth). Padding 16–18px (12px compact). Hover on interactive cards only → border-strong, 140ms.
- **Radii:** 7 badges/chips, 11 buttons/inputs, 18 cards, 24 app shell, full pills/rings.
- **Motion:** 140ms hover, 200ms enter/exit, 550ms for bar/ring/line fills, `cubic-bezier(0.2,0,0,1)`. Numerals count up on load; rings and bars fill from zero; lines draw in. Fades + 8px translate. No bounces.
- **Focus:** 3px accent ring at 35–40% alpha (`--focus-ring`), `:focus-visible` only.
- **Label/value lists:** inside narrow cards (< ~200px) STACK them — label on line 1, mono value + small unit on line 2.
- **Density:** comfortable by default; tables and logs offer a compact variant (12.5px, 8px row padding).
- **Layout:** app shell is a rounded panel on the canvas; icon rail 62px or labelled sidebar 214px; 14px card gaps, 18px shell padding; content max `--content-max`.
- **Charts:** hairline tracks, accent fill, amber for the paired series, hover tooltip on dark chip; axis labels live **outside** the scaling box so a 0% bar never collapses its label.

## Iconography
- **Lucide** (CDN), 1.5–1.7px stroke, 14/18px sizes. No icon fonts, no emoji, no unicode-as-icon.
- Plain HTML: `<script src="https://unpkg.com/lucide@latest"></script>` + `<i data-lucide="dumbbell"></i>` + `lucide.createIcons()`.
- Icon chips: `--primary-subtle` fill + `--primary` glyph, or the matching semantic subtle pair.

## Index
- `styles.css` — global entry; imports `tokens/` (colors, dark, typography, spacing, effects, gradients-shim, base).
- `tokens/colors.css` — warm ramp, both accent ramps, scheme blocks. `tokens/dark.css` — dark neutral aliases.
- `guidelines/` — foundation specimen cards (schemes, warm ramp, dark surfaces, corner glow, type, radii, motion…).
- `components/forms|display|navigation|fitness/` — token-driven React primitives; `Card`/`StatCard` take `glow`.
- `ui_kits/gym-tracker-web/theme-matrix.html` — **reference implementation**: one dashboard slice in all four scheme × theme combinations. Start new screens from this.
- `ui_kits/gym-tracker-web/*.html` — the ten legacy screens (still on the retired gradient layer; they inherit the new tokens but need re-skinning).
- `gym-tracker-static/`, `export/` — bundled snapshots of the legacy screens; regenerate after each screen is re-skinned.
- `SKILL.md` — agent skill entry point.

## Caveats
- The ten kit screens and their bundled exports predate this direction: they pick up the warm neutrals and scheme accent automatically, but their hero panels and KPI washes still follow the retired gradient composition. Re-skin screen by screen against `theme-matrix.html`.
- Brand blue anchored on the logo (#2A69C8); confirm any secondary brand colors.
