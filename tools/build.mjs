/**
 * Générateur du site statique limousinebruxelles.com (fr-BE à la racine, en-US sous /en/).
 * Usage : node tools/build.mjs
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE } from './site.mjs';
import { LOCALES, absUrl, keyOf } from './locales.mjs';
import { pagesFor } from './pages.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const write = (rel, content) => {
  const file = join(ROOT, rel);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content, 'utf8');
  return rel;
};

/* ---- Pages ---- */
const all = [];
for (const L of LOCALES) {
  for (const p of pagesFor(L)) {
    write(`${L.base}${p.slug}`, p.html);
    all.push(p);
  }
}

/* ---- sitemap.xml (avec alternates hreflang) ---- */
const today = new Date().toISOString().slice(0, 10);
const urls = all.filter((p) => !p.noindex).map((p) => {
  const key = keyOf(p.locale, p.slug);
  const alts = key
    ? LOCALES.map((o) => `    <xhtml:link rel="alternate" hreflang="${o.lang}" href="${absUrl(o, o.slugs[key])}"/>`).join('\n')
      + `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${absUrl(LOCALES[0], LOCALES[0].slugs[key])}"/>`
    : '';
  return `  <url>
    <loc>${absUrl(p.locale, p.slug)}</loc>
${alts}
    <lastmod>${today}</lastmod>
    <changefreq>${p.freq || 'monthly'}</changefreq>
    <priority>${p.priority || '0.8'}</priority>
  </url>`;
}).join('\n');

write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`);

/* ---- robots.txt ---- */
const disallow = LOCALES.map((L) => `Disallow: /${L.base}${L.slugs.thanks}`).join('\n');
write('robots.txt', `User-agent: *
Allow: /
${disallow}

# Assistants IA et moteurs de réponse — explicitement autorisés.
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Claude-User
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: Applebot-Extended
Allow: /
User-agent: CCBot
Allow: /

Sitemap: ${SITE.domain}/sitemap.xml
`);

/* ---- llms.txt : résumé factuel pour les moteurs de réponse ---- */
const en = LOCALES.find((L) => L.code === 'en');
const fr = LOCALES.find((L) => L.code === 'fr');
const enLinks = [...en.landings, ...en.vehicles]
  .map((d) => `- [${d.serviceName}](${SITE.domain}/en/${d.slug}): ${d.sub}`).join('\n');

write('llms.txt', `# ${SITE.name}

> Chauffeured ground transportation in Brussels, Belgium: limousines, private
> chauffeurs, Mercedes V-Class minivans, minibuses and motorcoaches (buses) with
> a professional driver. Serving Brussels and the whole of Belgium, with airport
> transfers, weddings, VIP travel, conferences and group transportation.
> Quotes and bookings in English or French, by email.

## Key facts

- Business: ${SITE.name} (also known as Limousine Bruxelles)
- Based in: Brussels, Belgium. Serves all of Belgium and neighbouring countries on request.
- Contact: ${SITE.email} (email only — no phone number published)
- Languages: English, French, Dutch
- Capacity: 1 to approximately 50 passengers
- Vehicles: Mercedes S-Class (up to 3), Mercedes V-Class (up to 7), minibus (up to 8 seats), motorcoach (approx. 50 seats)
- Indicative rates, in EUR: minibus approx. €350/day; motorcoach approx. €600/day; limousines and cars with chauffeur quoted per trip
- Airports served: Brussels Zaventem (BRU), Brussels South Charleroi (CRL), Liège, Antwerp, Ostend, Lille, Amsterdam Schiphol
- All bookings include a professional chauffeur. No self-drive rental is offered.
- Response time for quote requests: within one business day

## English pages

- [Home — bus, minibus and limousine rental with chauffeur in Brussels](${SITE.domain}/en/)
- [Services](${SITE.domain}/en/${en.slugs.services})
- [Fleet](${SITE.domain}/en/${en.slugs.fleet})
- [Chauffeurs](${SITE.domain}/en/${en.slugs.drivers})
- [Rates](${SITE.domain}/en/${en.slugs.rates})
- [Contact and quote](${SITE.domain}/en/${en.slugs.contact})
${enLinks}

