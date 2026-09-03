import React from 'react';
export function Progress({ value = 0, max = 100, tone = 'primary', height = 6, style }) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  const color = { primary: 'var(--primary)', success: 'var(--success)', warning: 'var(--warning)', danger: 'var(--danger)' }[tone] || tone;
  return (
    <div role="progressbar" aria-valuenow={value} aria-valuemax={max} style={{ background: 'var(--surface-sunken)', borderRadius: 999, height, overflow: 'hidden', ...style }}>
      <div style={{ width: pct + '%', height: '100%', background: color, borderRadius: 999, transition: 'width var(--dur-med) var(--ease)' }} />
    </div>
  );
}