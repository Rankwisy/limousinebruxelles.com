/** Sections réutilisées par plusieurs pages. */
import { photo, quoteForm, SITE } from './layout.mjs';

/* ---------- Hero ---------- */
export function hero({ eyebrow, h1, sub, primary = ['contact.html', 'Demander un devis'], secondary = ['notre-flotte.html', 'Découvrir notre flotte'], img = 'hero', alt, stats, crumbs = '', small = false }) {
  return `<section class="hero${small ? ' hero-sm' : ''}">
    <div class="hero-media">${photo(img, alt, { w: 2000, eager: true, sizes: '100vw' })}</div>
    <div class="wrap">
      <div class="hero-inner">
        ${crumbs}
        <p class="eyebrow">${eyebrow}</p>
        <h1>${h1}</h1>
        <p class="hero-sub">${sub}</p>
        <div class="btn-row">
          <a href="${primary[0]}" class="btn btn-gold btn-lg">${primary[1]} <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
          <a href="${secondary[0]}" class="btn btn-ghost btn-lg">${secondary[1]}</a>
        </div>
        ${stats ? `<div class="hero-stats">${stats.map(([n, l]) => `<div class="hero-stat"><b>${n}</b><span>${l}</span></div>`).join('')}</div>` : ''}
      </div>
    </div>
  </section>`;
}

/* ---------- Bus ou limousine ? ---------- */
export const CHOICE_ROWS = [
  ['Limousine / berline de prestige', '1 à 3 passagers', 'Transferts VIP, affaires, soirées de gala', 'Mercedes Classe S'],
  ['Voiture avec chauffeur', '1 à 4 passagers', 'Déplacements privés, mise à disposition à l’heure', 'Berline haut de gamme'],
  ['Minivan de luxe', 'Jusqu’à 7 passagers', 'Familles, aéroports, petits groupes avec bagages', 'Mercedes Classe V'],
  ['Minibus', 'Jusqu’à 8 places', 'Groupes réduits, séminaires, navettes', 'Minibus premium'],
  ['Autocar / Bus VIP', 'Environ 50 places', 'Excursions, congrès, mariages, transports d’entreprise', 'Autocar grand tourisme'],
];

export function choiceSection() {
  return `<section class="sec-ink2" id="bus-ou-limousine">
    <div class="wrap">
      <div class="sec-head rv">
        <p class="eyebrow">La question que tout le monde nous pose</p>
        <h2>S’agit-il d’un bus ou d’une limousine&nbsp;?</h2>
        <p class="lead">Les deux — et bien plus encore. Belgium Limousine Services n’est pas limité à un seul type de véhicule&nbsp;: nous proposons <strong>plusieurs solutions selon le nombre de passagers et le type de trajet</strong>. Limousine, voiture avec chauffeur, minivan, minibus et autocar. Vous nous décrivez votre déplacement, nous vous conseillons le véhicule le plus adapté.</p>
      </div>
      <div class="tbl-scroll rv">
        <table class="cmp">
          <caption class="hp">Comparatif des véhicules avec chauffeur proposés par Belgium Limousine Services</caption>
          <thead>
            <tr><th scope="col">Solution</th><th scope="col">Capacité</th><th scope="col">Idéal pour</th><th scope="col">Véhicule type</th></tr>
          </thead>
          <tbody>
            ${CHOICE_ROWS.map(([a, b, c, d]) => `<tr><th scope="row">${a}</th><td>${b}</td><td>${c}</td><td>${d}</td></tr>`).join('\n            ')}
          </tbody>
        </table>
      </div>
      <div class="btn-row rv" style="margin-top:32px">
        <a href="notre-flotte.html" class="btn btn-gold">Voir tous les véhicules</a>
        <a href="contact.html" class="btn btn-ghost">Je ne sais pas — conseillez-moi</a>
      </div>
    </div>
  </section>`;
}

