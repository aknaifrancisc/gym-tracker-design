import React from 'react';
export function Badge({ tone = 'neutral', children, style }) {
  const t = {
    neutral: { background: 'var(--surface-sunken)', color: 'var(--text-2)' },
    primary: { background: 'var(--primary-subtle)', color: 'var(--primary-subtle-fg)' },
    success: { background: 'var(--success-subtle)', color: 'var(--success-fg)' },
    warning: { background: 'var(--warning-subtle)', color: 'var(--warning-fg)' },
    danger: { background: 'var(--danger-subtle)', color: 'var(--danger-fg)' },
  }[tone];
  return <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '3px 10px', borderRadius: 'var(--radius-full)', fontSize: 12, fontWeight: 500, fontFamily: 'var(--font-sans)', whiteSpace: 'nowrap', ...t, ...style }}>{children}</span>;
}