---
name: gym-tracker-design
description: Use this skill to generate well-branded interfaces and assets for Gym Tracker, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read `readme.md` in this skill first, then explore the other files.

Two hard rules before you write any markup:

1. **Every page declares both attributes** — `<html data-scheme="brand|green" data-theme="light|dark">`. There is no default scheme. `_brand` is the logo blue, `_green` is the alternative accent; both share the warm neutral ramp, and green means success/positive only.
2. **Reference semantic tokens, never ramp steps** — `--primary`, `--surface`, `--text-1`, `--success`, `--glow-tr`. Anything hard-coded or pulled from `--brand-*`/`--gr-*` stops following the scheme and the theme.

Start new screens from `ui_kits/gym-tracker-web/theme-matrix.html` — it is the reference implementation of the current direction (flat surfaces, hairline borders, Space Grotesk numerals, one corner glow per widget) in all four scheme × theme combinations. Do not copy the ten legacy screens in that folder; they still use the retired gradient layer.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and create static HTML files for the user to view. If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