/* ---------- Services ---------- */
export const SERVICES = [
  ['chauffeur-prive-bruxelles.html', 'user-tie', 'Chauffeur privé', 'Un chauffeur professionnel à votre disposition, à l’heure, à la demi-journée ou à la journée complète, à Bruxelles comme partout en Belgique.'],
  ['limousine-avec-chauffeur-bruxelles.html', 'car-side', 'Limousine avec chauffeur', 'Berlines et limousines de prestige pour vos déplacements d’affaires, réceptions et occasions qui méritent une arrivée remarquée.'],
  ['transfert-aeroport-bruxelles.html', 'plane-departure', 'Transferts aéroport', 'Zaventem, Charleroi, Liège, Anvers, Lille ou Amsterdam : accueil personnalisé, suivi des vols et prise en charge des bagages.'],
  ['transport-mariage-bruxelles.html', 'ring', 'Transport de mariage', 'Véhicule des mariés, navettes pour les invités : un transport élégant et ponctuel du début à la fin de la journée.'],
  ['transport-vip-bruxelles.html', 'star', 'Transport VIP', 'Discrétion, confidentialité et ponctualité absolues pour vos personnalités, délégations et clients de haut rang.'],
  ['location-minibus-bruxelles.html', 'van-shuttle', 'Minibus pour groupes', 'Jusqu’à 8 places pour vos équipes, familles et petits groupes, avec un vrai espace pour les bagages.'],
  ['location-autocar-belgique.html', 'bus', 'Autocars et Bus VIP', 'Environ 50 places pour les grands groupes : excursions, congrès, transferts d’entreprise et déplacements longue distance.'],
  ['transport-evenement-bruxelles.html', 'calendar-check', 'Transport pour événements', 'Séminaires, congrès, incentives, concerts, événements sportifs : une logistique de transport coordonnée de bout en bout.'],
];

export function servicesSection({ dark = false, title = 'Nos services de transport avec chauffeur', intro = '' } = {}) {
  return `<section class="${dark ? 'sec-dark' : ''}" id="services">
    <div class="wrap">
      <div class="sec-head rv">
        <p class="eyebrow">Nos services</p>
        <h2>${title}</h2>
        ${intro ? `<p class="lead">${intro}</p>` : ''}
      </div>
      <div class="grid g-4 rv">
        ${SERVICES.map(([href, icon, name, desc]) => `<article class="card${dark ? ' card-dark' : ''}">
          <span class="ico"><i class="fas fa-${icon}" aria-hidden="true"></i></span>
          <h3>${name}</h3>
          <p>${desc}</p>
          <a class="link-arrow" href="${href}">En savoir plus <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
        </article>`).join('\n        ')}
      </div>
    </div>
  </section>`;
}

/* ---------- Flotte ---------- */
export const FLEET = [
  {
    href: 'mercedes-classe-v-avec-chauffeur.html',
    img: 'classeV',
    alt: 'Mercedes Classe V noire avec chauffeur, minivan de luxe à Bruxelles',
    badge: 'Jusqu’à 7 passagers',
    kicker: 'Nos minivans de luxe',
    title: 'Mercedes Classe V — pour votre confort',
    text: 'Le minivan de référence pour voyager à plusieurs sans rien céder sur le raffinement. Sièges individuels, grand espace pour les jambes, intérieur haut de gamme et un coffre réellement dimensionné pour les bagages. C’est notre véhicule le plus demandé pour les transferts privés, les navettes aéroport et les petits groupes.',
    specs: ['Jusqu’à 7 passagers', 'Grand confort de voyage', 'Intérieur haut de gamme', 'Large espace bagages', 'Climatisation individuelle', 'Idéal aéroport et affaires'],
  },
  {
    href: 'mercedes-classe-s-avec-chauffeur.html',
    img: 'hero',
    alt: 'Mercedes Classe S noire, berline de prestige avec chauffeur privé à Bruxelles',
    badge: '1 à 3 passagers',
    kicker: 'Nos véhicules haut de gamme',
    title: 'Mercedes Classe S — l’élégance absolue',
    text: 'La berline de référence du transport de prestige. Silence de roulement, sièges en cuir, suspension pilotée et finitions d’exception : la Classe S transforme un simple trajet en un moment de calme. Conduite par un chauffeur en tenue, elle est le choix naturel pour vos rendez-vous d’affaires, vos soirées de gala et vos clients les plus exigeants.',
    specs: ['1 à 3 passagers', 'Confort et élégance', 'Sièges cuir premium', 'Chauffeur en tenue', 'Discrétion totale', 'Idéal affaires et VIP'],
  },
  {
    href: 'location-minibus-bruxelles.html',
    img: 'minibus',
    alt: 'Minibus blanc avec chauffeur pour le transport de groupes en Belgique',
    badge: 'Jusqu’à 8 places',
    kicker: 'Minibus',
    title: 'Minibus — les groupes réduits, sans compromis',
    text: 'Le bon équilibre entre la souplesse d’une voiture et la capacité d’un autocar. Notre minibus accueille jusqu’à 8 places assises avec un compartiment à bagages généreux : parfait pour une équipe en séminaire, une famille élargie ou une navette régulière entre un hôtel et un site d’événement.',
    specs: ['Jusqu’à 8 places assises', 'Transport professionnel', 'Coffre spacieux', 'Accès aisé au centre-ville', 'Navettes et mises à disposition', 'Chauffeur dédié'],
  },
  {
    href: 'location-autocar-belgique.html',
    img: 'autocar',
    alt: 'Autocar de grand tourisme pour le transport de groupes en Belgique',
    badge: 'Environ 50 places',
    kicker: 'Autocar / Bus VIP',
    title: 'Autocar & Bus VIP — les grands groupes',
    text: 'Pour les excursions, les congrès, les événements d’entreprise et les déplacements longue distance, notre autocar d’environ 50 places offre des sièges inclinables, la climatisation et de vastes soutes à bagages. Une solution unique pour transporter tout votre groupe ensemble, à l’heure et en sécurité.',
    specs: ['Environ 50 places', 'Excursions et congrès', 'Grandes soutes à bagages', 'Sièges inclinables', 'Climatisation', 'Toute la Belgique et l’Europe'],
  },
];

