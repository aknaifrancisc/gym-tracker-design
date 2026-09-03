import React from 'react';
export function Button({ variant = 'primary', size = 'md', disabled, icon, children, style, ...rest }) {
  const v = {
    primary: { background: 'var(--primary)', color: 'var(--primary-fg)', border: '1px solid transparent' },
    secondary: { background: 'var(--surface)', color: 'var(--text-1)', border: '1px solid var(--border-strong)' },
    ghost: { background: 'transparent', color: 'var(--text-2)', border: '1px solid transparent' },
    danger: { background: 'var(--danger)', color: '#fff', border: '1px solid transparent' },
  }[variant];
  const s = { sm: { padding: '6px 12px', fontSize: 13 }, md: { padding: '9px 16px', fontSize: 14 }, lg: { padding: '12px 20px', fontSize: 15 } }[size];
  const [hover, setHover] = React.useState(false);
  const hoverS = hover && !disabled ? (variant === 'primary' ? { background: 'var(--primary-hover)' } : variant === 'danger' ? { filter: 'brightness(0.92)' } : { background: 'var(--surface-hover)', color: 'var(--text-1)' }) : {};
  return (
    <button disabled={disabled} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 8, borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-sans)', fontWeight: 500, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, transition: 'all var(--dur-fast) var(--ease)', ...v, ...s, ...hoverS, ...style }} {...rest}>
      {icon}{children}
    </button>
  );
}