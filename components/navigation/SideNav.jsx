import React from 'react';
export function SideNav({ items = [], activeId, onSelect, footer, header, style }) {
  return (
    <nav style={{ width: 'var(--sidebar-width)', minHeight: '100%', background: 'var(--surface)', borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column', padding: '16px 12px', fontFamily: 'var(--font-sans)', boxSizing: 'border-box', ...style }}>
      {header || <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-1)', padding: '4px 12px 16px', letterSpacing: '-0.01em' }}>Gym Tracker</div>}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
        {items.map((it) => <NavItem key={it.id} item={it} activeId={activeId} onSelect={onSelect} depth={0} />)}
      </div>
      {footer}
    </nav>
  );
}
function NavItem({ item, activeId, onSelect, depth }) {
  const active = item.id === activeId;
  const [hover, setHover] = React.useState(false);
  const [open, setOpen] = React.useState(item.open !== false);
  const hasKids = item.children && item.children.length > 0;
  const st = { display: 'flex', alignItems: 'center', gap: 10, width: '100%', boxSizing: 'border-box', border: 0, textAlign: 'left', padding: '8px 12px', paddingLeft: 12 + depth * 20, borderRadius: 'var(--radius-md)', fontSize: 14, fontWeight: active ? 600 : 400, fontFamily: 'inherit', cursor: 'pointer', textDecoration: 'none', background: active ? 'var(--primary-subtle)' : hover ? 'var(--surface-hover)' : 'transparent', color: active ? 'var(--primary-subtle-fg)' : 'var(--text-2)', transition: 'all var(--dur-fast) var(--ease)' };
  const inner = <React.Fragment>
    {item.icon && <span style={{ display: 'inline-flex', width: 18, justifyContent: 'center' }}>{item.icon}</span>}
    <span style={{ flex: 1 }}>{item.label}</span>
    {hasKids && <span style={{ fontSize: 10, color: 'var(--text-3)', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform var(--dur-fast) var(--ease)' }}>▾</span>}
  </React.Fragment>;
  const hoverProps = { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false) };
  return (
    <div>
      {item.href
        ? <a href={item.href} {...hoverProps} style={st}>{inner}</a>
        : <button {...hoverProps} onClick={() => (hasKids ? setOpen(!open) : onSelect && onSelect(item.id))} style={st}>{inner}</button>}
      {hasKids && open && item.children.map((c) => <NavItem key={c.id} item={c} activeId={activeId} onSelect={onSelect} depth={depth + 1} />)}
    </div>
  );
}
