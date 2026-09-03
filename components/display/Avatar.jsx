import React from 'react';
export function Avatar({ name = '', src, size = 32, style }) {
  const initials = name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase();
  return src ? (
    <img src={src} alt={name} style={{ width: size, height: size, borderRadius: '50%', objectFit: 'cover', ...style }} />
  ) : (
    <span style={{ width: size, height: size, borderRadius: '50%', background: 'var(--primary-subtle)', color: 'var(--primary-subtle-fg)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: size * 0.38, fontWeight: 600, fontFamily: 'var(--font-sans)', flexShrink: 0, ...style }}>{initials}</span>
  );
}