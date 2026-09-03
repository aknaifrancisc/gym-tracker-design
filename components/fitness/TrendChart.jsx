import React from 'react';
export function TrendChart({ data = [], height = 120, color = 'var(--chart-1)', fill = true, showDots = false, xLabels, yFormat, grow = false, style }) {
  const ref = React.useRef(null);
  const [w, setW] = React.useState(0);
  const [h, setH] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => { setW(el.clientWidth); setH(el.clientHeight); };
    measure();
    window.addEventListener('resize', measure);
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(measure) : null;
    if (ro) ro.observe(el);
    return () => { window.removeEventListener('resize', measure); if (ro) ro.disconnect(); };
  }, []);
  const chartH = grow ? Math.max(height, h - (xLabels ? 23 : 0)) : height;
  const padL = 38, padR = 10, padT = 12, padB = 6;
  const min0 = Math.min(...data), max0 = Math.max(...data);
  const span = (max0 - min0) || 1;
  const min = min0 - span * 0.12, max = max0 + span * 0.12;
  const fmt = yFormat || ((v) => (max0 >= 1000 ? Math.round(v).toLocaleString('en-US') : (Math.round(v * 10) / 10)));
  const X = (i) => padL + (i / (data.length - 1 || 1)) * (w - padL - padR);
  const Y = (v) => padT + (1 - (v - min) / (max - min)) * (chartH - padT - padB);
  const pts = data.map((v, i) => [X(i), Y(v)]);
  // Catmull-Rom -> cubic bezier smoothing
  const path = pts.map((p, i) => {
    if (i === 0) return 'M' + p[0] + ',' + p[1];
    const p0 = pts[i - 1], pm = pts[i - 2] || p0, p1 = p, p2 = pts[i + 1] || p1;
    const c1 = [p0[0] + (p1[0] - pm[0]) / 6, p0[1] + (p1[1] - pm[1]) / 6];
    const c2 = [p1[0] - (p2[0] - p0[0]) / 6, p1[1] - (p2[1] - p0[1]) / 6];
    return 'C' + c1[0] + ',' + c1[1] + ' ' + c2[0] + ',' + c2[1] + ' ' + p1[0] + ',' + p1[1];
  }).join(' ');
  const gid = React.useMemo(() => 'tg' + Math.random().toString(36).slice(2, 8), []);
  const ticks = [max0, (max0 + min0) / 2, min0];
  const last = pts[pts.length - 1];
  return (
    <div ref={ref} style={{ fontFamily: 'var(--font-sans)', width: '100%', ...(grow ? { flex: 1, minHeight: height } : null), ...style }}>
      {w > 0 && (
        <svg width={w} height={chartH} style={{ display: 'block', overflow: 'visible' }}>
          <defs>
            <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.22" />
              <stop offset="100%" stopColor={color} stopOpacity="0.02" />
            </linearGradient>
          </defs>
          {ticks.map((t, i) => (
            <g key={i}>
              <line x1={padL} x2={w - padR} y1={Y(t)} y2={Y(t)} stroke="var(--border)" strokeDasharray={i === ticks.length - 1 ? 'none' : '3 4'} />
              <text x={padL - 8} y={Y(t) + 3} textAnchor="end" style={{ font: '500 10px var(--font-mono)', fill: 'var(--text-3)' }}>{fmt(t)}</text>
            </g>
          ))}
          {fill && <path d={path + ' L' + (w - padR) + ',' + Y(min0) + ' L' + padL + ',' + Y(min0) + ' Z'} fill={'url(#' + gid + ')'} />}
          <path d={path} fill="none" stroke={color} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
          {showDots && pts.map((p, i) => (i % Math.ceil(data.length / 12 || 1) === 0 || i === data.length - 1) && (
            <circle key={i} cx={p[0]} cy={p[1]} r="3.5" fill="var(--surface)" stroke={color} strokeWidth="2" />
          ))}
          {last && <g>
            <circle cx={last[0]} cy={last[1]} r="4.5" fill={color} stroke="var(--surface)" strokeWidth="2" />
            <rect x={last[0] - 26} y={last[1] - 26} width="52" height="18" rx="9" fill={color} />
            <text x={last[0]} y={last[1] - 13} textAnchor="middle" style={{ font: '600 10px var(--font-mono)', fill: '#fff' }}>{fmt(data[data.length - 1])}</text>
          </g>}
        </svg>
      )}
      {xLabels && <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--text-3)', marginTop: 6, paddingLeft: padL }}>{xLabels.map((l, i) => <span key={i}>{l}</span>)}</div>}
    </div>
  );
}