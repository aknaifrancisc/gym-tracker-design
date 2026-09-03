import React from 'react';
export function ProgressRing({ value = 0, max = 100, size = 120, stroke = 10, color = 'var(--primary)', label, sublabel, textColor = 'var(--text-1)', sublabelColor = 'var(--text-2)', style }) {
  const r = (size - stroke) / 2, c = 2 * Math.PI * r;
  const pct = Math.min(1, Math.max(0, value / max));
  return (
    <div style={{ position: 'relative', width: size, height: size, ...style }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--surface-sunken)" strokeWidth={stroke} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - pct)} style={{ transition: 'stroke-dashoffset var(--dur-med) var(--ease)' }} />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-sans)' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontFeatureSettings: 'var(--tnum)', fontWeight: 600, fontSize: size * 0.22, color: textColor, lineHeight: 1 }}>{label != null ? label : value}</span>
        {sublabel && <span style={{ fontSize: Math.max(10, size * 0.09), color: sublabelColor, marginTop: 2 }}>{sublabel}</span>}
      </div>
    </div>
  );
}