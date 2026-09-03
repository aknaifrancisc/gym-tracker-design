import React from 'react';
export function Tabs({ tabs = [], active, onChange, style }) {
  return (
    <div role="tablist" style={{ display: 'flex', flexWrap: 'wrap', minWidth: 0, gap: 4, background: 'var(--surface-sunken)', padding: 3, borderRadius: 'var(--radius-md)', width: 'fit-content', maxWidth: '100%', fontFamily: 'var(--font-sans)', ...style }}>
      {tabs.map((t) => {
        const on = t === active;
        return (
          <button key={t} role="tab" aria-selected={on} onClick={() => onChange && onChange(t)}
            style={{ border: 0, padding: '6px 12px', borderRadius: 6, fontSize: 13, fontWeight: 500, fontFamily: 'inherit', cursor: 'pointer', whiteSpace: 'nowrap', background: on ? 'var(--surface)' : 'transparent', color: on ? 'var(--text-1)' : 'var(--text-2)', boxShadow: on ? 'var(--shadow-sm)' : 'none', transition: 'all var(--dur-fast) var(--ease)' }}>
            {t}
          </button>
        );
      })}
    </div>
  );
}