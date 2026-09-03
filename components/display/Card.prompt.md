Surface container: flat `--surface`, 1px hairline border, radius 18 (`--radius-lg`), shadow-sm in light / none in dark. Optional header row.
```jsx
<Card title="Body metrics" glow="tr" action={<Button variant="ghost" size="sm">Edit</Button>}>…</Card>
```
`glow`: `tl | tr | bl | br` for the primary corner bloom, suffix `-accent` (e.g. `bl-accent`) for the amber secondary tint. One glow per card, alternate the corner across a grid, and never put one behind a table or a paragraph.
````