export function fleetSection({ dark = true, title = 'Notre flotte de véhicules avec chauffeur', intro = '' } = {}) {
  return `<section class="${dark ? 'sec-dark' : 'sec-bone'}" id="flotte">
    <div class="wrap">
      <div class="sec-head rv">
        <p class="eyebrow">Notre flotte</p>
        <h2>${title}</h2>
        ${intro ? `<p class="lead">${intro}</p>` : ''}
      </div>
      <div class="grid" style="gap:clamp(48px,7vw,92px)">
        ${FLEET.map((v, i) => `<article class="fleet-item${i % 2 ? ' rev' : ''} rv">
          <div class="fleet-media">
            <span class="fleet-badge">${v.badge}</span>
            ${photo(v.img, v.alt, { w: 1000, sizes: '(min-width: 940px) 50vw, 100vw' })}
          </div>
          <div class="fleet-body">
            <p class="fleet-kicker">${v.kicker}</p>
            <h3>${v.title}</h3>
            <p>${v.text}</p>
            <ul class="fleet-specs">
              ${v.specs.map((s) => `<li><i class="fas fa-check" aria-hidden="true"></i> ${s}</li>`).join('\n              ')}
            </ul>
            <a class="link-arrow" href="${v.href}">Découvrir ce véhicule <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
          </div>
        </article>`).join('\n        ')}
      </div>
    </div>
  </section>`;
}

