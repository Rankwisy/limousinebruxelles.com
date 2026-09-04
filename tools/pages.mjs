/** Construit toutes les pages d'une langue à partir de son bundle. */
import { SITE, photo, layout, ctaBand, trustBar, faqSection, faqSchema, breadcrumb, breadcrumbSchema, relatedTags } from './layout.mjs';
import { hero, choiceSection, servicesSection, fleetSection, driversSection, pricingSection, amenitiesSection, whySection, contactSection, cardGrid } from './blocks.mjs';
import { link, absUrl, keyOf } from './locales.mjs';

const ALL_KEYS = ['svcChauffeur', 'svcLimo', 'svcAirport', 'svcWedding', 'svcVip', 'svcEvent', 'vehMinibus', 'vehCoach', 'vehVclass', 'vehSclass', 'rates', 'drivers'];

/* ---------- Accueil ---------- */
function homePage(L) {
  const h = L.home;
  const body = `${hero(L, {
    eyebrow: h.eyebrow, h1: h.h1, sub: h.sub, alt: h.heroAlt, stats: h.stats,
  })}

  ${trustBar(L)}

  <section>
    <div class="wrap">
      <div class="split rv">
        <div>
          <p class="eyebrow">${SITE.name}</p>
          <h2>${h.introTitle}</h2>
          <p class="lead">${h.introLead}</p>
          <p>${h.introBody}</p>
          <div class="btn-row" style="margin-top:26px">
            <a href="${link(L, 'services')}" class="btn btn-outline">${L.ui.ourServices}</a>
            <a href="${link(L, 'contact')}" class="btn btn-dark">${L.ui.quote}</a>
          </div>
        </div>
        <div class="split-media">
          ${photo(L, 'cuir', h.introImgAlt, { w: 1000, sizes: '(min-width: 940px) 50vw, 100vw' })}
        </div>
      </div>
    </div>
  </section>

  ${choiceSection(L)}
  ${servicesSection(L, { intro: h.servicesIntro })}
  ${fleetSection(L, { intro: h.fleetIntro })}
  ${driversSection(L)}
  ${pricingSection(L)}
  ${amenitiesSection(L)}
  ${whySection(L)}

  <section class="sec-bone">
    <div class="wrap">
      <div class="split rev rv">
        <div class="split-media">
          ${photo(L, 'bruxelles', h.areaImgAlt, { w: 1000, sizes: '(min-width: 940px) 50vw, 100vw' })}
        </div>
        <div>
          <p class="eyebrow">${h.areaEyebrow}</p>
          <h2>${h.areaTitle}</h2>
          <p class="lead">${h.areaLead}</p>
          <ul class="checks" style="margin-top:18px">
            ${h.areaList.map((x) => `<li><i class="fas fa-check" aria-hidden="true"></i> ${x}</li>`).join('\n            ')}
          </ul>
        </div>
      </div>
    </div>
  </section>

  ${faqSection(L, L.homeFaq, { dark: true })}
  ${contactSection(L, {})}
  ${ctaBand(L, L.ctaBand.title, L.ctaBand.text)}`;

  return layout(L, {
    slug: L.slugs.home,
    title: h.title, description: h.description, keywords: h.keywords,
    schema: [faqSchema(L.homeFaq), {
      '@type': 'WebSite',
      '@id': `${SITE.domain}/#website`,
      url: `${SITE.domain}/`,
      name: SITE.name,
      inLanguage: L.lang,
      publisher: { '@id': `${SITE.domain}/#organisation` },
    }],
    body,
  });
}

