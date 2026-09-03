# Midjourney prompts — Gym Tracker image slots

House look, per the design system: cool, high-contrast, desaturated gym interiors — grey concrete, black rubber, one blue accent, daylight. Never warm-orange "hustle" grading, no motivational-poster grain, no text in image.

Shared style suffix (append to any prompt below):
`--style raw --stylize 150 --no text, watermark, logo, warm orange grading, hdr glow`

---

## Dashboard Redesign.dc.html

### `gt-today-session` — hero "Today's session" photo (300×190, rounded 16)
Landscape crop, sits on a near-black card, so keep the frame dark and the subject readable.

```
wide interior of a quiet strength-training gym in cool daylight, grey concrete floor, black rubber plates on a loaded barbell in the foreground, soft window light from the left, muted desaturated palette with a single blue accent on equipment trim, no people, editorial photography, 50mm, shallow depth of field --ar 16:10 --style raw --stylize 150 --no text, watermark, logo, warm orange grading, hdr glow
```

Alternate (with a person, anonymous):
```
back view of a lone lifter chalking hands at a squat rack, cool grey concrete gym, black rubber flooring, desaturated cinematic colour, daylight from high windows, face not visible, documentary editorial photography, 35mm --ar 16:10 --style raw --stylize 150 --no text, watermark, logo, warm orange grading, hdr glow
```

### `gt-muscle-map` — muscle balance body render (200×250, rounded 16)
Portrait, sits on warm off-white `#f7f5f1`; should read as a diagram, not a photo.

```
minimal anatomical front-view human torso render, matte light grey clay material on off-white background, major muscle groups subtly separated as clean planes, chest and legs tinted a single desaturated blue, soft studio lighting, no face detail, medical-illustration cleanliness, front orthographic view --ar 4:5 --style raw --stylize 100 --no text, watermark, veins, gore, logo, warm orange grading
```

### `gt-user-avatar` (34×34 circle) · `gt-top-avatar` (32×32 circle) — member photo
Same person in both slots; tight crop, plain background.

```
head-and-shoulders portrait of a 35-year-old man in a plain dark grey t-shirt, neutral friendly expression, flat light grey studio background, cool desaturated colour grading, natural daylight, sharp focus on eyes, centred square crop --ar 1:1 --style raw --stylize 100 --no text, watermark, logo, warm orange grading
```

### `gt-coach-avatar` — AI coach avatar (40×40 circle)
Not a photo of a person and not a robot — the coach is a mark, per the system's "sparkles, never a robot" rule.

```
abstract circular emblem, matte deep navy field with a single four-point spark glyph in bright blue at the centre, flat vector look, soft even lighting, no gradient banding, minimal geometric brand mark, centred square --ar 1:1 --style raw --stylize 80 --no text, watermark, robot, face, letters
```

---

## Fitness Profile.dc.html

### `gt-profile-portrait` — member portrait beside the page title (224×172, rounded 18)
Landscape crop on off-white paper; relaxed, not a gym action shot.

```
relaxed three-quarter portrait of a 42-year-old man in a plain charcoal t-shirt standing against a light grey concrete wall, arms loose, calm neutral expression, cool desaturated daylight from the side, editorial documentary photography, 50mm, landscape crop with headroom --ar 4:3 --style raw --stylize 150 --no text, watermark, logo, warm orange grading, hdr glow
```

### `gt-progress-feb` · `gt-progress-may` · `gt-progress-aug` — progress photo strip (3 × portrait, 210px tall, rounded 16)
Generate as one consistent set: same person, same pose, same wall, same light — only the body changes. Run the base prompt once, then use `--seed` (same value) plus the month variation line so the three frames match.

Base (February — heaviest):
```
full-body front-facing progress photo of a 42-year-old man in black shorts, neutral standing pose arms at sides, plain light grey concrete wall, flat even daylight, cool desaturated colour grading, no styling, clinical body-composition documentation, vertical framing head to feet --ar 3:4 --seed 4820 --style raw --stylize 100 --no text, watermark, logo, mirror, gym equipment, warm orange grading, muscle oil sheen
```

