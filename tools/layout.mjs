/**
 * Gabarit partagé du site limousinebruxelles.com.
 * Toutes les pages HTML de la racine sont générées à partir d'ici : `node tools/build.mjs`.
 */

export const SITE = {
  name: 'Aurum — Limousine Bruxelles',   // marque complète (lockup)
  brand: 'Aurum',                        // nom court, pour les textes courants
  domain: 'https://limousinebruxelles.com',
  email: 'info@limousinebruxelles.com',
  logo: 'img/logo-limousine-bruxelles.png',
};

/* Photographies libres de droits (Unsplash License — usage commercial autorisé). */
const PHOTOS = {
  hero:        'photo-1610099610040-ab19f3a5ec35',
  classeS:     'photo-1692632146184-08b6f4828a23',
  classeV:     'photo-1765461734605-34657fa04db2',
  minibus:     { local: 'img/minibus-bruxelles', w: 1600, h: 1195 },
  autocar:     { local: 'img/autocar-vip-bruxelles', w: 1600, h: 1195 },
  autocarGP:   { local: 'img/autocar-grand-place-bruxelles', w: 1600, h: 1195 },
  autocarInt:  { local: 'img/autocar-interieur', w: 1600, h: 1195 },
  cuir:        'photo-1652860316277-370ca5b1b1df',
  chauffeur:   'photo-1558222209-134191edfe0d',
  mariage:     'photo-1765292783735-9ec7213b1df1',
  aeroport:    'photo-1553619948-505cc1cdc320',
  evenement:   'photo-1540575467063-178a50c2df87',
  groupe:      'photo-1758539449328-1b4c0e8c287e',
  bruxelles:   'photo-1573299867162-6e895f64bf23',
  nuit:        'photo-1774550010075-af560fe7f732',
};

const U = 'https://images.unsplash.com/';

/** Balise <img> responsive servie par le CDN Unsplash. */
export function photo(key, alt, { w = 1200, ratio = '', cls = '', eager = false, sizes = '100vw' } = {}) {
  const id = PHOTOS[key];
  if (!id) throw new Error(`Photo inconnue : ${key}`);
  const loading = ` loading="${eager ? 'eager' : 'lazy'}" decoding="async"${eager ? ' fetchpriority="high"' : ''}`;

  // Fichier servi par le site lui-même (deux tailles).
  if (id.local) {
    return `<img src="${id.local}-1600.jpg" srcset="${id.local}-800.jpg 800w, ${id.local}-1600.jpg 1600w" sizes="${sizes}"
        alt="${esc(alt)}" width="${id.w}" height="${id.h}"${cls ? ` class="${cls}"` : ''}${loading}>`;
  }

  const crop = ratio ? `&ar=${ratio}&fit=crop&crop=entropy` : '&fit=crop';
  const src = (px) => `${U}${id}?auto=format&q=72&w=${px}${crop}`;
  const widths = [640, 1000, 1600, 2000].filter((px) => px <= w * 1.7);
  return `<img src="${src(w)}" srcset="${widths.map((px) => `${src(px)} ${px}w`).join(', ')}" sizes="${sizes}"
        alt="${esc(alt)}" width="${w}" height="${Math.round(w * 0.66)}"${cls ? ` class="${cls}"` : ''}
        loading="${eager ? 'eager' : 'lazy'}" decoding="async"${eager ? ' fetchpriority="high"' : ''}>`;
}

export function photoUrl(key, w = 1200) {
  const id = PHOTOS[key];
  if (id.local) return `${SITE.domain}/${id.local}-1600.jpg`;
  return `${U}${id}?auto=format&q=72&w=${w}&fit=crop`;
}

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ---------- Navigation ---------- */
const SERVICES_NAV = [
  ['chauffeur-prive-bruxelles.html', 'user-tie', 'Chauffeur privé', 'Mise à disposition à l’heure ou à la journée'],
  ['limousine-avec-chauffeur-bruxelles.html', 'car-side', 'Limousine avec chauffeur', 'Berlines et limousines de prestige'],
  ['transfert-aeroport-bruxelles.html', 'plane-departure', 'Transfert aéroport', 'Zaventem, Charleroi, Liège, Anvers'],
  ['transport-mariage-bruxelles.html', 'ring', 'Transport de mariage', 'Mariés, familles et invités'],
  ['transport-vip-bruxelles.html', 'star', 'Transport VIP', 'Discrétion et ponctualité absolues'],
  ['transport-evenement-bruxelles.html', 'calendar-check', 'Événements & groupes', 'Séminaires, congrès, incentives'],
];

