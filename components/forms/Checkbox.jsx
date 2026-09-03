import React from 'react';
export function Checkbox({ label, checked, onChange, disabled, style }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-1)', ...style }}>
      <span style={{ width: 16, height: 16, borderRadius: 4, border: '1px solid ' + (checked ? 'var(--primary)' : 'var(--border-strong)'), background: checked ? 'var(--primary)' : 'var(--surface)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'all var(--dur-fast) var(--ease)', flexShrink: 0 }}>
        {checked && <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1.5 5.5l2.5 2.5 4.5-6" stroke="var(--primary-fg)" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>}
      </span>
      <input type="checkbox" checked={!!checked} disabled={disabled} onChange={onChange} style={{ position: 'absolute', opacity: 0, width: 0 }} />
      {label}
    </label>
  );
}