May — same frame, slightly leaner:
```
full-body front-facing progress photo of the same 42-year-old man in black shorts, visibly slimmer waist, neutral standing pose arms at sides, identical plain light grey concrete wall and flat daylight, cool desaturated grading, vertical framing head to feet --ar 3:4 --seed 4820 --style raw --stylize 100 --no text, watermark, logo, mirror, gym equipment, warm orange grading, muscle oil sheen
```

August — same frame, leanest of the three:
```
full-body front-facing progress photo of the same 42-year-old man in black shorts, leaner torso with light muscle definition, neutral standing pose arms at sides, identical plain light grey concrete wall and flat daylight, cool desaturated grading, vertical framing head to feet --ar 3:4 --seed 4820 --style raw --stylize 100 --no text, watermark, logo, mirror, gym equipment, warm orange grading, muscle oil sheen
```

### `gt-profile-side-avatar` (34×34) · `gt-profile-top-avatar` (32×32)
Reuse the member avatar prompt from the Dashboard section above — same person, square crop.

---

## Weight Metrics.dc.html

### `gt-weight-hero` — weigh-in photo in the ink card (216×210, rounded 16)
Portrait-ish crop on a near-black card, so keep it dark and graphic.

```
overhead close-up of a matte black digital bathroom scale on grey concrete floor, bare feet stepping on, cool grey daylight, high contrast desaturated palette, single blue accent on the display, editorial product photography, no readable numbers on the display --ar 1:1 --style raw --stylize 150 --no text, watermark, logo, warm orange grading, hdr glow
```

### `gt-weight-meal` — macros-split thumbnail (64×64, rounded 14)
Tiny — needs one clear shape, no scene.

```
top-down close-up of a single high-protein meal in a plain grey ceramic bowl, grilled chicken rice and greens, flat even daylight, cool desaturated colour, minimal styling, centred square composition, shallow background --ar 1:1 --style raw --stylize 100 --no text, watermark, logo, cutlery clutter, warm orange grading
```

### `gt-week-1-photo` · `gt-week-2-photo` · `gt-week-3-photo` — 46×46 check-in thumbnails on the measurement cards
Same set, one per weigh-in week — a tape-measure/detail crop, not a face.

```
extreme close-up of a soft white tape measure wrapped around a torso, grey t-shirt fabric, cool neutral daylight, desaturated documentary detail shot, square crop, shallow depth of field --ar 1:1 --seed 7710 --style raw --stylize 100 --no text, watermark, logo, face, warm orange grading
```

Vary the other two with `close-up of a tape measure coiled on grey concrete` and `close-up of hands writing in a training notebook beside a tape measure`, keeping `--seed 7710` and the same negatives.

### `gt-weight-side-avatar` (34×34) · `gt-weight-top-avatar` (32×32)
Reuse the member avatar prompt from the Dashboard section.

---

## Activity Tracker.dc.html

### `gt-activity-hero` — walking photo in the ink card (188×196, rounded 16)
Portrait crop on near-black; keep it dark and graphic, no face.

```
low-angle detail of grey running shoes mid-stride on wet city pavement, cool overcast daylight, desaturated high-contrast palette, motion in the trailing foot, no face visible, editorial documentary photography, 35mm, vertical crop --ar 4:5 --style raw --stylize 150 --no text, watermark, logo, warm orange grading, hdr glow
```

### `gt-zones-photo` — cardio banner on the Heart rate zones tab (full width × 196, rounded 20)
Wide crop on off-white paper.

```
wide shot of a row of empty treadmills in a grey concrete cardio room, tall windows with cool daylight, black and grey machines with a single blue accent light, desaturated cinematic palette, no people, architectural editorial photography, 28mm --ar 21:9 --style raw --stylize 150 --no text, watermark, logo, warm orange grading, hdr glow
```

### `gt-cardio-1` … `gt-cardio-5` — session thumbnails on the Cardio sessions tab (72×56, rounded 12)
Tiny — one legible object each, matched grading. Keep `--seed 3140` across the five so the row reads as a set.

1. Treadmill run: `close-up of a treadmill belt and console in a grey gym, cool daylight, desaturated`
2. Zone 2 walk: `close-up of a paved park path with grey gravel edges, flat overcast light, desaturated`
3. Indoor cycle: `close-up of a black indoor cycling bike crank and pedal, grey concrete floor, cool light`
4. Intervals: `close-up of a black rubber gym floor with a chalk line, hard cool daylight, desaturated`
5. Rower: `close-up of a rowing machine handle and chain, matte black metal, cool grey daylight`

