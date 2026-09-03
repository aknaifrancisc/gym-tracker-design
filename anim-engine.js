/* Gym Tracker — two-phase load animation engine.
   Phase 1: widget shells rise into place (staggered).
   Phase 2: after `loadMs`, data lands in-place — numbers roll, bars fill, arcs draw.
   Usage from a DC logic class:
     componentDidMount(){ GTAnim.boot(this); }
     boot(){ return GTAnim.boot(this); }
     prog(d,dur){ return GTAnim.prog(this,d,dur); }
     roll(v,p){ return GTAnim.roll(v,p); }
     anim(ms){ return GTAnim.anim(ms); }
   State must include { now: 0, loaded: true }. */
(function () {
  const EASE = 'cubic-bezier(.23,1,.32,1)';

  const reduced = () =>
    typeof window !== 'undefined' && window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* One clock for the whole page, held in module scope rather than on a
     component instance: the logic instance the runtime renders is not always
     the one that booted (bundled/standalone builds remount), which used to
     leave every rolled number frozen at 0. Participants are re-rendered from
     the tick; prog() reads the module clock, so a fresh instance picks up
     mid-flight instead of restarting at zero. */
  let t0 = 0, iv = null, endMax = 0, arming = false;
  const parts = new Set();

  const elapsed = () => (t0 ? Date.now() - t0 : 0);

  /* The clock must not start at first render: a heavy page (design-system
     bundle, fonts, icons, inlined images) can spend most of a second parsing
     after that point, so the sequence would elapse unseen and the data would
     appear to jump straight to its final value. Start on the first frame
     after fonts settle, and hold off entirely while the tab is hidden. */
  function arm() {
    if (t0 || arming) return;
    arming = true;
    const begin = () => {
      if (document.hidden) {
        document.addEventListener('visibilitychange', function once() {
          document.removeEventListener('visibilitychange', once);
          arming = false; arm();
        });
        return;
      }
      t0 = Date.now();
      arming = false;
      parts.forEach(bump);
      if (!iv) iv = setInterval(tick, 40);
    };
    const twoFrames = () => requestAnimationFrame(() => requestAnimationFrame(begin));
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(twoFrames, twoFrames);
    else twoFrames();
    setTimeout(() => { if (!t0) { arming = false; begin(); } }, 1200);
  }

  function bump(cmp) {
    if (!cmp) return;
    try { cmp.setState({ now: elapsed() }); }
    catch (e) { try { cmp.forceUpdate(); } catch (e2) {} }
  }

  function tick() {
    const e = elapsed();
    parts.forEach(bump);
    if (e >= endMax + 200) { clearInterval(iv); iv = null; }
  }

  function ensure(cmp, end) {
    if (cmp) parts.add(cmp);
    endMax = Math.max(endMax, end || 3200);
    if (reduced()) { t0 = Date.now() - (endMax + 1000); parts.forEach(bump); return; }
    if (!t0) { arm(); return; }
    if (!iv) iv = setInterval(tick, 40);
  }

  const GTAnim = {
    ease: EASE,
    reduced,

    /* shell entrance for a widget that lands at `ms` */
    anim(ms) { return 'riseIn .42s ' + EASE + ' ' + (ms || 0) + 'ms both'; },

    /* join the clock (called from componentDidMount) */
    boot(cmp) {
      ensure(cmp, 900 + ((cmp && cmp.props && cmp.props.loadMs) ?? 900) + 1400);
      bump(cmp);
    },

    stop(cmp) { if (cmp) parts.delete(cmp); },

    /* full reload: shells leave, then the whole sequence replays */
    reload(cmp) {
      if (!cmp) return;
      if (iv) { clearInterval(iv); iv = null; }
      t0 = 0; arming = false;
      cmp.setState({ loaded: false, now: 0 });
      setTimeout(() => { cmp.setState({ loaded: true }); GTAnim.boot(cmp); }, 50);
    },

    /* eased 0..1 progress for data landing at `delay` ms */
    prog(cmp, delay, dur) {
      if (reduced()) return 1;
      if (!t0 || (cmp && !parts.has(cmp))) ensure(cmp, 3200);
      const p = Math.min(1, Math.max(0, (elapsed() - delay) / (dur || 700)));
      return 1 - Math.pow(1 - p, 3);
    },

    /* rolls the first number inside a string up to progress p, keeping prefix/suffix */
    roll(v, p) {
      const m = String(v).match(/^([^\d]*)(\d(?:[\d\s]*\d)?(?:\.\d+)?)([\s\S]*)$/);
      if (!m) return v;
      const raw = m[2].replace(/\s/g, '');
      const target = parseFloat(raw);
      if (!isFinite(target)) return v;
      const dec = raw.indexOf('.') > -1 ? (raw.split('.')[1] || '').length : 0;
      let out = dec ? (target * p).toFixed(dec) : String(Math.round(target * p));
      if (!dec && raw.length > 3) out = out.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      return m[1] + out + m[3];
    }
  };

  window.GTAnim = GTAnim;

  /* ---- prototype routing: screen name -> page file ---- */
  const ROUTES = {
    'Dashboard': 'Dashboard.dc.html',
    'Personal info': 'Perfonal Info.dc.html',
    'Weight loss': 'Weight Loss.dc.html',
    'Steps': 'Steps.dc.html',
    'Workouts': 'Workouts dashboard.dc.html',
    'Logs': 'Workouts > Logs.dc.html',
    'Exercises': 'Workouts > Exercise.dc.html',
    'Macros tracker': 'Macros Tracker.dc.html',
    'Daily meals': 'Macros Tracker > Daily Meals.dc.html',
    'Recipes': 'Macros Tracker > Recipes.dc.html',
    'Ingredients': 'Macros Tracker > Ingredients.dc.html'
  };
  window.GTNav = {
    routes: ROUTES,
    href: n => (ROUTES[n] ? encodeURI(ROUTES[n]) : null),
    go(n) {
      const h = ROUTES[n];
      if (!h) return;
      try {
        if (window.parent && window.parent !== window) {
          window.parent.postMessage({ type: 'gt-nav', name: n, file: h }, '*');
          return;
        }
      } catch (e) {}
      window.location.href = encodeURI(h);
    }
  };
})();
