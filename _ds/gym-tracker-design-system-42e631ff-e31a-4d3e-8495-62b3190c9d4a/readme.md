# Gym-Tracker Design System

Gym-Tracker is a fitness tracking platform — a phone app plus a web companion — for people who log their own training: workouts and sets, macros and meals, body weight, steps, sleep and anything else that needs adjusting. An AI coach reads the log and suggests the adjustments, so the product's core promise is **"you write it down, we do the maths."**

This repository is the brand's design system: tokens, foundations, reusable components, and click-through recreations of the product's three surfaces.

## Sources given for this system

| Source | What it provided |
| --- | --- |
| `uploads/Logo.svg` (supplied by the user) | The only real brand asset: the primary lockup — a dark weight-plate badge ("Estd. 2024", stars, radiating spokes) followed by a blue pill carrying the **GYM TRACKER** wordmark. Copied to `assets/logo.svg`; brand blue `#2A69C8` and plate black `#1E1E1E` are taken from it. |
| Written company description | "Fitness tracker platform and app for people tracking their daily workouts, macros, weight, steps, meals and everything that needs adjusting, you have an AI assistant to help you out." |

**No codebase, Figma file, screenshots, font binaries, imagery or deck were provided.** Everything beyond the logo (palette extension, type, spacing, components, screens, copy voice) was authored here from the logo and the description, and should be treated as a proposal to review rather than a recording of an existing product. Three substitutions are flagged under [Substitutions to confirm](#substitutions-to-confirm).

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | The single entry point consumers link. `@import`s only. |
| `tokens/` | `fonts.css` (@font-face), `colors.css`, `typography.css`, `spacing.css`, `shape.css`, `elevation.css`, `motion.css`, `base.css` (element resets). |
| `components/components.css` | Class-based states (`:hover`, `:active`, `:focus-visible`, `:disabled`) for the components; imported from `styles.css`. |
| `components/core/` | Icon, Button, IconButton, Card, Badge, Tag, Avatar |
| `components/forms/` | Input, Select, Checkbox, Radio, Switch, Stepper |
| `components/feedback/` | ProgressBar, Toast, Tooltip, Dialog |
| `components/navigation/` | Tabs, TabBar, NavItem |
| `components/tracking/` | ProgressRing, MacroBar, StatTile, SetRow, AiBubble, TrendBars |
| `guidelines/*.card.html` | Foundation specimen cards (Colors, Type, Spacing, Shape, Brand) shown in the Design System tab. |
| `ui_kits/app/` | Mobile app: Today, active workout, nutrition, AI coach, log sheet. |
| `ui_kits/dashboard/` | Web dashboard: sidebar shell, weekly overview, training plan, settings. |
| `ui_kits/marketing/` | Marketing site: hero, features, coach section, pricing, CTA, footer. |
| `assets/` | `logo.svg`, `logo-mono-ink.svg`, `logo-inverse.svg`, `logo-mark.svg`, `logo-mark-blue.svg`. |
| `thumbnail.html` | Homepage tile for this design system. |
| `SKILL.md` | Agent-skill front matter so this folder works as a Claude Code skill. |

Every component directory also holds `<Name>.d.ts` (props contract) and `<Name>.prompt.md` (what/when + usage example). Each UI kit has its own `README.md`.

## Content fundamentals

**Voice: a training partner who keeps the notebook.** Precise about numbers, relaxed about everything else. It never cheers, never scolds, never gamifies guilt.

- **Person.** The product addresses the member as **you**; the AI coach speaks as **I** but sparingly ("I kept 80 kg for Friday"). The member's own data is labelled neutrally — "Body weight", not "Your body weight".
- **Casing.** Sentence case everywhere: buttons ("Start workout", "Log set", "Add food"), headings ("This week in the gym"), menu items. UPPERCASE is reserved for eyebrows and badges, applied by CSS with `--ls-caps` tracking, so JSX still contains normal case.
- **Length.** Buttons 1–3 words. Card titles ≤ 4 words. Body copy ≤ 2 sentences. Coach messages: one observation + one question or action, never a paragraph.
- **Numbers first.** Copy states the figure and its unit, then the meaning: "18 g of protein short. A scoop of whey or 150 g of skyr closes the gap." Thin spaces group thousands ("1 840 kcal", "8 420 steps"); units are a smaller muted suffix, never uppercase.
- **Past tense for confirmations, imperative for actions.** "Set logged", "Workout saved" / "Start workout", "Finish workout", "Export CSV".
- **Coach tone.** Observation → consequence → choice: *"Bench volume is up 14% this week and your last set felt easier (RPE 7). Hold 80 kg one more session?"* Answers come as two or three chips ("Hold the load", "Add 2.5 kg", "Why?") rather than an open prompt. The coach never says "amazing", "crushing it", or "let's go".
- **Empty and error states name the fix.** "No sets yet — start the workout and they'll appear here." / "That address is already registered."
- **No emoji, anywhere.** Status is carried by badges, colour and Lucide glyphs. No exclamation marks in product copy except in the marketing footer line.
- **Marketing voice** is the same voice with more swagger and shorter lines: "Track the work. Let the coach do the maths." / "Free to log. Pay for the coach." / "Built for people who actually write it down." No superlatives, no "revolutionary", no fake urgency.

## Visual foundations

**Motif.** The logo is a circle inside a pill: a plate-shaped mark and a fully rounded wordmark holder. The whole system inherits that — **rings and pills**. Goal progress is a ring (`ProgressRing`), progress bars and buttons are pills, chips are pills, and the one non-pill shape is the input control (10px radius) so fields never read as buttons.

**Colour.** One primary — the logo blue `--blue-500` `#2A69C8` — plus plate black `--ink-900` `#1E1E1E` and a slightly cool neutral ramp. Blue means *action or brand*; it is never used for a status. Statuses are green `#1F9D5B`, amber `#E9A020`, red `#D64545`, each with a tint (`--surface-*-subtle`) for backgrounds. Tracking data has fixed colours that never move between screens: protein blue, carbs amber, fat coral `#E0533D`, fibre/steps teal `#17A2A2`, calories coral. Screens carry at most two background colours plus ink. **No gradients anywhere** — flat fills only.

**Dark theme.** `.theme-dark` on any container. The mobile app runs light everywhere *except* the active-workout screen, which is dark: less glare in a gym, and it signals "session in progress". The web dashboard is light; the marketing site uses one ink section.

**Typography.** Display, headings and every metric are **Outfit** (geometric, closest match to the wordmark) with tight tracking (`--ls-tight` / `--ls-tighter`); body and UI text are **Manrope**; set data, RPE and timers are **JetBrains Mono** (`--text-data`). All figures are tabular (`font-variant-numeric: tabular-nums`) so columns of numbers align. Metric type is the loudest thing on any screen: 30px on cards, 48px for a hero figure, unit suffixed at 12px muted.

**Spacing & layout.** 4px grid; 12 and 16 do most of the work. Card padding 16 (24 for feature cards), stack gap 12, chip gap 8, section gap 32, marketing section padding 104. Fixed measures: sidebar 248, top bar 64, phone frame 390, tab bar 76, content max 1200, prose max 760, touch target minimum 44. Mobile screens have 16px side padding; horizontal chip rows are the only thing allowed to bleed off-edge.

**Backgrounds.** Flat `--surface-page` (`#F4F6F8`) behind cards; no photography, no illustration, no patterns or textures — **the brand ships no imagery**, and rather than invent stock art, surfaces carry data. The marketing hero shows the product itself in a phone frame. Full-bleed colour blocks (`--blue-500`, `--ink-900`, `--ink-950`) do the work that photography usually does.

**Cards.** `--surface-card` white, 16px radius, 1px `--border-subtle` hairline, `--shadow-sm`. Feature and hero cards go to 24px radius and `--pad-card-lg`. A shadowed card never nests inside another shadowed card — inner cards use `variant="flat"`. Ink (`variant="inverse"`) is reserved for the single hero stat per screen; blue (`variant="brand"`) for coach prompts.

**Shadows.** Soft, low-contrast, based on `rgba(30,30,30,.05–.10)` — never black-heavy, never coloured except `--shadow-brand` (`rgba(42,105,200,.28)`), which appears *only* under blue primary buttons and the raised tab-bar action. Bottom sheets use an upward `--shadow-sheet`. There is no inner-shadow system; sunken areas use `--surface-sunken` fill instead.

**Borders.** Hairline 1px for dividers and card edges; 2px (`--border-width-strong`) only on checkbox/radio boxes and the featured pricing card. Dividers inside cards are `--border-subtle`; between rows in a list, a single top border on each row after the first.

**Transparency & blur.** Used in exactly two places: the sticky top bar / site header (`--glass-light` + `blur(14px)`) and the dialog scrim (`--surface-overlay` + blur). Everything else is opaque. No frosted cards, no translucent buttons.

**Animation.** Short and functional: 140ms for controls, 220ms for surfaces, 900ms for a ring filling on load, all on `--ease-standard` / `--ease-out`. One spring (`--ease-spring`) exists and is used only for the Switch knob. Rings and bars animate their value, never their opacity. No parallax, no scroll-jacking, no entrance animations on marketing sections, no bouncing.

**Hover.** Blue buttons darken one step (500 → 600); secondary buttons take a stronger border plus `--ink-025` fill; ghost controls fill with `--surface-sunken`; interactive cards lift `-1px` and gain `--shadow-md`; links darken and underline with a 3px offset. Never opacity fades.

**Press.** `scale(.97)` on buttons, icon buttons, chips and tab-bar items (`--press-scale`); cards compress to `.995`. Blue buttons also drop their shadow while pressed, so the button appears to sit down.

**Focus.** `:focus-visible` draws a 3px `--focus-ring` (blue-400) outline at 2px offset; inputs instead take a brand border plus a 3px `--surface-brand-subtle` halo. Focus is never removed.

**Imagery vibe (when the brand supplies photos).** The palette implies cool, high-contrast, desaturated gym interiors — grey concrete, black rubber, one blue accent — shot in daylight, never warm-orange "hustle" grading, never motivational-poster grain. Until real assets exist, do not substitute stock photography.

## Iconography

- **Set: Lucide** (`https://unpkg.com/lucide@0.454.0/dist/umd/lucide.min.js`), 2px stroke, round caps and joins, 24px grid — the closest available match to the logo's thin, geometric, rounded line work. **This is a substitution**: the brand supplied no icon set (see below).
- **Never paste raw SVG paths.** Use the `Icon` component (`<Icon name="dumbbell" size={20} />`); it renders Lucide's node data as inline SVG so glyphs inherit `currentColor`. Cards and kits load the Lucide UMD script; without it icons render as empty SVGs rather than breaking the page.
- **Sizes.** 12–13 inside badges and stat labels, 16 in chips and list rows, 20 default UI, 22–24 in nav and tab bars, 44px tinted tile (`--surface-brand-subtle` + `--radius-md`) for marketing feature cards.
- **Colour.** Inherited. Muted (`--text-muted`) in secondary rows, `--text-brand` when the icon *is* the meaning (coach sparkles, timer), status colours only inside status components.
- **Vocabulary in use.** `dumbbell` (training), `flame` / `utensils` (nutrition), `scale` (weight), `footprints` (steps), `sparkles` (AI coach — always this glyph, never a robot), `timer` (rest), `heart-pulse` (health sync), `droplet` (water), `bed` (rest day), `scan-barcode` (food scan), `trending-up` / `trending-down` (deltas), `check` (done), `plus` (log), `chevron-*` (navigation).
- **No emoji and no Unicode pictographs** as icons. The only non-icon glyphs used are the mathematical minus `−` in the Stepper and `€` in pricing.
- **Logo files** live in `assets/`: `logo.svg` (primary), `logo-mono-ink.svg` (single-colour ink pill for light backgrounds), `logo-inverse.svg` (white pill + ink wordmark, for blue or photographic backgrounds), `logo-mark.svg` (plate badge alone — minimum 24px), `logo-mark-blue.svg` (badge on a blue plate for dark UI). All are recolourings of the supplied file; **nothing was redrawn**. Clearspace is half the plate diameter on all sides; never stretch, rotate, add effects, or place the primary lockup on blue (use the inverse).

## Components

Reusable primitives, grouped by concern. Each has a `.d.ts` and a `.prompt.md`; each directory has a `@dsCard` HTML showing its states.

**Core** — `Icon`, `Button`, `IconButton`, `Card`, `Badge`, `Tag`, `Avatar`
**Forms** — `Input`, `Select`, `Checkbox`, `Radio`, `Switch`, `Stepper`
**Feedback** — `ProgressBar`, `Toast`, `Tooltip`, `Dialog`
**Navigation** — `Tabs`, `TabBar`, `NavItem`
**Tracking** — `ProgressRing`, `MacroBar`, `StatTile`, `SetRow`, `AiBubble`, `TrendBars`

### Intentional additions

No source defined a component inventory, so the standard set above was authored — plus six domain primitives without which every screen would re-implement the same markup:

- `Icon` — wrapper for the substituted Lucide glyph set, so the set can be swapped in one file.
- `Stepper` — reps/weight adjustment during a set, where typing is impractical.
- `ProgressRing`, `MacroBar`, `StatTile`, `SetRow`, `TrendBars` — the tracker's data vocabulary (goal ring, macro split, metric readout, logged set, sparkline-style bars).
- `AiBubble` — the AI assistant's conversation turn, including its suggestion chips.

`Tabs` covers both segmented and underline styles; `TabBar` (mobile) and `NavItem` (web sidebar) are separate because their anatomy differs.

## UI kits

| Kit | Surface | Screens |
| --- | --- | --- |
| `ui_kits/app/` | Mobile app, 390 × 844 | Today · Active workout (dark) · Nutrition · Coach chat · Log sheet |
| `ui_kits/dashboard/` | Web dashboard, 1440 × 900 | Weekly overview · Training plan · Settings (Nutrition and Progress deliberately blank) |
| `ui_kits/marketing/` | Marketing site, 1440 wide | Hero · Features · Coach section · Pricing · CTA band · Footer |

All three are click-through: tabs and sidebars switch screens, sets toggle, steppers count, the coach replies, dialogs and sheets open. They compose the components above rather than re-implementing them.

## Substitutions to confirm

1. **Fonts.** No binaries were supplied. The logo wordmark is a geometric rounded sans, so **Outfit** stands in for display/metrics and **Manrope** for UI text, with **JetBrains Mono** for set data — all served from the Fontsource CDN in `tokens/fonts.css`. Send the real licensed files and only that one file changes.
2. **Icons.** No icon set was supplied; **Lucide** (2px stroke) is used via CDN and wrapped in `Icon`.
3. **Imagery.** None supplied, so none is used. Screens are flat colour + data, and the marketing hero shows the product UI instead of a photograph.
