(function () {
  'use strict';

  var nav = document.getElementById('main-nav');
  var toggle = document.getElementById('nav-toggle');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Mobile: open dropdown when clicking parent
  document.querySelectorAll('.nav-item').forEach(function (item) {
    var link = item.querySelector('a');
    var drop = item.querySelector('.dropdown');
    if (!link || !drop) return;
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        item.classList.toggle('open');
      }
    });
  });

  // Download form: confirm before downloading, then trigger download (works with Cloudflare Pages)
  document.querySelectorAll('a.js-download-form').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      if (!confirm('Sind Sie einverstanden, das Anmeldeformular herunterzuladen?')) return;
      var href = link.getAttribute('href');
      var a = document.createElement('a');
      a.href = href;
      a.download = 'Anmelderformular-neu.docx';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  });

  // Contact form: show message (no backend)
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.getElementById('form-message');
      if (msg) {
        msg.textContent = 'Vielen Dank! Wir werden uns so schnell wie möglich bei Ihnen melden.';
        msg.style.color = 'var(--primary)';
      }
    });
  }
})();
