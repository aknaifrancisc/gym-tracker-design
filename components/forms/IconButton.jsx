import React from 'react';
export function IconButton({ label, size = 'md', variant = 'ghost', children, style, ...rest }) {
  const px = size === 'sm' ? 28 : 36;
  const [hover, setHover] = React.useState(false);
  return (
    <button aria-label={label} title={label} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ width: px, height: px, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-md)', border: variant === 'outline' ? '1px solid var(--border-strong)' : '1px solid transparent', background: hover ? 'var(--surface-hover)' : variant === 'outline' ? 'var(--surface)' : 'transparent', color: hover ? 'var(--text-1)' : 'var(--text-2)', cursor: 'pointer', transition: 'all var(--dur-fast) var(--ease)', ...style }} {...rest}>
      {children}
    </button>
  );
}