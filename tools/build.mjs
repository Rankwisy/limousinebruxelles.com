/**
 * Générateur du site statique limousinebruxelles.com.
 * Usage : node tools/build.mjs
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE } from './layout.mjs';
import { allPages } from './pages.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const write = (rel, content) => {
  const file = join(ROOT, rel);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content, 'utf8');
  return rel;
};

const pages = allPages();
const written = pages.map((p) => write(p.slug, p.html));

/* ---- sitemap.xml ---- */
const today = new Date().toISOString().slice(0, 10);
const priority = (slug) => (slug === 'index.html' ? '1.0' : /^(nos-services|notre-flotte|contact|tarifs)\.html$/.test(slug) ? '0.9' : /legales|confidentialite/.test(slug) ? '0.3' : '0.8');
const urls = pages
  .filter((p) => !p.noindex)
  .map((p) => `  <url>
    <loc>${SITE.domain}/${p.slug === 'index.html' ? '' : p.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.slug === 'index.html' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${priority(p.slug)}</priority>
  </url>`)
  .join('\n');
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`);

/* ---- robots.txt ---- */
write('robots.txt', `User-agent: *
Allow: /
Disallow: /merci.html

Sitemap: ${SITE.domain}/sitemap.xml
`);

/* ---- Manifeste ---- */
write('site.webmanifest', JSON.stringify({
  name: SITE.name,
  short_name: 'Limousine Bruxelles',
  description: 'Location de limousines, minibus et autocars avec chauffeur à Bruxelles et en Belgique.',
  start_url: '/',
  display: 'standalone',
  background_color: '#0A0A0C',
  theme_color: '#0A0A0C',
  lang: 'fr-BE',
  icons: [{ src: '/img/logo-limousine-bruxelles.png', sizes: '2009x584', type: 'image/png' }],
}, null, 2) + '\n');

/* ---- Favicon (monogramme or sur fond noir) ---- */
write('img/favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="10" fill="#0A0A0C"/>
  <text x="32" y="45" font-family="Georgia, 'Times New Roman', serif" font-size="40" fill="#C9A961" text-anchor="middle">L</text>
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

/* ---- Redirections des anciennes URL WordPress ---- */
write('_redirects', `# Anciennes URL WordPress -> nouvelles pages
/home                              /                                        301!
/index.php                         /                                        301!
/services                          /nos-services.html                       301!
/nos-services                      /nos-services.html                       301!
/flotte                            /notre-flotte.html                       301!
/notre-flotte                      /notre-flotte.html                       301!
/vehicules                         /notre-flotte.html                       301!
/chauffeurs                        /nos-chauffeurs.html                     301!
/nos-chauffeurs                    /nos-chauffeurs.html                     301!
/tarifs                            /tarifs.html                             301!
/prix                              /tarifs.html                             301!
/contact                           /contact.html                            301!
/devis                             /contact.html                            301!
/limousine                         /limousine-avec-chauffeur-bruxelles.html 301!
/chauffeur-prive                   /chauffeur-prive-bruxelles.html          301!
/minibus                           /location-minibus-bruxelles.html         301!
/autocar                           /location-autocar-belgique.html          301!
/bus                               /location-autocar-belgique.html          301!
/mariage                           /transport-mariage-bruxelles.html        301!
/aeroport                          /transfert-aeroport-bruxelles.html       301!
/navette-aeroport                  /transfert-aeroport-bruxelles.html       301!
/vip                               /transport-vip-bruxelles.html            301!
/evenements                        /transport-evenement-bruxelles.html      301!
/mentions-legales                  /mentions-legales.html                   301!
/politique-de-confidentialite      /politique-de-confidentialite.html       301!
`);

console.log(`✔ ${written.length} pages générées :\n  ${written.join('\n  ')}`);
console.log('✔ sitemap.xml, robots.txt, site.webmanifest, img/favicon.svg, _headers, _redirects');