/* ---------- Gabarit des pages de service / véhicule ---------- */
function landing(L, def) {
  const key = keyOf(L, def.slug);
  const trail = [['home', L.ui.home], [key, def.h1]];
  const body = `${hero(L, {
    eyebrow: def.eyebrow, h1: def.h1, sub: def.sub, img: def.img, alt: def.alt, small: true,
    crumbs: breadcrumb(L, trail),
    secondary: [link(L, 'rates'), L.ui.viewRates],
  })}

  ${trustBar(L)}

  <section>
    <div class="wrap">
      <div class="split rv">
        <div>
          <p class="eyebrow">${def.eyebrow}</p>
          <h2>${def.lead.title}</h2>
          ${def.lead.body.map((p, i) => `<p${i === 0 ? ' class="lead"' : ''}>${p}</p>`).join('\n          ')}
          <div class="btn-row" style="margin-top:26px">
            <a href="${link(L, 'contact')}" class="btn btn-dark">${L.ui.quote}</a>
            <a href="mailto:${SITE.email}" class="btn btn-outline"><i class="fas fa-envelope" aria-hidden="true"></i> ${L.ui.writeUs}</a>
          </div>
        </div>
        <div class="split-media">
          ${photo(L, def.lead.img || def.img, def.lead.imgAlt || def.alt, { w: 1000, sizes: '(min-width: 940px) 50vw, 100vw' })}
        </div>
      </div>
    </div>
  </section>

  <section class="sec-ink2">
    <div class="wrap">
      <div class="sec-head rv"><p class="eyebrow">${L.ui.included}</p><h2>${def.checksTitle}</h2></div>
      <div class="grid g-3 rv">
        ${def.checks.map(([i, t, d]) => `<article class="card card-dark">
          <span class="ico"><i class="fas fa-${i}" aria-hidden="true"></i></span>
          <h3>${t}</h3><p>${d}</p>
        </article>`).join('\n        ')}
      </div>
      ${def.priceNote ? `<p class="price-note rv" style="margin-top:34px">${def.priceNote.replace('contact.html', link(L, 'contact'))}</p>` : ''}
    </div>
  </section>

  ${faqSection(L, def.faq, { dark: false })}
  ${contactSection(L, { title: `${L.ui.quote}: ${def.serviceName}`, subject: `${def.serviceName} — ${L.code.toUpperCase()}` })}
  ${relatedTags(L, L.ui.relatedTitle, ALL_KEYS.filter((k) => k !== key))}
  ${ctaBand(L, L.ctaBand.landingTitle, L.ctaBand.landingText)}`;

  return layout(L, {
    slug: def.slug,
    title: def.title, description: def.description, keywords: def.keywords,
    schema: [faqSchema(def.faq), breadcrumbSchema(L, trail), {
      '@type': 'Service',
      name: def.serviceName,
      serviceType: def.serviceName,
      description: def.description,
      provider: { '@id': `${SITE.domain}/#organisation` },
      areaServed: [{ '@type': 'City', name: 'Brussels' }, { '@type': 'Country', name: 'Belgium' }],
      availableChannel: { '@type': 'ServiceChannel', serviceUrl: absUrl(L, def.slug) },
    }],
    body,
  });
}

/* ---------- Pages hub ---------- */
function hubShell(L, p, key, inner, extraSchema = []) {
  const trail = [['home', L.ui.home], [key, p.h1]];
  const body = `${hero(L, {
    eyebrow: p.eyebrowOverride || p.h1, small: true,
    h1: p.h1, sub: p.sub, img: p.heroImg, alt: p.heroAlt,
    crumbs: breadcrumb(L, trail),
    primary: p.primaryCta ? ['#devis', p.primaryCta] : undefined,
    secondary: [link(L, p.secondary[0]), p.secondary[1]],
  })}
  ${trustBar(L)}
  ${inner}`;
  return layout(L, {
    slug: L.slugs[key], title: p.title, description: p.description, keywords: p.keywords,
    schema: [breadcrumbSchema(L, trail), ...extraSchema],
    body,
  });
}

function servicesHub(L) {
  const p = L.hubs.services;
  const faq = L.homeFaq.slice(0, 5);
  const inner = `${servicesSection(L, { title: p.sectionTitle, intro: p.sectionIntro })}
  ${choiceSection(L)}
  ${amenitiesSection(L)}
  ${whySection(L)}
  ${faqSection(L, faq, { dark: false })}
  ${contactSection(L, { title: p.contactTitle, intro: p.contactIntro })}
  ${ctaBand(L, p.ctaTitle, p.ctaText)}`;
  return hubShell(L, { ...p, eyebrowOverride: L.services.eyebrow }, 'services', inner, [faqSchema(faq)]);
}

function fleetHub(L) {
  const p = L.hubs.fleet;
  const inner = `${choiceSection(L)}
  ${fleetSection(L, { dark: false, title: p.fleetTitle, intro: p.fleetIntro })}
  ${amenitiesSection(L)}
  ${pricingSection(L, { dark: false })}
  ${faqSection(L, p.faq, { dark: true })}
  ${contactSection(L, { title: p.contactTitle, intro: p.contactIntro })}
  ${ctaBand(L, p.ctaTitle, p.ctaText)}`;
  return hubShell(L, { ...p, eyebrowOverride: L.fleet.eyebrow }, 'fleet', inner, [faqSchema(p.faq)]);
}

function driversPage(L) {
  const p = L.hubs.drivers;
  const inner = `${driversSection(L, { cta: [link(L, 'contact'), p.driversCta] })}
  ${cardGrid(L, { eyebrow: p.valuesEyebrow, title: p.valuesTitle, items: p.values })}
  ${faqSection(L, p.faq, { dark: false })}
  ${contactSection(L, { title: p.contactTitle, intro: p.contactIntro })}
  ${ctaBand(L, p.ctaTitle, p.ctaText)}`;
  return hubShell(L, { ...p, eyebrowOverride: L.drivers.eyebrow }, 'drivers', inner, [faqSchema(p.faq)]);
}

function ratesPage(L) {
  const p = L.hubs.rates;
  const inner = `${pricingSection(L, { dark: false })}
  ${cardGrid(L, { eyebrow: p.factorsEyebrow, title: p.factorsTitle, lead: p.factorsLead, items: p.factors, cols: 'g-4' })}
  ${faqSection(L, p.faq, { dark: false })}
  ${contactSection(L, { title: p.contactTitle, intro: p.contactIntro })}
  ${ctaBand(L, p.ctaTitle, p.ctaText)}`;
  return hubShell(L, { ...p, eyebrowOverride: L.pricing.eyebrow }, 'rates', inner, [faqSchema(p.faq), {
    '@type': 'OfferCatalog',
    name: `${p.offerCatalog} — ${SITE.brand}`,
    itemListElement: p.offers.map((o) => ({
      '@type': 'Offer', name: o.name, price: o.price, priceCurrency: 'EUR', description: o.description,
    })),
  }]);
}

