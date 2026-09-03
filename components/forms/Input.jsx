import React from 'react';
export function Input({ label, unit, hint, error, style, inputStyle, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-sans)', ...style }}>
      {label && <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-1)' }}>{label}</span>}
      <span style={{ display: 'flex', alignItems: 'center', background: 'var(--surface)', border: '1px solid ' + (error ? 'var(--danger)' : focus ? 'var(--primary)' : 'var(--border-strong)'), borderRadius: 'var(--radius-sm)', boxShadow: focus ? 'var(--focus-ring)' : 'none', transition: 'all var(--dur-fast) var(--ease)' }}>
        <input onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ flex: 1, minWidth: 0, border: 0, outline: 'none', background: 'transparent', padding: '9px 12px', fontSize: 14, fontFamily: 'inherit', color: 'var(--text-1)', ...inputStyle }} {...rest} />
        {unit && <span style={{ padding: '0 12px', fontSize: 13, color: 'var(--text-3)', fontFamily: 'var(--font-mono)' }}>{unit}</span>}
      </span>
      {(error || hint) && <span style={{ fontSize: 12, color: error ? 'var(--danger-fg)' : 'var(--text-3)' }}>{error || hint}</span>}
    </label>
  );
}