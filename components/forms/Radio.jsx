import React from 'react';
export function Radio({ label, checked, onChange, name, value, disabled, style }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-1)', ...style }}>
      <span style={{ width: 16, height: 16, borderRadius: '50%', border: '1px solid ' + (checked ? 'var(--primary)' : 'var(--border-strong)'), background: 'var(--surface)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'all var(--dur-fast) var(--ease)', flexShrink: 0 }}>
        {checked && <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--primary)' }} />}
      </span>
      <input type="radio" name={name} value={value} checked={!!checked} disabled={disabled} onChange={onChange} style={{ position: 'absolute', opacity: 0, width: 0 }} />
      {label}
    </label>
  );
}