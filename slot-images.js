/* Gym Tracker — slot-image fallback.
   In the project the dropped photos come from the .image-slots.state.json
   sidecar. A published / standalone bundle has no sidecar (opaque origin),
   so the images are supplied one of two ways:
     1. window.GTSlotImages — a map of slot id -> data URL injected into the
        bundle itself (read lazily, so the injected script may appear either
        before or after this file);
     2. a 'gt-slot-images' postMessage from the prototype shell.
   Stored sidecar values always win inside image-slot itself; this only ever
   fills a slot that has no src of its own. */
(function () {
  var SENT = null;
  var queued = false;

  function map() {
    return SENT || (typeof window !== 'undefined' && window.GTSlotImages) || null;
  }

  function apply() {
    queued = false;
    var m = map();
    if (!m) return;
    var els = document.querySelectorAll('image-slot[id]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i], u = m[el.id];
      if (u && !el.getAttribute('src')) el.setAttribute('src', u);
    }
  }

  function schedule() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(apply);
  }

  window.GTSlotImagesApply = schedule;

  window.addEventListener('message', function (e) {
    var d = e && e.data;
    if (!d || d.type !== 'gt-slot-images' || !d.map) return;
    SENT = d.map;
    schedule();
  });

  try {
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({ type: 'gt-slot-images-request' }, '*');
    }
  } catch (e) {}

  function start() {
    new MutationObserver(schedule).observe(document.documentElement, { childList: true, subtree: true });
    schedule();
  }
  if (document.documentElement) start();
  else document.addEventListener('DOMContentLoaded', start);
})();