const FLOTTE_NAV = [
  ['mercedes-classe-v-avec-chauffeur.html', 'shuttle-van', 'Mercedes Classe V', 'Minivan de luxe · jusqu’à 7 passagers'],
  ['mercedes-classe-s-avec-chauffeur.html', 'car', 'Mercedes Classe S', 'Berline haut de gamme · 3 passagers'],
  ['location-minibus-bruxelles.html', 'van-shuttle', 'Minibus', 'Jusqu’à 8 places · petits groupes'],
  ['location-autocar-belgique.html', 'bus', 'Autocar & Bus VIP', 'Environ 50 places · grands groupes'],
];

function dropdown(id, label, items, allHref, allLabel, current) {
  const active = items.some(([h]) => h === current) || current === allHref;
  const links = items
    .map(([href, icon, title, sub]) =>
      `<a href="${href}"><i class="fas fa-${icon}" aria-hidden="true"></i><span><strong>${title}</strong><small>${sub}</small></span></a>`)
    .join('\n            ');
  return `<li class="drop">
          <button class="drop-btn${active ? ' current' : ''}" id="${id}" aria-expanded="false" aria-controls="${id}-panel">
            ${label} <i class="fas fa-chevron-down" aria-hidden="true"></i>
          </button>
          <div class="drop-panel" id="${id}-panel" role="group" aria-labelledby="${id}">
            ${links}
            <a href="${allHref}"><i class="fas fa-arrow-right" aria-hidden="true"></i><span><strong>${allLabel}</strong><small>Vue d’ensemble</small></span></a>
          </div>
        </li>`;
}

function navbar(current) {
  const on = (href) => (current === href ? ' class="current"' : '');
  return `<nav class="nav" id="nav" aria-label="Navigation principale">
    <div class="wrap">
      <a href="index.html" class="brand" aria-label="${SITE.name}, accueil">
        <span class="brand-mark">${SITE.brand}</span>
        <img src="${SITE.logo}" alt="Limousine Bruxelles" width="2009" height="584">
      </a>
      <button class="nav-toggle" id="navToggle" aria-expanded="false" aria-controls="navMenu" aria-label="Ouvrir le menu">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-menu" id="navMenu">
        <li><a href="index.html"${on('index.html')}>Accueil</a></li>
        ${dropdown('navServices', 'Services', SERVICES_NAV, 'nos-services.html', 'Tous nos services', current)}
        ${dropdown('navFlotte', 'Flotte', FLOTTE_NAV, 'notre-flotte.html', 'Toute la flotte', current)}
        <li><a href="nos-chauffeurs.html"${on('nos-chauffeurs.html')}>Chauffeurs</a></li>
        <li><a href="tarifs.html"${on('tarifs.html')}>Tarifs</a></li>
        <li><a href="contact.html"${on('contact.html')}>Contact</a></li>
        <li class="nav-cta"><a href="contact.html" class="btn btn-gold">Demander un devis</a></li>
      </ul>
    </div>
  </nav>
  <div class="nav-scrim" id="navScrim"></div>`;
}

