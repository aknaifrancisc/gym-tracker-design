The core metric card: label, big mono value + small unit, optional delta badge, footer slot.
```jsx
<StatCard label="Current weight" value="104.8" unit="kg" delta="↓ 6.2 kg" footer={<Progress value={62} tone="success" />} />
```
KPI variant: `gradient="violet"` — soft tinted wash with faded color blooms, dark text; use for KPI rows.