Append to each: `--ar 5:4 --seed 3140 --style raw --stylize 100 --no text, watermark, logo, people, warm orange grading`

### `gt-activity-side-avatar` (34×34) · `gt-activity-top-avatar` (32×32)
Reuse the member avatar prompt from the Dashboard section.

---

## Strength Progress.dc.html

### `gt-strength-hero` — barbell photo in the ink card (176×220, rounded 16)
Tall portrait crop on near-black; dark, graphic, no face.

```
tight vertical crop of a loaded olympic barbell resting on a black squat rack, chalk dust on knurling, grey concrete gym wall behind, cool side daylight, desaturated high-contrast palette with one blue accent, editorial equipment photography, 85mm --ar 4:5 --style raw --stylize 150 --no text, watermark, logo, people, warm orange grading, hdr glow
```

### `gt-pr-bench` · `gt-pr-squat` · `gt-pr-deadlift` — PR card header bands (full width × 88, rect)
Wide, shallow crops — the lift's equipment, not a hero portrait. Keep `--seed 5260` across all three so the row grades identically.

Bench press:
```
wide shallow crop of a black flat bench and barbell in a grey concrete gym, cool daylight from the side, desaturated palette, no people, editorial equipment photography --ar 16:5 --seed 5260 --style raw --stylize 120 --no text, watermark, logo, warm orange grading, hdr glow
```

Squats:
```
wide shallow crop of a black squat rack with a loaded barbell at shoulder height, grey concrete floor, cool daylight, desaturated palette, no people --ar 16:5 --seed 5260 --style raw --stylize 120 --no text, watermark, logo, warm orange grading, hdr glow
```

Deadlift:
```
wide shallow crop of a loaded barbell on black rubber gym flooring seen from the side, black bumper plates, cool daylight, desaturated palette, no people --ar 16:5 --seed 5260 --style raw --stylize 120 --no text, watermark, logo, warm orange grading, hdr glow
```

### `gt-strength-side-avatar` (34×34) · `gt-strength-top-avatar` (32×32)
Reuse the member avatar prompt from the Dashboard section.

---

## Workout Logs.dc.html

### `gt-log-1` … `gt-log-5` — muscle-map panels on each log card (150 × full card height, rect)
Diagram, not a photo: a matte clay anatomy figure with the session's worked muscles tinted. Same figure, same pose, same light in all five — only the highlight moves. Keep `--seed 6180` across the set.

Base (adapt the highlight clause per card):
```
minimal anatomical front-view human figure render, matte light grey clay material on off-white background, muscle groups as clean separated planes, CHEST SHOULDERS AND TRICEPS tinted desaturated blue, soft even studio lighting, no face detail, medical-illustration cleanliness, full body vertical orthographic view --ar 3:5 --seed 6180 --style raw --stylize 100 --no text, watermark, veins, gore, logo, warm orange grading
```

Highlight clause per card — swap the capitalised part:
1. `gt-log-1` Push A: `CHEST SHOULDERS AND TRICEPS tinted desaturated blue`
2. `gt-log-2` Pull B: `UPPER BACK AND BICEPS tinted desaturated blue`
3. `gt-log-3` Leg day: `QUADS HAMSTRINGS AND CORE tinted desaturated blue`
4. `gt-log-4` Monday chest: `CHEST AND TRICEPS tinted desaturated blue`
5. `gt-log-5` First one back: `WHOLE BODY tinted a light even desaturated blue`

### `gt-logs-side-avatar` (34×34) · `gt-logs-top-avatar` (32×32)
Reuse the member avatar prompt from the Dashboard section.

---

## Exercise Library.dc.html

### `gt-ex-1` … `gt-ex-12` — exercise demo panels at the top of each card (404×186, rounded 20 top)
Not photographs: the library reads as a reference set, so every frame is the same matte-clay figure demonstrating the movement, with the worked muscle tinted. Wide shallow crop, off-white background so it sits cleanly on the white card. Keep `--seed 8140` across all twelve so the grid grades identically, and keep the figure at the same scale and camera height in each.

