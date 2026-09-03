import React from 'react';

export function Card(props) {
  const cls = ['gt-card'];
  if (props.variant && props.variant !== 'default') cls.push('gt-card--' + props.variant);
  if (props.interactive) cls.push('gt-card--interactive');
  if (props.glow) cls.push('gt-card--glow-' + props.glow);
  if (props.className) cls.push(props.className);
  const pad = props.padding === 'none' ? 0
    : props.padding === 'lg' ? 'var(--pad-card-lg)'
    : props.padding === 'sm' ? 'var(--space-4)'
    : 'var(--pad-card)';
  return React.createElement('div', {
    className: cls.join(' '),
    onClick: props.onClick,
    style: Object.assign({ padding: pad }, props.style)
  }, props.glow ? [React.createElement('span', { className: 'gt-glow', key: 'glow', 'aria-hidden': true }), props.children] : props.children);
}
