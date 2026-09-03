import React from 'react';
import { Card } from '../display/Card.jsx';
import { Badge } from '../display/Badge.jsx';
import { Progress } from '../display/Progress.jsx';
export function GoalCard({ title, current, target, unit, progress, dateLabel = 'No date set', badge, style }) {
  return (
    <Card compact style={{ padding: 16, ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '4px 8px', marginBottom: 12 }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-1)', flex: '1 1 auto', minWidth: '5ch' }}>{title}</span>
        {badge}
        <span style={{ fontSize: 12, color: 'var(--text-3)', whiteSpace: 'nowrap', flexBasis: '100%' }}>{dateLabel}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '2px 8px' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontFeatureSettings: 'var(--tnum)', fontSize: 24, fontWeight: 600, color: 'var(--text-1)' }}>{current}</span>
        <span style={{ fontSize: 13, color: 'var(--text-3)', minWidth: 0, overflowWrap: 'anywhere' }}>/ {target} {unit}</span>
      </div>
      {progress != null && <Progress value={progress} max={100} tone={progress >= 100 ? 'success' : 'primary'} style={{ marginTop: 10 }} />}
    </Card>
  );
}