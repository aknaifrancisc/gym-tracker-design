import React from 'react';
export function WorkoutRow({ icon, title, meta, stats = [], badge, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px 14px', padding: '12px 16px', borderRadius: 'var(--radius-md)', background: hover && onClick ? 'var(--surface-hover)' : 'transparent', cursor: onClick ? 'pointer' : 'default', fontFamily: 'var(--font-sans)', transition: 'background var(--dur-fast) var(--ease)', ...style }}>
      {icon}
      <div style={{ flex: '1 1 140px', minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-1)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</div>
        {meta && <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 2, whiteSpace: 'nowrap' }}>{meta}</div>}
      </div>
      {stats.map((s, i) => (
        <div key={i} style={{ textAlign: 'right', minWidth: 44, flexShrink: 0 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontFeatureSettings: 'var(--tnum)', fontSize: 14, fontWeight: 500, color: 'var(--text-1)' }}>{s.value}</div>
          <div style={{ fontSize: 11, color: 'var(--text-3)' }}>{s.label}</div>
        </div>
      ))}
      {badge}
    </div>
  );
}