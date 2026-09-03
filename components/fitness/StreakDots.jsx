import React from 'react';
export function StreakDots({ days = [], labels, size = 24, style }) {
  const dow = labels || ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(' + (days.length || 7) + ', minmax(0, 1fr))', gap: 6, fontFamily: 'var(--font-sans)', ...style }}>
      {days.map((d, i) => (
        <div key={i} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 0 }}>
          <div style={{ width: size, height: size, maxWidth: '100%', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: size * 0.42, background: d === 'done' ? 'var(--success)' : d === 'partial' ? 'var(--success-subtle)' : 'var(--surface-sunken)', color: d === 'done' ? '#fff' : d === 'partial' ? 'var(--success-fg)' : 'var(--text-3)', border: d === 'today' ? '1.5px dashed var(--border-strong)' : 'none', boxSizing: 'border-box' }}>
            {d === 'done' ? '✓' : ''}
          </div>
          <div style={{ fontSize: 10, color: 'var(--text-3)', marginTop: 4 }}>{dow[i % 7]}</div>
        </div>
      ))}
    </div>
  );
}