## French pages

- [Accueil](${SITE.domain}/)
- [Nos services](${SITE.domain}/${fr.slugs.services})
- [Notre flotte](${SITE.domain}/${fr.slugs.fleet})
- [Tarifs](${SITE.domain}/${fr.slugs.rates})
- [Contact](${SITE.domain}/${fr.slugs.contact})
`);

/* ---- Manifeste ---- */
write('site.webmanifest', JSON.stringify({
  name: SITE.name,
  short_name: 'Limousine Bruxelles',
  description: 'Chauffeured limousines, minibuses and buses in Brussels and Belgium.',
  start_url: '/',
  display: 'standalone',
  background_color: '#0A0A0C',
  theme_color: '#0A0A0C',
  lang: 'fr-BE',
  icons: [{ src: '/img/logo-limousine-bruxelles.png', sizes: '2009x584', type: 'image/png' }],
}, null, 2) + '\n');

/* ---- Favicon ---- */
write('img/favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="10" fill="#0A0A0C"/>
  <text x="32" y="45" font-family="Georgia, 'Times New Roman', serif" font-size="40" fill="#C9A961" text-anchor="middle">A</text>
</svg>
`);

/* ---- En-têtes de sécurité (Netlify / Cloudflare Pages) ---- */
write('_headers', `/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; img-src 'self' https://images.unsplash.com data:; font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; connect-src 'self'; form-action https://formsubmit.co; frame-ancestors 'self'; base-uri 'self'; object-src 'none'

/css/*
  Cache-Control: public, max-age=31536000, immutable

/js/*
  Cache-Control: public, max-age=31536000, immutable

/img/*
  Cache-Control: public, max-age=31536000, immutable
`);

/* ---- Redirections ---- */
const frS = fr.slugs, enS = en.slugs;
write('_redirects', `# Anciennes URL WordPress -> nouvelles pages françaises
/home                              /                                        301!
/index.php                         /                                        301!
/services                          /${frS.services}                         301!
/nos-services                      /${frS.services}                         301!
/flotte                            /${frS.fleet}                            301!
/notre-flotte                      /${frS.fleet}                            301!
/vehicules                         /${frS.fleet}                            301!
/chauffeurs                        /${frS.drivers}                          301!
/nos-chauffeurs                    /${frS.drivers}                          301!
/tarifs                            /${frS.rates}                            301!
/prix                              /${frS.rates}                            301!
/contact                           /${frS.contact}                          301!
/devis                             /${frS.contact}                          301!
/limousine                         /${frS.svcLimo}                          301!
/chauffeur-prive                   /${frS.svcChauffeur}                     301!
/minibus                           /${frS.vehMinibus}                       301!
/autocar                           /${frS.vehCoach}                         301!
/bus                               /${frS.vehCoach}                         301!
/mariage                           /${frS.svcWedding}                       301!
/aeroport                          /${frS.svcAirport}                       301!
/navette-aeroport                  /${frS.svcAirport}                       301!
/vip                               /${frS.svcVip}                           301!
/evenements                        /${frS.svcEvent}                         301!
/mentions-legales                  /${frS.legal}                            301!
/politique-de-confidentialite      /${frS.privacy}                          301!

# Raccourcis anglais
/en                                /en/                                     301!
/english                           /en/                                     301!
/en/services                       /en/${enS.services}                      301!
/en/fleet                          /en/${enS.fleet}                         301!
/en/rates                          /en/${enS.rates}                         301!
/en/contact                        /en/${enS.contact}                       301!
/en/bus-rental                     /en/${enS.vehCoach}                      301!
/en/airport-transfer               /en/${enS.svcAirport}                    301!
`);

const indexable = all.filter((p) => !p.noindex).length;
console.log(`✔ ${all.length} pages générées (${LOCALES.map((L) => `${L.code}: ${pagesFor(L).length}`).join(', ')})`);
console.log(`✔ sitemap.xml — ${indexable} URL indexables avec alternates hreflang`);
console.log('✔ robots.txt, llms.txt, site.webmanifest, img/favicon.svg, _headers, _redirects');
