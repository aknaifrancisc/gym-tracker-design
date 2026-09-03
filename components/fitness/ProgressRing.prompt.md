Single-color goal ring (replaces old gradient donut).
```jsx
<ProgressRing value={8500} max={10000} label="8,500" sublabel="of 10,000 steps" />
```
Arc colour defaults to `var(--primary)` — leave it alone so the ring follows the page scheme. `color` only strokes the arc; track is `var(--surface-sunken)`.