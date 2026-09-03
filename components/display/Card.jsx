import React from 'react';
/** Card. Set glow to add the signature corner bloom: 'tl' | 'tr' | 'bl' | 'br'
 *  (primary tint) or 'tr-accent' etc. for the amber secondary tint.
 *  One glow per card; alternate corners across a grid; never behind a table. */
export function Card({ title, icon, action, compact, interactive, glow, children, style }) {
  const [hover, setHover] = React.useState(false);
  const [corner, tint] = String(glow || '').split('-');
  const pos = { tl: { top: -85, left: -60 }, tr: { top: -85, right: -60 }, bl: { bottom: -95, left: -70 }, br: { bottom: -95, right: -60 } }[corner];
  return (
    <section onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ position: 'relative', overflow: glow ? 'hidden' : undefined, isolation: glow ? 'isolate' : undefined, background: 'var(--surface)', border: '1px solid ' + (interactive && hover ? 'var(--border-strong)' : 'var(--border)'), borderRadius: 'var(--radius-lg)', display: 'flex', flexDirection: 'column', boxShadow: interactive && hover ? 'var(--shadow-md)' : 'var(--shadow-sm)', padding: compact ? 'var(--card-pad-compact)' : 'var(--card-pad)', fontFamily: 'var(--font-sans)', transition: 'all var(--dur-fast) var(--ease)', cursor: interactive ? 'pointer' : 'default', ...style }}>
      {pos && <div aria-hidden style={{ position: 'absolute', ...pos, width: 250, height: 215, background: tint === 'accent' ? 'var(--glow-accent-any)' : 'var(--glow-tr)', pointerEvents: 'none', zIndex: -1 }} />}
      {(title || action) && (
        <header style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: compact ? 8 : 14 }}>
          {icon}
          <h3 style={{ margin: 0, fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--text-1)', flex: 1 }}>{title}</h3>
          {action && <span style={{ minWidth: 0, flexShrink: 1 }}>{action}</span>}
        </header>
      )}
      <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>{children}</div>
    </section>
  );
}
