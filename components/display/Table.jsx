import React from 'react';
export function Table({ columns = [], rows = [], compact, style }) {
  const pad = compact ? '8px 12px' : '12px 16px';
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-sans)', fontSize: compact ? 13 : 14, ...style }}>
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={c.key} style={{ textAlign: c.align || 'left', padding: pad, fontSize: 12, fontWeight: 500, color: 'var(--text-3)', borderBottom: '1px solid var(--border)', letterSpacing: '0.02em' }}>{c.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} style={{ borderBottom: i < rows.length - 1 ? '1px solid var(--border)' : 'none' }}>
            {columns.map((c) => (
              <td key={c.key} style={{ padding: pad, textAlign: c.align || 'left', color: 'var(--text-1)', fontFamily: c.numeric ? 'var(--font-mono)' : 'inherit', fontFeatureSettings: c.numeric ? 'var(--tnum)' : 'normal' }}>{r[c.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}