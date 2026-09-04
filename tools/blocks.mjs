/** Sections réutilisées par plusieurs pages. Chaque fonction reçoit le bundle de langue `L`. */
import { photo, quoteForm, SITE, esc } from './layout.mjs';
import { link } from './locales.mjs';

/* ---------- Hero ---------- */
export function hero(L, { eyebrow, h1, sub, primary, secondary, img = 'hero', alt, stats, crumbs = '', small = false }) {
  const p = primary || [link(L, 'contact'), L.ui.quote];
  const s = secondary || [link(L, 'fleet'), L.ui.seeFleet];
  return `<section class="hero${small ? ' hero-sm' : ''}">
    <div class="hero-media">${photo(L, img, alt, { w: 2000, eager: true })}</div>
    <div class="wrap">
      <div class="hero-inner">
        ${crumbs}
        <p class="eyebrow">${eyebrow}</p>
        <h1>${h1}</h1>
        <p class="hero-sub">${sub}</p>
        <div class="btn-row">
          <a href="${p[0]}" class="btn btn-gold btn-lg">${p[1]} <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
          <a href="${s[0]}" class="btn btn-ghost btn-lg">${s[1]}</a>
        </div>
        ${stats ? `<div class="hero-stats">${stats.map(([n, l]) => `<div class="hero-stat"><b>${n}</b><span>${l}</span></div>`).join('')}</div>` : ''}
      </div>
    </div>
  </section>`;
}

/* ---------- Bus ou limousine ? ---------- */
export function choiceSection(L) {
  const c = L.choice;
  return `<section class="sec-ink2" id="bus-ou-limousine">
    <div class="wrap">
      <div class="sec-head rv">
        <p class="eyebrow">${c.eyebrow}</p>
        <h2>${c.title}</h2>
        <p class="lead">${c.lead}</p>
      </div>
      <div class="tbl-scroll rv">
        <table class="cmp">
          <caption class="hp">${esc(c.caption)}</caption>
          <thead>
            <tr>${c.cols.map((h) => `<th scope="col">${h}</th>`).join('')}</tr>
          </thead>
          <tbody>
            ${c.rows.map(([a, b, d, e]) => `<tr><th scope="row">${a}</th><td>${b}</td><td>${d}</td><td>${e}</td></tr>`).join('\n            ')}
          </tbody>
        </table>
      </div>
      <div class="btn-row rv" style="margin-top:32px">
        <a href="${link(L, 'fleet')}" class="btn btn-gold">${L.ui.seeAllVehicles}</a>
        <a href="${link(L, 'contact')}" class="btn btn-ghost">${c.cta2}</a>
      </div>
    </div>
  </section>`;
}

/* ---------- Services ---------- */
export function servicesSection(L, { dark = false, title, intro = '' } = {}) {
  return `<section class="${dark ? 'sec-dark' : ''}" id="services">
    <div class="wrap">
      <div class="sec-head rv">
        <p class="eyebrow">${L.services.eyebrow}</p>
        <h2>${title || L.services.title}</h2>
        ${intro ? `<p class="lead">${intro}</p>` : ''}
      </div>
      <div class="grid g-4 rv">
        ${L.services.items.map(([k, icon, name, desc]) => `<article class="card${dark ? ' card-dark' : ''}">
          <span class="ico"><i class="fas fa-${icon}" aria-hidden="true"></i></span>
          <h3>${name}</h3>
          <p>${desc}</p>
          <a class="link-arrow" href="${link(L, k)}">${L.ui.learnMore} <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
        </article>`).join('\n        ')}
      </div>
    </div>
  </section>`;
}

/* ---------- Flotte ---------- */
export function fleetSection(L, { dark = true, title, intro = '' } = {}) {
  return `<section class="${dark ? 'sec-dark' : 'sec-bone'}" id="flotte">
    <div class="wrap">
      <div class="sec-head rv">
        <p class="eyebrow">${L.fleet.eyebrow}</p>
        <h2>${title || L.fleet.title}</h2>
        ${intro ? `<p class="lead">${intro}</p>` : ''}
      </div>
      <div class="grid" style="gap:clamp(48px,7vw,92px)">
        ${L.fleet.items.map((v, i) => `<article class="fleet-item${i % 2 ? ' rev' : ''} rv">
          <div class="fleet-media">
            <span class="fleet-badge">${v.badge}</span>
            ${photo(L, v.img, v.alt, { w: 1000, sizes: '(min-width: 940px) 50vw, 100vw' })}
          </div>
          <div class="fleet-body">
            <p class="fleet-kicker">${v.kicker}</p>
            <h3>${v.title}</h3>
            <p>${v.text}</p>
            <ul class="fleet-specs">
              ${v.specs.map((s) => `<li><i class="fas fa-check" aria-hidden="true"></i> ${s}</li>`).join('\n              ')}
            </ul>
            <a class="link-arrow" href="${link(L, v.key)}">${L.ui.discoverVehicle} <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
          </div>
        </article>`).join('\n        ')}
      </div>
    </div>
  </section>`;
}