/* ---------- Pied de page ---------- */
function footer() {
  const col = (title, links) =>
    `<div><h4>${title}</h4><ul>${links.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join('')}</ul></div>`;

  return `<footer class="foot">
    <div class="wrap">
      <div class="foot-grid">
        <div>
          <p class="brand-mark foot-brand">${SITE.brand}</p>
          <img src="${SITE.logo}" alt="Limousine Bruxelles" class="foot-logo" width="2009" height="584" loading="lazy">
          <p>Location de limousines, voitures avec chauffeur, minivans, minibus et autocars à Bruxelles et partout en Belgique. Des chauffeurs expérimentés, des véhicules haut de gamme, un service sur mesure.</p>
          <a href="mailto:${SITE.email}" class="foot-mail"><i class="fas fa-envelope" aria-hidden="true"></i> ${SITE.email}</a>
          <p class="foot-note">Réservations et devis exclusivement par e-mail — réponse rapide, 7 jours sur 7.</p>
        </div>
        ${col('Services', SERVICES_NAV.map(([h, , t]) => [h, t]).concat([['nos-services.html', 'Tous nos services']]))}
        ${col('Notre flotte', FLOTTE_NAV.map(([h, , t]) => [h, t]).concat([['notre-flotte.html', 'Toute la flotte']]))}
        ${col('Informations', [
          ['nos-chauffeurs.html', 'Nos chauffeurs'],
          ['tarifs.html', 'Tarifs indicatifs'],
          ['contact.html', 'Demander un devis'],
          ['mentions-legales.html', 'Mentions légales'],
          ['politique-de-confidentialite.html', 'Politique de confidentialité'],
        ])}
      </div>
    </div>
    <div class="foot-bar">
      <div class="wrap">
        <span>© <span data-year>2026</span> ${SITE.name} · Bruxelles, Belgique. Tous droits réservés.</span>
        <ul>
          <li><a href="mentions-legales.html">Mentions légales</a></li>
          <li><a href="politique-de-confidentialite.html">Confidentialité</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
    </div>
  </footer>

  <div class="dock" id="dock">
    <a href="mailto:${SITE.email}"><i class="fas fa-envelope" aria-hidden="true"></i> Nous écrire</a>
    <a href="contact.html"><i class="fas fa-file-signature" aria-hidden="true"></i> Devis gratuit</a>
  </div>`;
}

/* ---------- Blocs réutilisables ---------- */
export function ctaBand(title, text, primary = ['contact.html', 'Demander un devis']) {
  return `<section class="cta-band">
    ${photo('classeS', 'Calandre d’une berline Mercedes noire de prestige avec chauffeur', { w: 1600, cls: '', sizes: '100vw' })}
    <div class="wrap">
      <p class="eyebrow" style="justify-content:center">${SITE.name}</p>
      <h2>${title}</h2>
      <p>${text}</p>
      <div class="btn-row center">
        <a href="${primary[0]}" class="btn btn-gold btn-lg">${primary[1]} <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
        <a href="mailto:${SITE.email}" class="btn btn-ghost btn-lg"><i class="fas fa-envelope" aria-hidden="true"></i> ${SITE.email}</a>
      </div>
    </div>
  </section>`;
}

export function trustBar() {
  return `<div class="trust">
    <div class="wrap">
      <ul>
        <li><i class="fas fa-user-tie" aria-hidden="true"></i> Chauffeurs professionnels expérimentés</li>
        <li><i class="fas fa-gem" aria-hidden="true"></i> Véhicules haut de gamme et entretenus</li>
        <li><i class="fas fa-map-location-dot" aria-hidden="true"></i> Bruxelles et toute la Belgique</li>
        <li><i class="fas fa-users" aria-hidden="true"></i> De 1 à 50 passagers</li>
      </ul>
    </div>
  </div>`;
}