Base prompt (swap the capitalised clauses per exercise):
```
minimal anatomical exercise demonstration render, matte light grey clay human figure performing a DUMBBELL SHOULDER PRESS, two-phase side-by-side pose showing start and end position, SHOULDERS AND TRICEPS tinted desaturated blue, plain off-white background, matte black equipment, soft even studio lighting, no face detail, medical-illustration cleanliness, wide shallow horizontal crop --ar 2:1 --seed 8140 --style raw --stylize 100 --no text, watermark, veins, gore, logo, gym background, warm orange grading
```

Per-card clauses — replace `MOVEMENT` and `MUSCLES` in the base:

| Slot | MOVEMENT | MUSCLES tinted |
| --- | --- | --- |
| `gt-ex-1` | seated dumbbell Arnold press, rotating palms | SHOULDERS AND TRICEPS |
| `gt-ex-2` | flat barbell bench press, bar at chest and locked out | CHEST AND TRICEPS |
| `gt-ex-3` | decline barbell bench press on a declined bench | LOWER CHEST |
| `gt-ex-4` | incline barbell bench press on a 45° bench | UPPER CHEST AND FRONT DELTS |
| `gt-ex-5` | back squat with a loaded barbell, bottom and standing position | QUADS GLUTES AND CORE |
| `gt-ex-6` | behind-the-back cable curl, single low pulley | BICEPS |
| `gt-ex-7` | behind-the-back cable lateral raise, single low pulley | SIDE DELTS |
| `gt-ex-8` | bent-over straight-arm cable pulldown, hinged torso | LATS AND UPPER BACK |
| `gt-ex-9` | bent-over cable row, hinged torso pulling to the waist | MID BACK AND REAR DELTS |
| `gt-ex-10` | standing cable crossover, arms wide and arms crossed | CHEST |
| `gt-ex-11` | cable rope upright row, rope pulled to the chin | SHOULDERS AND TRAPS |
| `gt-ex-12` | seated chest press machine, arms extended and retracted | CHEST AND TRICEPS |

Difficulty and scope badges sit over the top-left and top-right corners of this frame — keep both corners uncluttered (figure centred, equipment low in frame).

### `gt-ex-side-avatar` (34×34)
Reuse the member avatar prompt from the Dashboard section — same person, square crop. (This page has no top-bar avatar.)

---

## Macros Tracker.dc.html

Food is the one subject the house grading has to bend for slightly: still cool, still desaturated, but the plate itself keeps its own colour. Grey concrete or off-white ceramic surfaces, flat daylight from one side, no props, no cutlery styling, no warm restaurant grading. Keep `--seed 4620` across every slot on this page so the meal photos, the hero and the recipe cards read as one shoot.

### `gt-macros-hero` — plated meal in the ink card (176×210, rounded 16)
Tall portrait crop on a near-black card — keep the frame dark, the plate is the only bright thing in it.

```
overhead photograph of a single plate of grilled chicken, rice and broccoli on a dark grey concrete table, one soft daylight source from the left, deep shadows, cool desaturated colour grading, minimal editorial food photography, no hands, no cutlery arrangement, portrait crop --ar 4:5 --seed 4620 --style raw --stylize 120 --no text, watermark, logo, people, warm orange grading, restaurant styling
```

### `gt-meal-1` … `gt-meal-4` — meal row thumbnails (64×52, rounded 12)
Tiny — one legible dish each, shot flat overhead on the same off-white ceramic so the four read as a column. Same seed for all four.

1. `gt-meal-1` Breakfast: `overhead close-up of a white bowl of skyr topped with berries and granola`
2. `gt-meal-2` Lunch: `overhead close-up of a white plate of sliced chicken breast, white rice and broccoli`
3. `gt-meal-3` Snack: `overhead close-up of a protein shaker beside a peeled banana on off-white ceramic`
4. `gt-meal-4` Dinner: `overhead close-up of a white plate of salmon fillet, boiled potatoes and green salad`

Append to each: `--ar 5:4 --seed 4620 --style raw --stylize 100 --no text, watermark, logo, people, warm orange grading, cutlery styling`

Add `, flat even daylight, cool desaturated grading, plain off-white ceramic surface` before the flags on all four so the set grades identically.

### `gt-recipe-1` · `gt-recipe-2` · `gt-recipe-3` — recipe card header bands (full width × 104, rect)
Wide shallow crops sitting above the recipe title — the finished dish, three-quarter angle rather than overhead so the row doesn't repeat the meal thumbnails.

