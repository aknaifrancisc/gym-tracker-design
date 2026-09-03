import React from 'react';
import { Card } from '../display/Card.jsx';
import { Badge } from '../display/Badge.jsx';
/** glow: 'tl' | 'tr' | 'bl' | 'br' (+ '-accent' for the amber tint).
 *  The old `gradient` prop is retired — surfaces are flat now. */
export function StatCard({ label, value, unit, delta, deltaTone = 'success', icon, hero, footer, glow, style }) {
  return (
    <Card compact glow={glow} style={{ padding: 16, ...style }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
        {icon}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, color: 'var(--text-2)', marginBottom: 4 }}>{label}</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontFeatureSettings: 'var(--tnum)', fontWeight: 600, fontSize: hero ? 'var(--text-stat-lg)' : 'var(--text-stat-md)', letterSpacing: 'var(--track-tight)', fontVariantNumeric: 'tabular-nums', color: 'var(--text-1)', lineHeight: 1.1 }}>{value}</span>
            {unit && <span style={{ fontSize: 13, color: 'var(--text-3)' }}>{unit}</span>}
            {delta && <Badge tone={deltaTone} style={{ marginLeft: 'auto' }}>{delta}</Badge>}
          </div>
          {footer && <div style={{ marginTop: 10 }}>{footer}</div>}
        </div>
      </div>
    </Card>
  );
}