/** Formulaire de demande de devis (envoi e-mail vers info@limousinebruxelles.com). */
export function quoteForm({ id = 'devisForm', subject = 'Demande de devis — limousinebruxelles.com' } = {}) {
  const veh = ['Limousine / berline de prestige', 'Mercedes Classe S', 'Mercedes Classe V (minivan)', 'Voiture avec chauffeur', 'Minibus (jusqu’à 8 places)', 'Autocar / Bus VIP (env. 50 places)', 'Je ne sais pas encore — conseillez-moi'];
  return `<form class="form-card" id="${id}" action="https://formsubmit.co/${SITE.email}" method="POST" novalidate>
        <input type="hidden" name="_subject" value="${esc(subject)}">
        <input type="hidden" name="_template" value="table">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="${SITE.domain}/merci.html">
        <div class="hp" aria-hidden="true"><label>Ne pas remplir <input type="text" name="_honey" tabindex="-1" autocomplete="off"></label></div>

        <div class="form-grid">
          <div class="form-grid f2">
            <div class="field">
              <label for="nom">Nom complet <span class="req">*</span></label>
              <input type="text" id="nom" name="Nom" placeholder="Votre nom et prénom" required autocomplete="name">
            </div>
            <div class="field">
              <label for="email">Adresse e-mail <span class="req">*</span></label>
              <input type="email" id="email" name="Email" placeholder="Votre adresse e-mail" required autocomplete="email">
            </div>
          </div>

          <div class="form-grid f2">
            <div class="field">
              <label for="date">Date souhaitée <span class="req">*</span></label>
              <input type="date" id="date" name="Date souhaitee" required>
            </div>
            <div class="field">
              <label for="passagers">Nombre de passagers <span class="req">*</span></label>
              <input type="number" id="passagers" name="Nombre de passagers" min="1" max="120" step="1" placeholder="4" required>
            </div>
          </div>

          <div class="form-grid f2">
            <div class="field">
              <label for="depart">Lieu de départ <span class="req">*</span></label>
              <input type="text" id="depart" name="Lieu de depart" placeholder="Bruxelles, Grand-Place" required>
            </div>
            <div class="field">
              <label for="destination">Destination <span class="req">*</span></label>
              <input type="text" id="destination" name="Destination" placeholder="Aéroport de Bruxelles-Zaventem" required>
            </div>
          </div>

          <div class="field">
            <label for="vehicule">Type de véhicule souhaité <span class="req">*</span></label>
            <select id="vehicule" name="Type de vehicule" required>
              <option value="">— Sélectionnez un véhicule —</option>
              ${veh.map((v) => `<option>${v}</option>`).join('\n              ')}
            </select>
          </div>

          <div class="field">
            <label for="message">Votre message</label>
            <textarea id="message" name="Message" placeholder="Horaires, trajet retour, nombre de bagages, occasion (mariage, séminaire, transfert…), toute précision utile."></textarea>
          </div>

          <label class="form-consent">
            <input type="checkbox" name="Consentement" value="Oui" required>
            <span>J’accepte que mes données soient utilisées pour répondre à ma demande de devis, conformément à la <a href="politique-de-confidentialite.html">politique de confidentialité</a>. <span class="req">*</span></span>
          </label>

          <button type="submit" class="btn btn-dark btn-block btn-lg">
            <i class="fas fa-paper-plane" aria-hidden="true"></i> Envoyer ma demande de devis
          </button>
          <p class="form-foot">Votre demande est transmise à <a href="mailto:${SITE.email}" style="color:inherit;text-decoration:underline">${SITE.email}</a>. Réponse sous 24 h ouvrées.</p>
        </div>
      </form>`;
}

