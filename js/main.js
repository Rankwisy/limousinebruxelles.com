/**
 * Belgium Limousine Services — limousinebruxelles.com
 * Navigation, révélations au scroll, CTA mobile, validation du formulaire.
 */
(function () {
  'use strict';

  var nav = document.getElementById('nav');
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');
  var scrim = document.getElementById('navScrim');
  var dock = document.getElementById('dock');
  var isDesktop = function () { return window.matchMedia('(min-width: 1024px)').matches; };

  /* ---- Barre de navigation collante ---- */
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle('scrolled', window.scrollY > 30);
      if (dock) dock.classList.toggle('show', window.scrollY > 520);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- Menu mobile ---- */
  function closeMenu() {
    if (!menu) return;
    menu.classList.remove('open');
    if (scrim) scrim.classList.remove('show');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = !menu.classList.contains('open');
      menu.classList.toggle('open', open);
      if (scrim) scrim.classList.toggle('show', open);
      toggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }
  if (scrim) scrim.addEventListener('click', closeMenu);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
  if (menu) {
    menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });
  }

  /* ---- Sous-menus : accordéon en mobile, survol en desktop ---- */
  document.querySelectorAll('.drop').forEach(function (drop) {
    var btn = drop.querySelector('.drop-btn');
    if (!btn) return;
    btn.addEventListener('click', function () {
      if (isDesktop()) return;
      var open = !drop.classList.contains('open');
      drop.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
    });
  });

  /* ---- Révélation au scroll ---- */
  var reveals = document.querySelectorAll('.rv');
  if (reveals.length) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      reveals.forEach(function (el) { io.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add('in'); });
    }
  }

  /* ---- Formulaire de devis ---- */
  var form = document.getElementById('devisForm');
  if (form) {
    // Pas de date passée
    var dateField = form.querySelector('input[type="date"]');
    if (dateField && !dateField.min) dateField.min = new Date().toISOString().slice(0, 10);

    form.addEventListener('submit', function (e) {
      if (!form.checkValidity()) {
        e.preventDefault();
        var bad = form.querySelector(':invalid');
        if (bad) { bad.focus(); bad.scrollIntoView({ block: 'center', behavior: 'smooth' }); }
        return;
      }
      var btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-circle-notch fa-spin" aria-hidden="true"></i> Envoi en cours…';
      }
    });
  }

  /* ---- Année en cours dans le pied de page ---- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