function contactPage(L) {
  const p = L.hubs.contact;
  const inner = `${contactSection(L, { title: p.contactTitle, intro: p.contactIntro })}
  <section class="sec-bone">
    <div class="wrap">
      <div class="grid g-3 rv">
        ${p.cards.map(([i, t, d], n) => `<article class="card">
          <span class="ico"><i class="fas fa-${i}" aria-hidden="true"></i></span>
          <h3>${t}</h3>
          <p>${d}</p>
          ${n === 0 ? `<a class="link-arrow" href="mailto:${SITE.email}">${SITE.email} <i class="fas fa-arrow-right" aria-hidden="true"></i></a>` : ''}
        </article>`).join('\n        ')}
      </div>
    </div>
  </section>
  ${faqSection(L, p.faq, { dark: true })}
  ${relatedTags(L, p.relatedTitle, ALL_KEYS)}`;
  return hubShell(L, { ...p, eyebrowOverride: L.contactSec.eyebrow }, 'contact', inner, [
    faqSchema(p.faq),
    { '@type': 'ContactPage', '@id': `${absUrl(L, L.slugs.contact)}#contact` },
  ]);
}

function thanksPage(L) {
  const p = L.hubs.thanks;
  const body = `<section class="hero hero-sm">
    <div class="hero-media">${photo(L, p.heroImg, p.heroAlt, { w: 1600, eager: true })}</div>
    <div class="wrap">
      <div class="hero-inner" style="text-align:center;max-width:720px;margin:0 auto">
        <p class="eyebrow" style="justify-content:center">${p.eyebrow}</p>
        <h1>${p.h1}</h1>
        <p class="hero-sub" style="margin-left:auto;margin-right:auto">${p.sub}</p>
        <div class="btn-row center">
          <a href="${link(L, 'home')}" class="btn btn-gold btn-lg">${p.backHome}</a>
          <a href="${link(L, 'fleet')}" class="btn btn-ghost btn-lg">${L.ui.seeFleet}</a>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="wrap">
      <div class="sec-head center rv">
        <p class="eyebrow">${p.nextEyebrow}</p>
        <h2>${p.nextTitle}</h2>
      </div>
      <div class="grid g-3 rv">
        ${p.steps.map(([i, t, d]) => `<article class="card"><span class="ico"><i class="fas fa-${i}" aria-hidden="true"></i></span><h3>${t}</h3><p>${d}</p></article>`).join('\n        ')}
      </div>
      <div class="btn-row center rv" style="margin-top:36px">
        <a href="mailto:${SITE.email}" class="btn btn-outline"><i class="fas fa-envelope" aria-hidden="true"></i> ${SITE.email}</a>
      </div>
    </div>
  </section>
  ${relatedTags(L, p.relatedTitle, ALL_KEYS)}`;

  return layout(L, { slug: L.slugs.thanks, title: p.title, description: p.description, body, noindex: true });
}

/* ---------- Pages légales ---------- */
function legalPage(L, def) {
  const key = keyOf(L, def.slug);
  const trail = [['home', L.ui.home], [key, def.h1]];
  const body = `${hero(L, {
    eyebrow: def.h1, small: true,
    h1: def.h1, sub: def.description, img: 'bruxelles', alt: L.home.areaImgAlt,
    crumbs: breadcrumb(L, trail),
    primary: [link(L, 'contact'), L.ui.contact],
    secondary: [link(L, 'home'), L.ui.home],
  })}
  <section>
    <div class="wrap">
      <div class="prose rv">
        ${def.sections}
      </div>
    </div>
  </section>`;
  return layout(L, {
    slug: def.slug, title: def.title, description: def.description, body,
    schema: [breadcrumbSchema(L, trail)],
  });
}

/* ---------- Export ---------- */
export function pagesFor(L) {
  const out = [
    { slug: L.slugs.home, html: homePage(L), priority: '1.0', freq: 'weekly' },
    { slug: L.slugs.services, html: servicesHub(L), priority: '0.9' },
    { slug: L.slugs.fleet, html: fleetHub(L), priority: '0.9' },
    { slug: L.slugs.drivers, html: driversPage(L), priority: '0.8' },
    { slug: L.slugs.rates, html: ratesPage(L), priority: '0.9' },
    { slug: L.slugs.contact, html: contactPage(L), priority: '0.9' },
    { slug: L.slugs.thanks, html: thanksPage(L), noindex: true },
  ];
  for (const def of [...L.landings, ...L.vehicles]) {
    out.push({ slug: def.slug, html: landing(L, def), priority: '0.8' });
  }
  for (const def of L.legal) {
    out.push({ slug: def.slug, html: legalPage(L, def), priority: '0.3' });
  }
  return out.map((p) => ({ ...p, base: L.base, locale: L }));
}