1. `gt-recipe-1` Skyr protein bowl: `wide shallow three-quarter crop of a skyr bowl with berries and seeds on grey concrete`
2. `gt-recipe-2` Turkey rice bowl: `wide shallow three-quarter crop of a turkey and rice bowl with vegetables on grey concrete`
3. `gt-recipe-3` Cod, potatoes, greens: `wide shallow three-quarter crop of a cod fillet with potatoes and greens on a white plate, grey concrete table`

Append to each: `, one soft daylight source from the side, cool desaturated colour grading, minimal editorial food photography, no hands --ar 16:5 --seed 4620 --style raw --stylize 120 --no text, watermark, logo, people, warm orange grading, restaurant styling`

### `gt-macros-side-avatar` (34×34)
Reuse the member avatar prompt from the Dashboard section — same person, square crop. (This page has no top-bar avatar.)

---

## Macros Tracker > Recipes.dc.html

Same food rules as the Macros Tracker page, and the same `--seed 4620` — the recipe grid, the meal thumbnails and the macros hero are one shoot. Every card frame is a wide shallow crop of the finished dish on grey concrete or off-white ceramic, one soft daylight source from the side, no hands, no cutlery arrangement, no napkins or herb-sprinkle styling. The photo carries no text: titles, tags and macros all sit in the white card body below it.

Shared food suffix (append to every prompt in this section):
`, one soft daylight source from the side, flat cool desaturated colour grading, minimal editorial food photography, no hands --seed 4620 --style raw --stylize 120 --no text, watermark, logo, people, warm orange grading, restaurant styling, herb sprinkle styling`

### `gt-rec-featured` — coach-pick photo (≈300×300, fills the left half of the featured card)
Near-square crop on white; the only large food image on the page, so it can carry more depth than the grid cards.

```
three-quarter view of a salmon fillet with herb potatoes and green salad on a plain off-white ceramic plate, grey concrete table, shallow depth of field, square crop
```

### `gt-rec-r1` … `gt-rec-r9` — recipe card photos (≈404×158, rect, top of each card)
Wide shallow crops, dish centred, plate filling the frame edge to edge. The bookmark button sits top-left and the cook-time pill top-right — keep both corners free of the dish's high-contrast detail. Append `--ar 8:3` plus the shared suffix to each.

| Slot | Recipe | Prompt body |
| --- | --- | --- |
| `gt-rec-r1` | Chicken stew with pasta | `wide overhead crop of a cast-iron pan of chicken stew with short pasta and peppers, grey concrete table` |
| `gt-rec-r2` | Light tuna salad on rye | `wide three-quarter crop of an open rye sandwich topped with tuna salad and lettuce on an off-white ceramic plate` |
| `gt-rec-r3` | Chicken gizzard rice pilaf | `wide overhead crop of a shallow pan of rice pilaf with braised chicken gizzards and diced vegetables, grey concrete table` |
| `gt-rec-r4` | Country potatoes with bacon | `wide overhead crop of roasted potato cubes with bacon and onion in a black cast-iron skillet, grey concrete table` |
| `gt-rec-r5` | Bacon and basil pasta | `wide overhead crop of a bowl of short pasta in tomato sauce with bacon and basil leaves, off-white ceramic bowl` |
| `gt-rec-r6` | Apple yogurt cake | `wide three-quarter crop of a sliced apple yogurt cake on a plain grey ceramic board, one slice separated` |
| `gt-rec-r7` | Flat white | `wide three-quarter crop of a flat white in a matte black cup and saucer on grey concrete, plain latte art` |
| `gt-rec-r8` | Mashed potatoes | `wide overhead crop of mashed potatoes in a plain off-white ceramic bowl with a wooden spoon resting in it` |
| `gt-rec-r9` | Skyr bowl with granola | `wide overhead crop of a white bowl of skyr with blueberries and granola on grey concrete` |

Generate all nine in one batch with the same seed and flags; if one frame comes back warmer than the rest, re-roll rather than colour-correcting — the grid only works if the nine grade identically.

### `gt-macros-side-avatar` (34×34)
Shared with the Daily meals and Macros Tracker pages — same member avatar prompt, same file. (This page has no top-bar avatar.)

