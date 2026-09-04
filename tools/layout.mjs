/**
 * Gabarit partagé, indépendant de la langue.
 * Chaque fonction reçoit `L`, le bundle de la langue rendue.
 * Génération : `node tools/build.mjs`
 */
import { SITE, PHOTOS } from './site.mjs';
import { LOCALES, link, crossLink, keyOf, absUrl } from './locales.mjs';

export { SITE };

const U = 'https://images.unsplash.com/';

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Balise <img> responsive : fichier local du site, ou CDN Unsplash. */
export function photo(L, key, alt, { w = 1200, cls = '', eager = false, sizes = '100vw' } = {}) {
  const id = PHOTOS[key];
  if (!id) throw new Error(`Photo inconnue : ${key}`);
  const loading = ` loading="${eager ? 'eager' : 'lazy'}" decoding="async"${eager ? ' fetchpriority="high"' : ''}`;

  if (id.local) {
    const p = `${L.up}${id.local}`;
    return `<img src="${p}-1600.jpg" srcset="${p}-800.jpg 800w, ${p}-1600.jpg 1600w" sizes="${sizes}"
        alt="${esc(alt)}" width="${id.w}" height="${id.h}"${cls ? ` class="${cls}"` : ''}${loading}>`;
  }
  const src = (px) => `${U}${id}?auto=format&q=72&w=${px}&fit=crop`;
  const widths = [640, 1000, 1600, 2000].filter((px) => px <= w * 1.7);
  return `<img src="${src(w)}" srcset="${widths.map((px) => `${src(px)} ${px}w`).join(', ')}" sizes="${sizes}"
        alt="${esc(alt)}" width="${w}" height="${Math.round(w * 0.66)}"${cls ? ` class="${cls}"` : ''}${loading}>`;
}

export function photoUrl(key, w = 1600) {
  const id = PHOTOS[key];
  if (id.local) return `${SITE.domain}/${id.local}-1600.jpg`;
  return `${U}${id}?auto=format&q=72&w=${w}&fit=crop`;
}

/* ---------- Drapeaux (SVG : les emoji drapeaux ne s'affichent pas sous Windows) ---------- */
const FLAGS = {
  be: `<svg class="flag" viewBox="0 0 21 15" width="21" height="15" aria-hidden="true" focusable="false"><rect width="21" height="15" rx="2" fill="#2D2A26"/><path fill="#FFD450" d="M7 0h7v15H7z"/><path fill="#C8102E" d="M14 0h7v15h-7z"/><rect width="21" height="15" rx="2" fill="none" stroke="rgba(255,255,255,.25)"/></svg>`,
  us: `<svg class="flag" viewBox="0 0 21 15" width="21" height="15" aria-hidden="true" focusable="false"><rect width="21" height="15" rx="2" fill="#fff"/><g fill="#B31942"><rect y="0" width="21" height="1.15"/><rect y="2.3" width="21" height="1.15"/><rect y="4.6" width="21" height="1.15"/><rect y="6.9" width="21" height="1.15"/><rect y="9.2" width="21" height="1.15"/><rect y="11.5" width="21" height="1.15"/><rect y="13.8" width="21" height="1.15"/></g><rect width="9" height="8.05" fill="#0A3161"/><g fill="#fff"><circle cx="1.9" cy="1.6" r=".5"/><circle cx="4.5" cy="1.6" r=".5"/><circle cx="7.1" cy="1.6" r=".5"/><circle cx="3.2" cy="3.2" r=".5"/><circle cx="5.8" cy="3.2" r=".5"/><circle cx="1.9" cy="4.8" r=".5"/><circle cx="4.5" cy="4.8" r=".5"/><circle cx="7.1" cy="4.8" r=".5"/><circle cx="3.2" cy="6.4" r=".5"/><circle cx="5.8" cy="6.4" r=".5"/></g><rect width="21" height="15" rx="2" fill="none" stroke="rgba(0,0,0,.18)"/></svg>`,
};

