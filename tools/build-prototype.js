/* Build a single self-contained Gym Tracker prototype page.
   Reads the .dc.html screens + runtime from the archive, inlines every asset,
   and redirects the dc-runtime's hardcoded unpkg CDN URLs to cdnjs.

   Usage: node tools/build-prototype.js docs/index.html   (run from repo root) */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DS = path.join(ROOT, '_ds/gym-tracker-design-system-42e631ff-e31a-4d3e-8495-62b3190c9d4a');
const OUT = process.argv[2];

const read = (p) => fs.readFileSync(p, 'utf8');
const rd = (p) => fs.readFileSync(p);

const SCREENS = [
  ['Dashboard', 'Dashboard.dc.html'],
  ['Personal info', 'Perfonal Info.dc.html'],
  ['Weight loss', 'Weight Loss.dc.html'],
  ['Steps & cardio', 'Steps.dc.html'],
  ['Strength progress', 'Workouts dashboard.dc.html'],
  ['Workout logs', 'Workouts > Logs.dc.html'],
  ['Exercise library', 'Workouts > Exercise.dc.html'],
  ['Macros tracker', 'Macros Tracker.dc.html'],
  ['Daily meals', 'Macros Tracker > Daily Meals.dc.html'],
  ['Recipes', 'Macros Tracker > Recipes.dc.html'],
  ['Ingredients', 'Macros Tracker > Ingredients.dc.html'],
];

/* ---- 1. design-system CSS, @imports resolved ---- */
function inlineCss(file) {
  const dir = path.dirname(file);
  return read(file).replace(/@import\s+(?:url\()?["']([^"']+)["']\)?\s*;/g, (_, ref) =>
    inlineCss(path.join(dir, ref))
  );
}
const dsCss = inlineCss(path.join(DS, 'styles.css'));

/* ---- 2. slot images -> data URIs ---- */
const slotDir = path.join(ROOT, 'assets/slot-images');
const slotImages = {};
for (const f of fs.readdirSync(slotDir)) {
  if (!f.endsWith('.webp')) continue;
  slotImages[f.replace(/\.webp$/, '')] = 'data:image/webp;base64,' + rd(path.join(slotDir, f)).toString('base64');
}

/* ---- 3. logo svgs -> data URIs ---- */
const assetUri = {};
for (const f of fs.readdirSync(path.join(ROOT, 'assets'))) {
  if (!f.endsWith('.svg')) continue;
  assetUri['assets/' + f] =
    'data:image/svg+xml;base64,' + rd(path.join(ROOT, 'assets', f)).toString('base64');
}

/* ---- 4. runtime sources ---- */
const runtime = {
  dsBundle: read(path.join(DS, '_ds_bundle.js')),
  imageSlot: read(path.join(ROOT, 'image-slot.js')),
  animEngine: read(path.join(ROOT, 'anim-engine.js')),
  slotImagesJs: read(path.join(ROOT, 'slot-images.js')),
  support: read(path.join(ROOT, 'support.js')),
};