/* ---------- Chauffeurs ---------- */
export function driversSection({ dark = false, cta = ['nos-chauffeurs.html', 'Découvrir nos chauffeurs'] } = {}) {
  return `<section class="${dark ? 'sec-dark' : ''}" id="chauffeurs">
    <div class="wrap">
      <div class="split rv">
        <div class="split-media">
          ${photo('chauffeur', 'Chauffeur privé professionnel en costume ouvrant la portière d’une berline noire à Bruxelles', { w: 1000, sizes: '(min-width: 940px) 50vw, 100vw' })}
          <p class="split-quote">«&nbsp;Un bon chauffeur ne se remarque pas. Il se ressent.&nbsp;»</p>
        </div>
        <div>
          <p class="eyebrow">Nos chauffeurs</p>
          <h2>Chauffeur privé professionnel</h2>
          <p class="lead">Profitez d’un trajet confortable et sécurisé avec nos chauffeurs professionnels. Ils connaissent Bruxelles et la Belgique par cœur&nbsp;: les axes qui se bouchent, les accès des hôtels, les dépose-minute des aéroports et les itinéraires alternatifs les jours de sommet européen.</p>
          <ul class="checks" style="margin-top:22px">
            <li><i class="fas fa-check" aria-hidden="true"></i> <span><strong>Expérience</strong> — des années de conduite professionnelle en transport de personnes.</span></li>
            <li><i class="fas fa-check" aria-hidden="true"></i> <span><strong>Ponctualité</strong> — arrivée en avance, suivi des vols, marge prévue pour le trafic.</span></li>
            <li><i class="fas fa-check" aria-hidden="true"></i> <span><strong>Professionnalisme</strong> — tenue soignée, accueil courtois, aide aux bagages.</span></li>
            <li><i class="fas fa-check" aria-hidden="true"></i> <span><strong>Discrétion</strong> — vos conversations et vos déplacements restent les vôtres.</span></li>
            <li><i class="fas fa-check" aria-hidden="true"></i> <span><strong>Sécurité</strong> — conduite souple, véhicules contrôlés, respect strict du code de la route.</span></li>
            <li><i class="fas fa-check" aria-hidden="true"></i> <span><strong>Connaissance du terrain</strong> — Bruxelles, la Flandre, la Wallonie et les pays limitrophes.</span></li>
          </ul>
          <div class="btn-row" style="margin-top:30px">
            <a href="${cta[0]}" class="btn ${dark ? 'btn-gold' : 'btn-outline'}">${cta[1]}</a>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

/* ---------- Tarifs ---------- */
export function pricingSection({ dark = false } = {}) {
  const cards = [
    { name: 'Limousine & voiture avec chauffeur', cap: '1 à 7 passagers', amt: 'Sur devis', per: 'Selon le trajet et la durée', feat: false,
      list: ['Mercedes Classe S ou Classe V', 'Transferts, mises à disposition, VIP', 'Chauffeur professionnel inclus', 'Accueil personnalisé'] },
    { name: 'Minibus', cap: 'Jusqu’à 8 places', amt: '≈ 350 €', per: 'par jour — montant indicatif', feat: true,
      list: ['Chauffeur professionnel inclus', 'Bagages et équipements', 'Idéal séminaires et navettes', 'Bruxelles et toute la Belgique'] },
    { name: 'Autocar / Bus VIP', cap: 'Environ 50 places', amt: '≈ 600 €', per: 'par jour — montant indicatif', feat: false,
      list: ['Chauffeur professionnel inclus', 'Grandes soutes à bagages', 'Excursions et congrès', 'Longue distance possible'] },
  ];
  return `<section class="${dark ? 'sec-dark' : 'sec-bone'}" id="tarifs">
    <div class="wrap">
      <div class="sec-head center rv">
        <p class="eyebrow">Tarifs indicatifs</p>
        <h2>Des prix clairs, un devis sur mesure</h2>
        <p class="lead">Les montants ci-dessous sont <strong>indicatifs</strong> et dépendent de votre trajet. Le prix final varie selon la durée, le nombre de passagers, la distance et le trajet exact.</p>
      </div>
      <div class="price-grid rv">
        ${cards.map((c) => `<article class="price${c.feat ? ' feat' : ''}">
          ${c.feat ? '<span class="price-tag">Le plus demandé</span>' : ''}
          <h3>${c.name}</h3>
          <p class="price-cap">${c.cap}</p>
          <p class="price-amt">${c.amt}</p>
          <p class="price-per">${c.per}</p>
          <ul class="checks">${c.list.map((l) => `<li><i class="fas fa-check" aria-hidden="true"></i> ${l}</li>`).join('')}</ul>
          <a href="contact.html" class="btn ${c.feat ? 'btn-gold' : 'btn-outline'} btn-block">Demander un devis</a>
        </article>`).join('\n        ')}
      </div>
      <p class="price-note rv"><strong>Bon à savoir&nbsp;:</strong> chaque déplacement est unique. Le devis est établi selon la durée de la mise à disposition, le nombre de passagers, le kilométrage et le trajet exact — aller simple, aller-retour ou journée complète. Aucune surprise&nbsp;: le montant annoncé est le montant facturé.</p>
      <div class="btn-row center rv" style="margin-top:34px">
        <a href="contact.html" class="btn btn-gold btn-lg">Demander un devis personnalisé <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
      </div>
    </div>
  </section>`;
}

/* ---------- Équipements ---------- */
export const AMENITIES = [
  ['couch', 'Sièges confortables', 'Des assises soignées, souvent en cuir, pensées pour les longs trajets comme pour les transferts courts.'],
  ['wifi', 'Wi-Fi gratuit', 'Restez connecté pour travailler, répondre à vos e-mails ou simplement surfer pendant le trajet.'],
  ['up-right-and-down-left-from-center', 'Grand espace pour les jambes', 'On voyage assis, pas coincé. L’espace aux jambes fait toute la différence sur la route.'],
  ['gem', 'Confort premium', 'Éclairage d’ambiance, insonorisation, suspension souple : le voyage devient un moment agréable.'],
  ['screwdriver-wrench', 'Véhicules modernes et entretenus', 'Une flotte récente, nettoyée avant chaque mission et contrôlée régulièrement.'],
  ['snowflake', 'Climatisation', 'Une température idéale toute l’année, réglable selon vos préférences.'],
];

export function amenitiesSection() {
  return `<section class="sec-ink2" id="equipements">
    <div class="wrap">
      <div class="sec-head rv">
        <p class="eyebrow">Équipements à bord</p>
        <h2>Tout ce qu’il faut pour voyager sereinement</h2>
        <p class="lead">Nos véhicules sont équipés pour que le trajet compte autant que la destination.</p>
      </div>
      <ul class="amen rv">
        ${AMENITIES.map(([i, t, d]) => `<li><i class="fas fa-${i}" aria-hidden="true"></i><h4>${t}</h4><p>${d}</p></li>`).join('\n        ')}
      </ul>
    </div>
  </section>`;
}

/* ---------- Pourquoi nous choisir ---------- */
export const WHY = [
  ['gem', 'Véhicules haut de gamme', 'Mercedes Classe S, Classe V, minibus et autocars récents, entretenus et impeccables à chaque départ.'],
  ['user-tie', 'Chauffeurs professionnels', 'Des chauffeurs expérimentés, ponctuels et discrets, qui connaissent Bruxelles et la Belgique.'],
  ['shield-halved', 'Confort et sécurité', 'Conduite souple, véhicules contrôlés, respect strict des règles : vous arrivez détendu et à l’heure.'],
  ['map-location-dot', 'Partout en Belgique', 'Bruxelles, Anvers, Gand, Bruges, Liège, Namur, Charleroi — et les pays voisins sur demande.'],
  ['briefcase', 'Particuliers et entreprises', 'Du transfert privé au contrat de navettes d’entreprise, avec facturation claire.'],
  ['users', 'Petits et grands groupes', 'De 1 passager en Classe S à une cinquantaine de personnes en autocar, dans un seul véhicule.'],
];

export function whySection({ dark = false } = {}) {
  return `<section class="${dark ? 'sec-dark' : ''}" id="pourquoi">
    <div class="wrap">
      <div class="sec-head rv">
        <p class="eyebrow">Pourquoi nous choisir</p>
        <h2>Pourquoi choisir Belgium Limousine Services&nbsp;?</h2>
        <p class="lead">Les chauffeurs expérimentés de Belgium Limousine Services vous conduisent où vous le souhaitez en limousine, minibus ou autocar VIP&nbsp;: aéroport, mariage, événement professionnel, transfert privé et transport de groupe.</p>
      </div>
      <div class="grid g-3 rv">
        ${WHY.map(([i, t, d]) => `<article class="card${dark ? ' card-dark' : ''}">
          <span class="ico"><i class="fas fa-${i}" aria-hidden="true"></i></span>
          <h3>${t}</h3><p>${d}</p>
        </article>`).join('\n        ')}
      </div>
    </div>
  </section>`;
}

/* ---------- Contact / devis ---------- */
export function contactSection({ title = 'Demandez votre devis personnalisé', intro = 'Décrivez-nous votre déplacement : nous vous répondons avec une proposition claire et le véhicule le plus adapté à votre groupe.', subject } = {}) {
  return `<section class="sec-dark" id="devis">
    <div class="wrap">
      <div class="quote">
        <div class="quote-aside rv">
          <p class="eyebrow">Contact</p>
          <h2>${title}</h2>
          <p class="lead" style="color:var(--on-dark-2)">${intro}</p>
          <ul class="checks" style="margin-top:24px">
            <li><i class="fas fa-check" aria-hidden="true"></i> Réponse sous 24 h ouvrées</li>
            <li><i class="fas fa-check" aria-hidden="true"></i> Devis gratuit et sans engagement</li>
            <li><i class="fas fa-check" aria-hidden="true"></i> Conseil sur le véhicule le plus adapté</li>
            <li><i class="fas fa-check" aria-hidden="true"></i> Service pour particuliers et entreprises</li>
          </ul>
          <div class="quote-mail">
            <i class="fas fa-envelope" aria-hidden="true"></i>
            <div><span>Écrivez-nous directement</span><a href="mailto:${SITE.email}">${SITE.email}</a></div>
          </div>
        </div>
        <div class="rv">
          ${quoteForm({ subject })}
        </div>
      </div>
    </div>
  </section>`;
}