---

## Macros Tracker > Ingredients.dc.html

The ingredient library is a reference set, not a food shoot: every frame is **one raw ingredient, centred, on a plain surface, square crop**, no plating, no styling, no packaging and no branded labels — the row already carries the name, so the picture only has to be identifiable at 40 px. Keep `--seed 4620` for grading continuity with the rest of the nutrition pages, but drop the depth of field: these want flat, even, catalogue light.

Shared suffix (append to every prompt in this section):
`, centred single subject, plain light grey concrete surface, flat even daylight, no shadow drama, cool desaturated colour grading, catalogue product photography, square crop --ar 1:1 --seed 4620 --style raw --stylize 90 --no text, watermark, logo, packaging, branded label, hands, people, props, cutlery, warm orange grading, restaurant styling`

### `gt-ing-use-1` … `gt-ing-use-4` — "Most logged" list thumbnails (38×38, rounded 11)
The four staples, same treatment as the table rows.

| Slot | Ingredient | Prompt body |
| --- | --- | --- |
| `gt-ing-use-1` | Boiled chicken breast | `a plain boiled skinless chicken breast, one piece` |
| `gt-ing-use-2` | Skyr, plain 0% | `a small white ceramic bowl of thick plain skyr, unstyled` |
| `gt-ing-use-3` | Banana | `one ripe banana, unpeeled` |
| `gt-ing-use-4` | Basmati rice, cooked | `a small mound of cooked white basmati rice` |

### `gt-ing-new-1` … `gt-ing-new-4` — "Added this week" tiles in the ink card (≈62×62, rounded 11)
These four sit on the near-black card, so shoot them on a **dark grey concrete** surface instead of the light one — swap `plain light grey concrete surface` for `plain dark grey concrete surface, low key` in the shared suffix, keeping everything else identical.

| Slot | Ingredient | Prompt body |
| --- | --- | --- |
| `gt-ing-new-1` | Skyr 0% | `a small white ceramic bowl of thick plain skyr` |
| `gt-ing-new-2` | Rye bread | `two slices of dark rye bread, stacked` |
| `gt-ing-new-3` | Lentils | `a small mound of cooked brown lentils` |
| `gt-ing-new-4` | Olive oil | `a small plain glass dish of olive oil` |

### `gt-ing-i1` … `gt-ing-i12` — table row thumbnails (40×40, rounded 11)
Generate all twelve in one batch so the column grades as a set. The frame is tiny — one object, filling roughly 70% of the square, nothing else in shot.

| Slot | Ingredient | Prompt body |
| --- | --- | --- |
| `gt-ing-i1` | Air-fried salmon | `one cooked salmon fillet with skin, single piece` |
| `gt-ing-i2` | All-purpose flour | `a small heap of white wheat flour` |
| `gt-ing-i3` | Apple puff pastry pie | `one slice of apple puff pastry pie, cut face towards camera` |
| `gt-ing-i4` | Apples | `two green apples, one whole and one halved` |
| `gt-ing-i5` | Ayran | `a plain unlabelled glass of salted drinking yoghurt` |
| `gt-ing-i6` | Baked apple purée | `a small white bowl of pale apple purée` |
| `gt-ing-i7` | Baklava with sour cherries | `two pieces of walnut baklava with a sour cherry on top` |
| `gt-ing-i8` | Banana | `one ripe banana, unpeeled` |
| `gt-ing-i9` | Basilico tomato sauce | `a small white bowl of smooth tomato basil sauce with one basil leaf` |
| `gt-ing-i10` | Beef salad | `a small mound of chopped potato and vegetable salad bound with mayonnaise` |
| `gt-ing-i11` | Crispbread with gouda | `two seeded rye crispbreads stacked, one topped with a slice of gouda` |
| `gt-ing-i12` | Boiled chicken breast | `a plain boiled skinless chicken breast, sliced across` |

Two hard rules for this set, because the source screens broke both: **no supermarket packaging** (the library stores nutrition per 100 g, not a brand) and **no coloured studio backdrops** — every square is the same grey surface so the column reads as one table, not twelve adverts.

### `gt-macros-side-avatar` (34×34)
Shared with the other nutrition pages — same member avatar prompt, same file. (This page has no top-bar avatar.)