/* ---- 5. per-screen document ---- */
function buildScreen(file) {
  const src = read(path.join(ROOT, file));

  const dc = src.match(/<x-dc>([\s\S]*?)<\/x-dc>/);
  if (!dc) throw new Error('no <x-dc> in ' + file);
  const logic = src.match(/<script type="text\/x-dc"[\s\S]*?<\/script>/);
  if (!logic) throw new Error('no dc script in ' + file);

  let body = dc[1];

  // Drop external <script src> and the _ds stylesheet link: supplied by the host page.
  body = body.replace(/<script\b[^>]*\bsrc=("|')[^"']*\1[^>]*>\s*<\/script>/gi, '');
  body = body.replace(/<link\b[^>]*href=("|')[^"']*_ds\/[^"']*\1[^>]*>/gi, '');

  // Inline the design-system CSS inside the helmet so it lands in <head>.
  body = body.replace(/<helmet>/i, '<helmet>\n<style>' + dsCss + '</style>\n');

  // Relative asset paths cannot resolve inside srcdoc -> data URIs.
  for (const [rel, uri] of Object.entries(assetUri)) {
    body = body.split('"' + rel + '"').join('"' + uri + '"');
  }

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script>parent.__gtBoot(window);</script>
</head>
<body>
<x-dc>${body}</x-dc>
${logic[0]}
</body>
</html>`;
}

const screenDocs = SCREENS.map(([, f]) => buildScreen(f));

/* ---- 6. emit ---- */
/* A literal </script> inside a JS string would close the host <script> element.
   Non-ASCII is escaped to \uXXXX so the output is pure ASCII: an srcdoc iframe
   inherits the PARENT document's encoding and ignores its own <meta charset>,
   so any raw UTF-8 here renders as mojibake ("Â·" for "·"). */
const enc = (s) =>
  JSON.stringify(s)
    .replace(/[^\x00-\x7F]/g, (c) => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0'))
    .replace(/<\/script/gi, '<\\/script');

const page = `<title>Gym Tracker Prototype</title>
<style>
  :root{--chrome:#17161c;--edge:#26242a;--chip:#1f1d24;--chip-edge:#2e2c35;--ink:#f4f1ea;--dim:#8a867e;--accent:#2a69c8}
  html,body{margin:0;height:100%}
  body{background:#141314;color:var(--ink);font-family:'Manrope',system-ui,sans-serif;-webkit-font-smoothing:antialiased;display:flex;flex-direction:column}
  header,#tabs{background:var(--chrome);border-bottom:1px solid var(--edge)}
  header{flex:none;display:flex;align-items:center;gap:16px;height:58px;padding:0 22px}
  #tabs{flex:none;display:flex;align-items:center;gap:8px;padding:12px 22px;overflow-x:auto}
  .tab{display:flex;align-items:center;gap:9px;flex:none;background:var(--chip);border:1px solid var(--chip-edge);color:#a8a49b;border-radius:999px;padding:7px 14px 7px 10px;font-size:12.5px;font-weight:500;cursor:pointer;transition:background .16s,border-color .16s,color .16s;white-space:nowrap}
  .tab:hover{border-color:#4a4655;color:#fff}
  .tab[aria-selected="true"]{background:var(--accent);border-color:var(--accent);color:#fff;font-weight:600}
  .tab i{font-family:'JetBrains Mono',monospace;font-size:10px;font-style:normal;color:#6f6b64}
  .tab[aria-selected="true"] i{color:rgba(255,255,255,.6)}
  #stage{flex:1;min-height:0;display:flex;flex-direction:column;align-items:center;padding:22px 22px 30px;overflow:auto}
  #frame{flex:none;position:relative;border-radius:16px;overflow:hidden;background:#efece6;box-shadow:0 40px 90px -50px rgba(0,0,0,.9),0 0 0 1px #2a2831}
  #frame iframe{position:absolute;top:0;left:0;width:1920px;height:1080px;border:0;transform-origin:0 0}
  #meta{flex:none;display:flex;align-items:center;gap:10px;margin-top:14px;font-size:11.5px;color:#6f6b64;flex-wrap:wrap;justify-content:center}
  .sep{width:1px;height:11px;background:var(--chip-edge)}
  .nav{width:32px;height:32px;border-radius:9px;background:var(--chip);border:1px solid var(--chip-edge);color:#d8d4cc;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:14px}
  .nav:hover{background:#2a2831}
  code{font-family:'JetBrains Mono',monospace}
</style>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">

<header>
  <span style="font-family:'Outfit',sans-serif;font-size:15px;font-weight:600;letter-spacing:-.02em">Gym Tracker &middot; web prototype</span>
  <span style="font-size:11.5px;color:var(--dim)" class="hint">Sidebar links inside each screen are live &mdash; click through them</span>
  <div style="flex:1"></div>
  <span id="counter" style="font-family:'JetBrains Mono',monospace;font-size:11.5px;color:var(--dim)"></span>
  <div style="display:flex;gap:6px">
    <span class="nav" id="prev" title="Previous screen">&#8592;</span>
    <span class="nav" id="next" title="Next screen">&#8594;</span>
  </div>
</header>
<div id="tabs"></div>
<div id="stage">
  <div id="frame"><iframe id="screen" title="Screen"></iframe></div>
  <div id="meta"><code id="file"></code><span class="sep"></span><span id="scale"></span><span class="sep"></span><span>&#8592; &#8594; to step through screens</span></div>
</div>

<!-- React/ReactDOM from cdnjs. The dc-runtime hardcodes unpkg, which CSP blocks;
     window.__resources below redirects it here instead. -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lucide/0.454.0/umd/lucide.min.js"></script>

<script>
window.GTSlotImages = JSON.parse(${enc(JSON.stringify(slotImages))});
</script>

<script>
const NAMES = ${JSON.stringify(SCREENS.map((s) => s[0]))};
const FILES = ${JSON.stringify(SCREENS.map((s) => s[1]))};
const RUNTIME = {
  dsBundle: ${enc(runtime.dsBundle)},
  imageSlot: ${enc(runtime.imageSlot)},
  animEngine: ${enc(runtime.animEngine)},
  slotImagesJs: ${enc(runtime.slotImagesJs)},
  support: ${enc(runtime.support)}
};
const CDNJS = {
  "https://unpkg.com/react@18.3.1/umd/react.production.min.js":
    "https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.production.min.js",
  "https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js":
    "https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.production.min.js",
  "https://unpkg.com/@babel/standalone@7.29.0/babel.min.js":
    "https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.29.0/babel.min.js",
  "https://unpkg.com/lucide@0.454.0/dist/umd/lucide.min.js":
    "https://cdnjs.cloudflare.com/ajax/libs/lucide/0.454.0/umd/lucide.min.js"
};

/* Called synchronously from each screen iframe while it parses. Shares the heavy
   runtime from this window instead of duplicating ~280KB into all 11 documents. */
window.__gtBoot = function (w) {
  w.React = window.React;
  w.ReactDOM = window.ReactDOM;
  w.lucide = window.lucide;
  w.GTSlotImages = window.GTSlotImages;
  w.__resources = CDNJS;
  /* Construct the Blob with the IFRAME's constructor: support.js tests
     \`b instanceof Blob\` in its own realm, and a parent-realm Blob fails that
     check, silently falling back to a network fetch that retries forever. */
  w.__resourceBlobs = {
    "./image-slot.js": new w.Blob([RUNTIME.imageSlot], { type: "application/javascript" })
  };
  w.eval(RUNTIME.dsBundle);
  w.eval(RUNTIME.imageSlot);
  w.eval(RUNTIME.animEngine);
  w.eval(RUNTIME.slotImagesJs);
  w.eval(RUNTIME.support);
};

const SCREEN_DOCS = [
${screenDocs.map(enc).join(',\n')}
];

const VW = 1920, VH = 1080;
let idx = 0, scale = 1;

const tabsEl = document.getElementById('tabs');
const frameEl = document.getElementById('frame');
const iframeEl = document.getElementById('screen');

NAMES.forEach((n, i) => {
  const b = document.createElement('button');
  b.className = 'tab';
  b.type = 'button';
  b.setAttribute('role', 'tab');
  b.innerHTML = '<i>' + String(i + 1).padStart(2, '0') + '</i>' + n;
  b.addEventListener('click', () => go(i));
  tabsEl.appendChild(b);
});

function fit() {
  const w = document.getElementById('stage').clientWidth - 44;
  scale = Math.max(0.3, Math.min(1, w / VW));
  frameEl.style.width = Math.round(VW * scale) + 'px';
  frameEl.style.height = Math.round(VH * scale) + 'px';
  iframeEl.style.transform = 'scale(' + scale + ')';
  document.getElementById('scale').textContent = '1920 \\u00d7 1080 \\u00b7 shown at ' + Math.round(scale * 100) + '%';
}

function go(i) {
  idx = i;
  [...tabsEl.children].forEach((el, j) => el.setAttribute('aria-selected', String(j === i)));
  document.getElementById('counter').textContent =
    String(i + 1).padStart(2, '0') + ' / ' + String(NAMES.length).padStart(2, '0');
  document.getElementById('file').textContent = FILES[i];
  iframeEl.srcdoc = SCREEN_DOCS[i];
  try { localStorage.setItem('gt-proto-idx', String(i)); } catch (e) {}
}

function step(d) { go((idx + d + NAMES.length) % NAMES.length); }

document.getElementById('prev').addEventListener('click', () => step(-1));
document.getElementById('next').addEventListener('click', () => step(1));
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') step(1);
  if (e.key === 'ArrowLeft') step(-1);
});
window.addEventListener('resize', fit);

/* Sidebar links inside a screen post up rather than navigating the iframe. */
window.addEventListener('message', (e) => {
  const d = e && e.data;
  if (!d || d.type !== 'gt-nav' || !d.file) return;
  const j = FILES.indexOf(d.file);
  if (j > -1 && j !== idx) go(j);
});

let start = 0;
try {
  const s = parseInt(localStorage.getItem('gt-proto-idx') || '', 10);
  if (isFinite(s) && s >= 0 && s < NAMES.length) start = s;
} catch (e) {}

fit();
go(start);
setTimeout(fit, 300);
</script>`;

fs.writeFileSync(OUT, page);
const mb = (Buffer.byteLength(page) / 1048576).toFixed(2);
console.log('wrote', OUT, mb + ' MB');
console.log('screens:', screenDocs.length, '| slot images:', Object.keys(slotImages).length, '| svg assets:', Object.keys(assetUri).length);