/* ---------- Chauffeurs ---------- */
export function driversSection(L, { dark = false, cta } = {}) {
  const d = L.drivers;
  const c = cta || [link(L, 'drivers'), d.cta];
  return `<section class="${dark ? 'sec-dark' : ''}" id="chauffeurs">
    <div class="wrap">
      <div class="split rv">
        <div class="split-media">
          ${photo(L, 'chauffeur', d.imgAlt, { w: 1000, sizes: '(min-width: 940px) 50vw, 100vw' })}
          <p class="split-quote">${d.quote}</p>
        </div>
        <div>
          <p class="eyebrow">${d.eyebrow}</p>
          <h2>${d.title}</h2>
          <p class="lead">${d.lead}</p>
          <ul class="checks" style="margin-top:22px">
            ${d.points.map(([t, x]) => `<li><i class="fas fa-check" aria-hidden="true"></i> <span><strong>${t}</strong> — ${x}</span></li>`).join('\n            ')}
          </ul>
          <div class="btn-row" style="margin-top:30px">
            <a href="${c[0]}" class="btn ${dark ? 'btn-gold' : 'btn-outline'}">${c[1]}</a>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

/* ---------- Tarifs ---------- */
export function pricingSection(L, { dark = false } = {}) {
  const p = L.pricing;
  return `<section class="${dark ? 'sec-dark' : 'sec-bone'}" id="tarifs">
    <div class="wrap">
      <div class="sec-head center rv">
        <p class="eyebrow">${p.eyebrow}</p>
        <h2>${p.title}</h2>
        <p class="lead">${p.lead}</p>
      </div>
      <div class="price-grid rv">
        ${p.cards.map((c) => `<article class="price${c.feat ? ' feat' : ''}">
          ${c.feat ? `<span class="price-tag">${p.featured}</span>` : ''}
          <h3>${c.name}</h3>
          <p class="price-cap">${c.cap}</p>
          <p class="price-amt">${c.amt}</p>
          <p class="price-per">${c.per}</p>
          <ul class="checks">${c.list.map((l) => `<li><i class="fas fa-check" aria-hidden="true"></i> ${l}</li>`).join('')}</ul>
          <a href="${link(L, 'contact')}" class="btn ${c.feat ? 'btn-gold' : 'btn-outline'} btn-block">${L.ui.quote}</a>
        </article>`).join('\n        ')}
      </div>
      <p class="price-note rv">${p.note}</p>
      <div class="btn-row center rv" style="margin-top:34px">
        <a href="${link(L, 'contact')}" class="btn btn-gold btn-lg">${p.cta} <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
      </div>
    </div>
  </section>`;
}

/* ---------- Équipements ---------- */
export function amenitiesSection(L) {
  const a = L.amenities;
  return `<section class="sec-ink2" id="equipements">
    <div class="wrap">
      <div class="sec-head rv">
        <p class="eyebrow">${a.eyebrow}</p>
        <h2>${a.title}</h2>
        <p class="lead">${a.lead}</p>
      </div>
      <ul class="amen rv">
        ${a.items.map(([i, t, d]) => `<li><i class="fas fa-${i}" aria-hidden="true"></i><h4>${t}</h4><p>${d}</p></li>`).join('\n        ')}
      </ul>
    </div>
  </section>`;
}

/* ---------- Pourquoi nous choisir ---------- */
export function whySection(L, { dark = false } = {}) {
  const w = L.why;
  return `<section class="${dark ? 'sec-dark' : ''}" id="pourquoi">
    <div class="wrap">
      <div class="sec-head rv">
        <p class="eyebrow">${w.eyebrow}</p>
        <h2>${w.title}</h2>
        <p class="lead">${w.lead}</p>
      </div>
      <div class="grid g-3 rv">
        ${w.items.map(([i, t, d]) => `<article class="card${dark ? ' card-dark' : ''}">
          <span class="ico"><i class="fas fa-${i}" aria-hidden="true"></i></span>
          <h3>${t}</h3><p>${d}</p>
        </article>`).join('\n        ')}
      </div>
    </div>
  </section>`;
}

/* ---------- Contact / devis ---------- */
export function contactSection(L, { title, intro, subject } = {}) {
  const c = L.contactSec;
  return `<section class="sec-dark" id="devis">
    <div class="wrap">
      <div class="quote">
        <div class="quote-aside rv">
          <p class="eyebrow">${c.eyebrow}</p>
          <h2>${title || c.title}</h2>
          <p class="lead" style="color:var(--on-dark-2)">${intro || c.intro}</p>
          <ul class="checks" style="margin-top:24px">
            ${c.checks.map((x) => `<li><i class="fas fa-check" aria-hidden="true"></i> ${x}</li>`).join('\n            ')}
          </ul>
          <div class="quote-mail">
            <i class="fas fa-envelope" aria-hidden="true"></i>
            <div><span>${c.mailLabel}</span><a href="mailto:${SITE.email}">${SITE.email}</a></div>
          </div>
        </div>
        <div class="rv">
          ${quoteForm(L, { subject })}
        </div>
      </div>
    </div>
  </section>`;
}

/* ---------- Grille de cartes générique ---------- */
export function cardGrid(L, { eyebrow, title, lead = '', items, dark = true, cols = 'g-3' }) {
  return `<section class="${dark ? 'sec-ink2' : ''}">
    <div class="wrap">
      <div class="sec-head rv"><p class="eyebrow">${eyebrow}</p><h2>${title}</h2>
      ${lead ? `<p class="lead">${lead}</p>` : ''}</div>
      <div class="grid ${cols} rv">
        ${items.map(([i, t, d]) => `<article class="card${dark ? ' card-dark' : ''}"><span class="ico"><i class="fas fa-${i}" aria-hidden="true"></i></span><h3>${t}</h3><p>${d}</p></article>`).join('\n        ')}
      </div>
    </div>
  </section>`;
}
