// Dashy Connector — shared behaviour (copy buttons only; no tracking, no cookies)
(function () {
  function flash(btn, original) {
    btn.classList.add('done');
    var prev = btn.textContent;
    btn.textContent = 'Copied';
    setTimeout(function () {
      btn.classList.remove('done');
      btn.textContent = original || prev;
    }, 1600);
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-copy]');
    if (!btn) return;
    var sel = btn.getAttribute('data-copy');
    var src = sel ? document.querySelector(sel) : null;
    var text = src ? src.textContent.trim() : (btn.getAttribute('data-copy-text') || '');
    if (!text) return;
    var original = btn.getAttribute('data-label') || btn.textContent;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { flash(btn, original); });
    } else {
      var ta = document.createElement('textarea');
      ta.value = text; document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); flash(btn, original); } catch (err) {}
      document.body.removeChild(ta);
    }
  });
})();