export function faqSection(items, { dark = true, title = 'Questions fréquentes', intro = '' } = {}) {
  return `<section class="${dark ? 'sec-dark' : 'sec-bone'}" id="faq">
    <div class="wrap">
      <div class="sec-head center rv">
        <p class="eyebrow">FAQ</p>
        <h2>${title}</h2>
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

const stripTags = (s) => String(s).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

export function breadcrumb(trail) {
  const items = trail
    .map(([href, label], i) => `<li${i === trail.length - 1 ? ' aria-current="page"' : ''}>${
      i === trail.length - 1 ? label : `<a href="${href}">${label}</a>`}</li>`)
    .join('');
  return `<nav class="crumbs" aria-label="Fil d’Ariane"><ol>${items}</ol></nav>`;
}

export function breadcrumbSchema(trail) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map(([href, label], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: label,
      item: `${SITE.domain}/${href === 'index.html' ? '' : href}`,
    })),
  };
}

/** Bloc de maillage interne. */
export function relatedTags(title, links) {
  return `<section class="sec-bone">
    <div class="wrap">
      <div class="sec-head rv"><p class="eyebrow">À découvrir</p><h2>${title}</h2></div>
      <div class="tags rv">${links.map(([h, t]) => `<a href="${h}">${t}</a>`).join('')}</div>
    </div>
  </section>`;
}

/* ---------- Données structurées globales ---------- */
function organizationSchema() {
  return {
    '@type': ['LocalBusiness', 'LimousineService'],
    '@id': `${SITE.domain}/#organisation`,
    name: SITE.name,
    alternateName: ['Limousine Bruxelles', 'Aurum Limousine', 'Aurum Chauffeur Services'],
    description: 'Location de limousines, voitures avec chauffeur, minivans Mercedes, minibus et autocars VIP à Bruxelles et dans toute la Belgique.',
    url: `${SITE.domain}/`,
    email: SITE.email,
    logo: `${SITE.domain}/${SITE.logo}`,
    image: photoUrl('hero', 1600),
    priceRange: '€€€',
    address: { '@type': 'PostalAddress', addressLocality: 'Bruxelles', addressRegion: 'Région de Bruxelles-Capitale', addressCountry: 'BE' },
    areaServed: [
      { '@type': 'City', name: 'Bruxelles' },
      { '@type': 'Country', name: 'Belgique' },
    ],
    availableLanguage: ['fr', 'nl', 'en'],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00', closes: '23:59',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de transport avec chauffeur',
      itemListElement: SERVICES_NAV.map(([, , name]) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name, areaServed: 'Bruxelles, Belgique' },
      })),
    },
  };
}

/* ---------- Gabarit HTML ---------- */
export function layout({ slug, title, description, keywords = '', h1, body, schema = [], bodyClass = '' }) {
  const url = `${SITE.domain}/${slug === 'index.html' ? '' : slug}`;
  const graph = [organizationSchema(), {
    '@type': 'WebPage',
    '@id': `${url}#page`,
    url, name: title, description,
    isPartOf: { '@id': `${SITE.domain}/#organisation` },
    inLanguage: 'fr-BE',
  }, ...schema];

  return `<!DOCTYPE html>
<html lang="fr-BE">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  ${keywords ? `<meta name="keywords" content="${esc(keywords)}">` : ''}
  <link rel="canonical" href="${url}">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
  <meta name="author" content="${SITE.name}">
  <meta name="geo.region" content="BE-BRU">
  <meta name="geo.placename" content="Bruxelles">
  <meta name="referrer" content="strict-origin-when-cross-origin">
  <meta name="theme-color" content="#0A0A0C">

  <meta property="og:type" content="website">
  <meta property="og:locale" content="fr_BE">
  <meta property="og:site_name" content="${esc(SITE.name)}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${photoUrl('hero', 1600)}">
  <meta property="og:image:alt" content="Mercedes Classe S noire avec chauffeur à Bruxelles">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image" content="${photoUrl('hero', 1600)}">

  <link rel="icon" href="img/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="${SITE.logo}">
  <link rel="manifest" href="site.webmanifest">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://images.unsplash.com" crossorigin>
  <link rel="preload" as="image" href="${photoUrl('hero', 1600)}" fetchpriority="high">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500;600&display=swap">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" referrerpolicy="no-referrer">
  <link rel="stylesheet" href="css/style.css">

  <script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>
</head>
<body class="has-dock${bodyClass ? ' ' + bodyClass : ''}">
  <a href="#main" class="skip">Aller au contenu principal</a>

  <div class="topbar">
    <div class="wrap">
      <span class="tb-hide"><i class="fas fa-location-dot" aria-hidden="true"></i> Bruxelles &amp; toute la Belgique</span>
      <a href="mailto:${SITE.email}"><i class="fas fa-envelope" aria-hidden="true"></i> ${SITE.email}</a>
      <span class="tb-hide"><i class="fas fa-clock" aria-hidden="true"></i> Disponible 7j/7</span>
    </div>
  </div>

  ${navbar(slug)}

  <main id="main">
${body}
  </main>

  ${footer()}

  <script src="js/main.js" defer></script>
</body>
</html>
`;
}

export { SERVICES_NAV, FLOTTE_NAV, PHOTOS };
