# SKILL.md — paragraph to insert after the "read readme.md" line

Two rules before you write markup:

1. **Declare the scheme, and the theme when it is not light.**
   `<html data-scheme="brand">` or `<html data-scheme="green" data-theme="dark">`.
   `_brand` is the logo blue, `_green` is the alternative accent; both share the
   neutral ramp, and green-as-accent never means "good" — status stays on
   `--text-success`. There is no default scheme.
2. **Read semantic tokens only** — `--primary`, `--surface-card`, `--text-heading`,
   `--surface-brand-subtle`, `--glow-primary`. Anything reaching for `--blue-*`
   or `--leaf-*` stops following the page's scheme and theme.

For dashboard work, start from `ui_kits/dashboard/theme-matrix.html` — the
reference implementation of the current direction (flat surfaces, hairline
borders, tabular Outfit metrics, one corner glow per widget) in all four
scheme × theme combinations.