/** Sélecteur de langue : drapeau + code, une entrée par langue. */
function langSwitcher(L, slug) {
  const key = keyOf(L, slug) || 'home';
  const items = LOCALES.map((o) => {
    const current = o.code === L.code;
    const href = current ? link(L, key) : crossLink(L, o, key);
    return `<a href="${href}" hreflang="${o.lang}" lang="${o.lang}"${current ? ' aria-current="true"' : ''}
            title="${esc(o.label)}"><span class="flag-wrap">${FLAGS[o.flag]}</span><span>${o.shortLabel}</span></a>`;
  }).join('\n        ');
  return `<div class="lang" role="group" aria-label="${esc(L.ui.langLabel)}">\n        ${items}\n      </div>`;
}

/* ---------- Navigation ---------- */
function dropdown(L, id, label, items, allKey, allLabel, slug) {
  const active = items.some(([k]) => L.slugs[k] === slug) || L.slugs[allKey] === slug;
  const links = items
    .map(([k, icon, title, sub]) =>
      `<a href="${link(L, k)}"><i class="fas fa-${icon}" aria-hidden="true"></i><span><strong>${title}</strong><small>${sub}</small></span></a>`)
    .join('\n            ');
  return `<li class="drop">
          <button class="drop-btn${active ? ' current' : ''}" id="${id}" aria-expanded="false" aria-controls="${id}-panel">
            ${label} <i class="fas fa-chevron-down" aria-hidden="true"></i>
          </button>
          <div class="drop-panel" id="${id}-panel" role="group" aria-labelledby="${id}">
            ${links}
            <a href="${link(L, allKey)}"><i class="fas fa-arrow-right" aria-hidden="true"></i><span><strong>${allLabel}</strong><small>${L.ui.overview}</small></span></a>
          </div>
        </li>`;
}

function navbar(L, slug) {
  const on = (k) => (L.slugs[k] === slug ? ' class="current"' : '');
  return `<nav class="nav" id="nav" aria-label="${esc(L.ui.navAria)}">
    <div class="wrap">
      <a href="${link(L, 'home')}" class="brand" aria-label="${esc(SITE.name)}, ${esc(L.ui.homeAria)}">
        <span class="brand-mark">${SITE.brand}</span>
        <img src="${L.up}${SITE.logo}" alt="Limousine Bruxelles" width="2009" height="584">
      </a>
      <button class="nav-toggle" id="navToggle" aria-expanded="false" aria-controls="navMenu" aria-label="${esc(L.ui.openMenu)}">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-menu" id="navMenu">
        <li><a href="${link(L, 'home')}"${on('home')}>${L.ui.home}</a></li>
        ${dropdown(L, 'navServices', L.ui.services, L.servicesNav, 'services', L.ui.allServices, slug)}
        ${dropdown(L, 'navFlotte', L.ui.fleet, L.fleetNav, 'fleet', L.ui.allFleet, slug)}
        <li><a href="${link(L, 'drivers')}"${on('drivers')}>${L.ui.drivers}</a></li>
        <li><a href="${link(L, 'rates')}"${on('rates')}>${L.ui.rates}</a></li>
        <li><a href="${link(L, 'contact')}"${on('contact')}>${L.ui.contact}</a></li>
        <li class="nav-lang">${langSwitcher(L, slug)}</li>
        <li class="nav-cta"><a href="${link(L, 'contact')}" class="btn btn-gold">${L.ui.quote}</a></li>
      </ul>
    </div>
  </nav>
  <div class="nav-scrim" id="navScrim"></div>`;
}

