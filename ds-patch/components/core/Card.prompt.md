Every panel in Gym-Tracker is a Card — 16px radius, hairline border, soft shadow.

```jsx
<Card>
  <h4>Today</h4>
</Card>
<Card variant="brand" padding="lg" interactive onClick={open}>Weekly report ready</Card>
```

Use \`variant="inverse"\` for the one hero stat per screen, \`brand\` for AI/coach prompts. Never nest a shadowed card inside a shadowed card — inner cards use \`variant="flat"\`.

`glow="tr"` adds the corner bloom — the system's only gradient — for a data widget that carries a headline metric:

```jsx
<Card glow="tr"><StatTile label="Training load" value="42.6" unit="t" /></Card>
<Card glow="bl-accent"><TrendBars … /></Card>
```

One glow per card, alternate the corner across a grid, `-accent` on at most one or two secondary cards per screen, and never behind a table, a paragraph or a form. Dashboard and marketing only — the mobile app stays flat.
