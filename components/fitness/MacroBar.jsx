import React from 'react';
export function MacroBar({ segments = [], height = 10, legend = true, style }) {
  const total = segments.reduce((s, x) => s + x.value, 0) || 1;
  return (
    <div style={{ fontFamily: 'var(--font-sans)', ...style }}>
      <div style={{ display: 'flex', height, borderRadius: 999, overflow: 'hidden', gap: 2 }}>
        {segments.map((s, i) => <div key={i} style={{ width: (s.value / total) * 100 + '%', background: s.color || 'var(--chart-' + (i + 1) + ')' }} />)}
      </div>
      {legend && (
        <div style={{ display: 'flex', gap: 16, marginTop: 8, flexWrap: 'wrap' }}>
          {segments.map((s, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--text-2)' }}>
              <span style={{ width: 8, height: 8, borderRadius: 2, background: s.color || 'var(--chart-' + (i + 1) + ')' }} />
              {s.label} <span style={{ fontFamily: 'var(--font-mono)', fontFeatureSettings: 'var(--tnum)', color: 'var(--text-1)', fontWeight: 500 }}>{s.display != null ? s.display : s.value}</span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}