/* ---------- Pied de page ---------- */
function footer(L) {
  const col = (title, links) =>
    `<div><h4>${title}</h4><ul>${links.map(([k, t]) => `<li><a href="${link(L, k)}">${t}</a></li>`).join('')}</ul></div>`;

  return `<footer class="foot">
    <div class="wrap">
      <div class="foot-grid">
        <div>
          <p class="brand-mark foot-brand">${SITE.brand}</p>
          <img src="${L.up}${SITE.logo}" alt="Limousine Bruxelles" class="foot-logo" width="2009" height="584" loading="lazy">
          <p>${L.footer.blurb}</p>
          <a href="mailto:${SITE.email}" class="foot-mail"><i class="fas fa-envelope" aria-hidden="true"></i> ${SITE.email}</a>
          <p class="foot-note">${L.footer.note}</p>
        </div>
        ${col(L.footer.colServices, L.servicesNav.map(([k, , t]) => [k, t]).concat([['services', L.ui.allServices]]))}
        ${col(L.footer.colFleet, L.fleetNav.map(([k, , t]) => [k, t]).concat([['fleet', L.ui.allFleet]]))}
        ${col(L.footer.colInfo, L.footer.infoLinks)}
      </div>
    </div>
    <div class="foot-bar">
      <div class="wrap">
        <span>© <span data-year>2026</span> ${SITE.name} · ${L.footer.rights}</span>
        <ul>${L.footer.barLinks.map(([k, t]) => `<li><a href="${link(L, k)}">${t}</a></li>`).join('')}</ul>
      </div>
    </div>
  </footer>

  <div class="dock" id="dock">
    <a href="mailto:${SITE.email}"><i class="fas fa-envelope" aria-hidden="true"></i> ${L.footer.dockWrite}</a>
    <a href="${link(L, 'contact')}"><i class="fas fa-file-signature" aria-hidden="true"></i> ${L.footer.dockQuote}</a>
  </div>`;
}

/* ---------- Blocs réutilisables ---------- */
export function ctaBand(L, title, text) {
  return `<section class="cta-band">
    ${photo(L, 'classeS', L.ctaBand.imgAlt, { w: 1600 })}
    <div class="wrap">
      <p class="eyebrow" style="justify-content:center">${SITE.name}</p>
      <h2>${title}</h2>
      <p>${text}</p>
      <div class="btn-row center">
        <a href="${link(L, 'contact')}" class="btn btn-gold btn-lg">${L.ui.quote} <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
        <a href="mailto:${SITE.email}" class="btn btn-ghost btn-lg"><i class="fas fa-envelope" aria-hidden="true"></i> ${SITE.email}</a>
      </div>
    </div>
  </section>`;
}

export function trustBar(L) {
  return `<div class="trust">
    <div class="wrap">
      <ul>${L.trust.map(([i, t]) => `\n        <li><i class="fas fa-${i}" aria-hidden="true"></i> ${t}</li>`).join('')}
      </ul>
    </div>
  </div>`;
}

/** Formulaire de devis (envoi e-mail vers info@limousinebruxelles.com). */
export function quoteForm(L, { id = 'devisForm', subject } = {}) {
  const f = L.form;
  return `<form class="form-card" id="${id}" action="https://formsubmit.co/${SITE.email}" method="POST" novalidate>
        <input type="hidden" name="_subject" value="${esc(subject || f.subject)}">
        <input type="hidden" name="_template" value="table">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="${SITE.domain}/${L.base}${L.slugs.thanks}">
        <div class="hp" aria-hidden="true"><label>${f.hp} <input type="text" name="_honey" tabindex="-1" autocomplete="off"></label></div>

        <div class="form-grid">
          <div class="form-grid f2">
            <div class="field">
              <label for="nom">${f.name} <span class="req">*</span></label>
              <input type="text" id="nom" name="Nom" placeholder="${esc(f.namePh)}" required autocomplete="name">
            </div>
            <div class="field">
              <label for="email">${f.email} <span class="req">*</span></label>
              <input type="email" id="email" name="Email" placeholder="${esc(f.emailPh)}" required autocomplete="email">
            </div>
          </div>

          <div class="form-grid f2">
            <div class="field">
              <label for="date">${f.date} <span class="req">*</span></label>
              <input type="date" id="date" name="Date souhaitee" required>
            </div>
            <div class="field">
              <label for="passagers">${f.pax} <span class="req">*</span></label>
              <input type="number" id="passagers" name="Nombre de passagers" min="1" max="120" step="1" placeholder="4" required>
            </div>
          </div>

          <div class="form-grid f2">
            <div class="field">
              <label for="depart">${f.from} <span class="req">*</span></label>
              <input type="text" id="depart" name="Lieu de depart" placeholder="${esc(f.fromPh)}" required>
            </div>
            <div class="field">
              <label for="destination">${f.to} <span class="req">*</span></label>
              <input type="text" id="destination" name="Destination" placeholder="${esc(f.toPh)}" required>
            </div>
          </div>

          <div class="field">
            <label for="vehicule">${f.vehicle} <span class="req">*</span></label>
            <select id="vehicule" name="Type de vehicule" required>
              <option value="">${esc(f.vehiclePh)}</option>
              ${f.vehicles.map((v) => `<option>${v}</option>`).join('\n              ')}
            </select>
          </div>

          <div class="field">
            <label for="message">${f.message}</label>
            <textarea id="message" name="Message" placeholder="${esc(f.messagePh)}"></textarea>
          </div>

          <label class="form-consent">
            <input type="checkbox" name="Consentement" value="Oui" required>
            <span>${f.consent} <a href="${link(L, 'privacy')}">${f.consentLink}</a>. <span class="req">*</span></span>
          </label>

          <button type="submit" class="btn btn-dark btn-block btn-lg">
            <i class="fas fa-paper-plane" aria-hidden="true"></i> ${f.submit}
          </button>
          <p class="form-foot">${f.foot(`<a href="mailto:${SITE.email}" style="color:inherit;text-decoration:underline">${SITE.email}</a>`)}</p>
        </div>
      </form>`;
}

