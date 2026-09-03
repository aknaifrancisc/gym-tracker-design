import React from 'react';
export function Switch({ label, checked, onChange, disabled, style }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-1)', ...style }}>
      <span style={{ width: 36, height: 20, borderRadius: 999, background: checked ? 'var(--primary)' : 'var(--border-strong)', position: 'relative', transition: 'background var(--dur-fast) var(--ease)', flexShrink: 0 }}>
        <span style={{ position: 'absolute', top: 2, left: checked ? 18 : 2, width: 16, height: 16, borderRadius: '50%', background: '#fff', boxShadow: 'var(--shadow-sm)', transition: 'left var(--dur-fast) var(--ease)' }} />
      </span>
      <input type="checkbox" role="switch" checked={!!checked} disabled={disabled} onChange={onChange} style={{ position: 'absolute', opacity: 0, width: 0 }} />
      {label}
    </label>
  );
}