import React from 'react';
export function Select({ label, options = [], style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-sans)', ...style }}>
      {label && <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-1)' }}>{label}</span>}
      <span style={{ position: 'relative', display: 'block' }}>
        <select onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ width: '100%', appearance: 'none', WebkitAppearance: 'none', padding: '9px 32px 9px 12px', fontSize: 14, fontFamily: 'inherit', color: 'var(--text-1)', background: 'var(--surface)', border: '1px solid ' + (focus ? 'var(--primary)' : 'var(--border-strong)'), borderRadius: 'var(--radius-sm)', boxShadow: focus ? 'var(--focus-ring)' : 'none', outline: 'none', cursor: 'pointer' }} {...rest}>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        <span style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-3)', fontSize: 11 }}>▾</span>
      </span>
    </label>
  );
}