export function faqSection(L, items, { dark = true, title, intro = '' } = {}) {
  return `<section class="${dark ? 'sec-dark' : 'sec-bone'}" id="faq">
    <div class="wrap">
      <div class="sec-head center rv">
        <p class="eyebrow">${L.ui.faq}</p>
        <h2>${title || L.ui.faqTitle}</h2>
        ${intro ? `<p class="lead">${intro}</p>` : ''}
      </div>
      <div class="faq rv">
        ${items.map(([q, a]) => `<details>
          <summary>${q}</summary>
          <div class="faq-a">${a}</div>
        </details>`).join('\n        ')}
      </div>
    </div>
  </section>`;
}

const stripTags = (s) => String(s).replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();

export function faqSchema(items) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map(([q, a]) => ({
      '@type': 'Question',
      name: stripTags(q),
      acceptedAnswer: { '@type': 'Answer', text: stripTags(a) },
    })),
  };
}

export function breadcrumb(L, trail) {
  const items = trail
    .map(([, label], i) => `<li${i === trail.length - 1 ? ' aria-current="page"' : ''}>${
      i === trail.length - 1 ? label : `<a href="${link(L, trail[i][0])}">${label}</a>`}</li>`)
    .join('');
  return `<nav class="crumbs" aria-label="${esc(L.ui.crumbAria)}"><ol>${items}</ol></nav>`;
}

export function breadcrumbSchema(L, trail) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map(([k, label], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: stripTags(label),
      item: absUrl(L, L.slugs[k] || k),
    })),
  };
}

export function relatedTags(L, title, keys) {
  const labels = Object.fromEntries([...L.servicesNav, ...L.fleetNav].map(([k, , t]) => [k, t]));
  labels.rates = L.ui.rates;
  labels.drivers = L.ui.drivers;
  return `<section class="sec-bone">
    <div class="wrap">
      <div class="sec-head rv"><p class="eyebrow">${L.ui.discover}</p><h2>${title}</h2></div>
      <div class="tags rv">${keys.map((k) => `<a href="${link(L, k)}">${labels[k] || k}</a>`).join('')}</div>
    </div>
  </section>`;
}

/* ---------- Données structurées globales ---------- */
function organizationSchema(L) {
  return {
    '@type': ['LocalBusiness', 'LimousineService'],
    '@id': `${SITE.domain}/#organisation`,
    name: SITE.name,
    alternateName: ['Limousine Bruxelles', 'Aurum Limousine', 'Aurum Chauffeur Services'],
    description: L.code === 'en'
      ? 'Limousine, private chauffeur, minivan, minibus and bus rental with driver in Brussels and throughout Belgium.'
      : 'Location de limousines, voitures avec chauffeur, minivans Mercedes, minibus et autocars VIP à Bruxelles et dans toute la Belgique.',
    url: `${SITE.domain}/`,
    email: SITE.email,
    logo: `${SITE.domain}/${SITE.logo}`,
    image: photoUrl('hero'),
    priceRange: '€€€',
    currenciesAccepted: 'EUR',
    address: { '@type': 'PostalAddress', addressLocality: 'Bruxelles', addressRegion: 'Région de Bruxelles-Capitale', addressCountry: 'BE' },
    areaServed: [{ '@type': 'City', name: 'Brussels' }, { '@type': 'Country', name: 'Belgium' }],
    availableLanguage: [
      { '@type': 'Language', name: 'French', alternateName: 'fr' },
      { '@type': 'Language', name: 'English', alternateName: 'en' },
      { '@type': 'Language', name: 'Dutch', alternateName: 'nl' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00', closes: '23:59',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: L.services.title,
      itemListElement: L.servicesNav.map(([, , name]) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: stripTags(name), areaServed: 'Brussels, Belgium' },
      })),
    },
  };
}

