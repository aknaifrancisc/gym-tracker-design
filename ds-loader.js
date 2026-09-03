// ds-loader.js — resolves the component namespace.
// Prefers the compiled _ds_bundle.js; falls back to transpiling component sources in-page.
window.addEventListener('unhandledrejection', (e) => console.error('[ds-loader] rejection:', e.reason && (e.reason.message + '\n' + e.reason.stack)));
const __runApps = (ns) => {
  window.DS = ns;
  const go = () => {
    document.querySelectorAll('script[type="text/babel-app"]').forEach((s) => {
      try { (0, eval)(Babel.transform(s.textContent, { presets: [['react', { runtime: 'classic' }]] }).code); }
      catch (e) { console.error('[ds-loader] app failed:', e.message, e.stack); }
    });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
  return ns;
};
window.__dsReady = (async () => {
  const base = new URL('.', document.currentScript.src);
  const probe = (names) => {
    for (const k of Object.getOwnPropertyNames(window)) {
      try { const v = window[k]; if (v && typeof v === 'object' && names.every((n) => typeof v[n] === 'function')) return v; } catch (e) {}
    }
    return null;
  };
  try {
    const r = await fetch(new URL('_ds_bundle.js', base));
    if (r.ok) {
      const t = await r.text();
      if (!/^\s*</.test(t)) { (0, eval)(t); const ns = probe(['Button', 'Card', 'StatCard']); if (ns) return ns; }
    }
  } catch (e) {}
  // Fallback: fetch sources, strip module syntax, transpile once with Babel.
  const files = ['forms/Button','forms/IconButton','forms/Input','forms/Select','forms/Checkbox','forms/Radio','forms/Switch','display/Card','display/Badge','display/Tabs','display/Table','display/Avatar','display/Progress','navigation/SideNav','fitness/StatCard','fitness/ProgressRing','fitness/MacroBar','fitness/WorkoutRow','fitness/StreakDots','fitness/GoalCard','fitness/TrendChart'];
  console.log('[ds-loader] no bundle, building fallback from', base.href);
  const srcs = await Promise.all(files.map((f) => fetch(new URL('components/' + f + '.jsx', base)).then((r) => r.text())));
  const names = files.map((f) => f.split('/')[1]);
  const combined = srcs.join('\n;\n').replace(/^\s*import[^\n]*$/gm, '').replace(/export function /g, 'function ');
  const code = '(function(){' + combined + ';window.__DSFallback={' + names.join(',') + '}})()';
  try {
    (0, eval)(Babel.transform(code, { presets: [['react', { runtime: 'classic' }]] }).code);
  } catch (e) { console.error('[ds-loader] fallback failed:', e.message, e.stack); throw e; }
  console.log('[ds-loader] fallback ready:', Object.keys(window.__DSFallback || {}).join(','));
  return window.__DSFallback;
})().then(__runApps);