/* ---------- Gabarit HTML ---------- */
export function layout(L, { slug, title, description, keywords = '', body, schema = [], noindex = false }) {
  const url = absUrl(L, slug);
  const key = keyOf(L, slug);
  const ogImg = photoUrl('hero');

  const alternates = key
    ? LOCALES.map((o) => `<link rel="alternate" hreflang="${o.lang}" href="${absUrl(o, o.slugs[key])}">`).join('\n  ')
      + `\n  <link rel="alternate" hreflang="x-default" href="${absUrl(LOCALES[0], LOCALES[0].slugs[key])}">`
    : '';

  const graph = [organizationSchema(L), {
    '@type': 'WebPage',
    '@id': `${url}#page`,
    url, name: stripTags(title), description: stripTags(description),
    isPartOf: { '@id': `${SITE.domain}/#organisation` },
    inLanguage: L.lang,
  }, ...schema];

  return `<!DOCTYPE html>
<html lang="${L.lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(stripTags(title))}</title>
  <meta name="description" content="${esc(stripTags(description))}">
  ${keywords ? `<meta name="keywords" content="${esc(keywords)}">` : ''}
  <link rel="canonical" href="${url}">
  ${alternates}
  <meta name="robots" content="${noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1'}">
  <meta name="author" content="${esc(SITE.name)}">
  <meta name="geo.region" content="BE-BRU">
  <meta name="geo.placename" content="Brussels">
  <meta name="referrer" content="strict-origin-when-cross-origin">
  <meta name="theme-color" content="#0A0A0C">

  <meta property="og:type" content="website">
  <meta property="og:locale" content="${L.ogLocale}">
  ${LOCALES.filter((o) => o.code !== L.code).map((o) => `<meta property="og:locale:alternate" content="${o.ogLocale}">`).join('\n  ')}
  <meta property="og:site_name" content="${esc(SITE.name)}">
  <meta property="og:title" content="${esc(stripTags(title))}">
  <meta property="og:description" content="${esc(stripTags(description))}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${ogImg}">
  <meta property="og:image:width" content="1600">
  <meta property="og:image:height" content="1067">
  <meta property="og:image:alt" content="${esc(L.home.heroAlt)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(stripTags(title))}">
  <meta name="twitter:description" content="${esc(stripTags(description))}">
  <meta name="twitter:image" content="${ogImg}">

  <link rel="icon" href="${L.up}img/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="${L.up}${SITE.logo}">
  <link rel="manifest" href="${L.up}site.webmanifest">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://images.unsplash.com" crossorigin>
  <link rel="preload" as="image" href="${ogImg}" fetchpriority="high">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500;600&display=swap">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" referrerpolicy="no-referrer">
  <link rel="stylesheet" href="${L.up}css/style.css">

  <script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>
</head>
<body class="has-dock">
  <a href="#main" class="skip">${L.ui.skip}</a>

  <div class="topbar">
    <div class="wrap">
      <span class="tb-hide"><i class="fas fa-location-dot" aria-hidden="true"></i> ${L.topbar.area}</span>
      <a href="mailto:${SITE.email}"><i class="fas fa-envelope" aria-hidden="true"></i> ${SITE.email}</a>
      <span class="tb-hide"><i class="fas fa-clock" aria-hidden="true"></i> ${L.topbar.hours}</span>
    </div>
  </div>

  ${navbar(L, slug)}

  <main id="main">
${body}
  </main>

  ${footer(L)}

  <script src="${L.up}js/main.js" defer></script>
</body>
</html>
`;
}
