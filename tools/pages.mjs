/** Définition de toutes les pages du site. */
import { SITE, photo, photoUrl, layout, ctaBand, trustBar, faqSection, faqSchema, breadcrumb, breadcrumbSchema, relatedTags } from './layout.mjs';
import { hero, choiceSection, servicesSection, fleetSection, driversSection, pricingSection, amenitiesSection, whySection, contactSection, SERVICES, FLEET, CHOICE_ROWS, AMENITIES } from './blocks.mjs';

const HOME_FAQ = [
  ['S’agit-il d’un bus ou d’une limousine&nbsp;?', 'Les deux. Belgium Limousine Services propose plusieurs solutions selon le nombre de passagers et le type de trajet&nbsp;: limousine, voiture avec chauffeur, minivan Mercedes Classe V, minibus jusqu’à 8 places et autocar d’environ 50 places. Décrivez-nous votre déplacement et nous vous conseillons le véhicule le plus adapté.'],
  ['Combien coûte la location d’un véhicule avec chauffeur à Bruxelles&nbsp;?', 'À titre indicatif&nbsp;: un minibus de 8 places revient à environ 350 € par jour et un autocar d’environ 50 places à environ 600 € par jour. Pour les limousines et les voitures avec chauffeur, le tarif dépend du trajet. Le prix final varie selon la durée, le nombre de passagers et le trajet exact&nbsp;: demandez un devis personnalisé.'],
  ['Combien de passagers pouvez-vous transporter&nbsp;?', 'De 1 à environ 50 passagers. La Mercedes Classe S accueille jusqu’à 3 passagers, la Mercedes Classe V jusqu’à 7, le minibus jusqu’à 8 places et l’autocar environ 50 places. Pour les groupes plus importants, nous coordonnons plusieurs véhicules.'],
  ['Intervenez-vous en dehors de Bruxelles&nbsp;?', 'Oui. Nous assurons des trajets dans toute la Belgique — Anvers, Gand, Bruges, Liège, Namur, Charleroi, la côte, les Ardennes — ainsi que vers les pays limitrophes (France, Pays-Bas, Luxembourg, Allemagne) sur demande.'],
  ['Assurez-vous les transferts vers les aéroports&nbsp;?', 'Oui. Nous desservons Bruxelles-Zaventem, Brussels South Charleroi, Liège, Anvers, ainsi que Lille et Amsterdam-Schiphol. Le chauffeur suit votre numéro de vol, vous accueille à l’arrivée et se charge des bagages.'],
  ['Comment réserver et obtenir un devis&nbsp;?', `Remplissez le formulaire de demande de devis ou écrivez-nous à <a href="mailto:${SITE.email}">${SITE.email}</a> en précisant la date, le lieu de départ, la destination, le nombre de passagers et le type de véhicule souhaité. Vous recevez une proposition claire sous 24 h ouvrées.`],
  ['Vos véhicules disposent-ils du Wi-Fi et de la climatisation&nbsp;?', 'Oui. Nos véhicules sont modernes et entretenus&nbsp;: sièges confortables et souvent en cuir, Wi-Fi gratuit, grand espace pour les jambes, climatisation et confort premium à bord.'],
  ['Proposez-vous un service pour les entreprises&nbsp;?', 'Oui. Navettes de collaborateurs, transferts de délégations, séminaires, congrès et incentives&nbsp;: nous travaillons aussi bien avec les particuliers qu’avec les entreprises et les agences événementielles, avec une facturation claire.'],
];

/* ---------- Accueil ---------- */
function homePage() {
  const body = `${hero({
    eyebrow: 'Bruxelles · Belgique · Depuis 2009',
    h1: 'Location de <em>Limousines</em>, Minibus et Autocars avec Chauffeur à Bruxelles',
    sub: 'Voyagez avec élégance, confort et sécurité partout en Belgique.',
    alt: 'Mercedes Classe S noire avec chauffeur stationnée dans une rue pavée de Bruxelles',
    stats: [['1–50', 'Passagers'], ['7j/7', 'Disponibilité'], ['24 h', 'Réponse au devis'], ['100 %', 'Chauffeurs pros']],
  })}

  ${trustBar()}

  <section>
    <div class="wrap">
      <div class="split rv">
        <div>
          <p class="eyebrow">Belgium Limousine Services</p>
          <h2>Un chauffeur, un véhicule, une exigence&nbsp;: la vôtre</h2>
          <p class="lead">Les chauffeurs expérimentés de Belgium Limousine Services vous conduisent où vous le souhaitez en limousine, minibus ou autocar VIP&nbsp;: aéroport, mariage, événement professionnel, transfert privé et transport de groupe.</p>
          <p>Basés à Bruxelles, nous mettons à votre disposition des véhicules haut de gamme et des chauffeurs professionnels pour tous vos déplacements en Belgique. Que vous soyez seul pour un rendez-vous d’affaires, en famille pour un vol matinal ou cinquante pour un congrès, nous avons le véhicule qu’il faut — et la personne qu’il faut au volant.</p>
          <div class="btn-row" style="margin-top:26px">
            <a href="nos-services.html" class="btn btn-outline">Nos services</a>
            <a href="contact.html" class="btn btn-dark">Demander un devis</a>
          </div>
        </div>
        <div class="split-media">
          ${photo('cuir', 'Intérieur en cuir clair d’une berline de luxe avec chauffeur', { w: 1000, sizes: '(min-width: 940px) 50vw, 100vw' })}
        </div>
      </div>
    </div>
  </section>

  ${choiceSection()}
  ${servicesSection({ intro: 'Du transfert individuel au transport de groupe, une réponse pour chaque déplacement à Bruxelles et en Belgique.' })}
  ${fleetSection({ intro: 'Quatre familles de véhicules, un même niveau d’exigence : propreté irréprochable, confort réel et chauffeur professionnel.' })}
  ${driversSection()}
  ${pricingSection()}
  ${amenitiesSection()}
  ${whySection()}

  <section class="sec-bone">
    <div class="wrap">
      <div class="split rev rv">
        <div class="split-media">
          ${photo('bruxelles', 'Grand-Place de Bruxelles, point de départ des transferts avec chauffeur', { w: 1000, sizes: '(min-width: 940px) 50vw, 100vw' })}
        </div>
        <div>
          <p class="eyebrow">Zone desservie</p>
          <h2>Bruxelles, et bien au-delà</h2>
          <p class="lead">Notre base est bruxelloise, notre terrain est belge. Nous connaissons les accès du quartier européen, les hôtels du centre, les parcs d’expositions et les zones de dépose des aéroports.</p>
          <ul class="checks" style="margin-top:18px">
            <li><i class="fas fa-check" aria-hidden="true"></i> Bruxelles-Capitale et ses 19 communes</li>
            <li><i class="fas fa-check" aria-hidden="true"></i> Anvers, Gand, Bruges, Louvain, Malines</li>
            <li><i class="fas fa-check" aria-hidden="true"></i> Liège, Namur, Charleroi, Mons, les Ardennes</li>
            <li><i class="fas fa-check" aria-hidden="true"></i> Aéroports&nbsp;: Zaventem, Charleroi, Liège, Anvers, Lille, Schiphol</li>
            <li><i class="fas fa-check" aria-hidden="true"></i> France, Pays-Bas, Luxembourg et Allemagne sur demande</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  ${faqSection(HOME_FAQ, { dark: true })}
  ${contactSection({})}
  ${ctaBand('Prêt à réserver votre véhicule avec chauffeur&nbsp;?', 'Dites-nous votre date, votre trajet et le nombre de passagers. Nous nous occupons du reste.')}`;

  return layout({
    slug: 'index.html',
    title: 'Location Limousine Bruxelles | Minibus et Autocar Chauffeur',
    description: 'Limousines, minibus et autocars avec chauffeur à Bruxelles. Mercedes Classe S et Classe V, transferts aéroport, mariages et transport VIP. Devis gratuit.',
    keywords: 'location limousine Bruxelles, limousine avec chauffeur Bruxelles, chauffeur privé Bruxelles, location minibus Bruxelles, location autocar Belgique, bus VIP Belgique, transport mariage Bruxelles, transfert aéroport Bruxelles',
    schema: [faqSchema(HOME_FAQ), {
      '@type': 'WebSite',
      '@id': `${SITE.domain}/#website`,
      url: `${SITE.domain}/`,
      name: SITE.name,
      inLanguage: 'fr-BE',
      publisher: { '@id': `${SITE.domain}/#organisation` },
    }],
    body,
  });
}

/* ---------- Gabarit des pages de service / véhicule ---------- */
function landing({ slug, title, description, keywords, eyebrow, h1, sub, img, alt, lead, intro, sections = '', checksTitle, checks, faq, related, crumbTrail, serviceName, priceNote }) {
  const trail = crumbTrail || [['index.html', 'Accueil'], [slug, h1.replace(/<[^>]+>/g, '')]];
  const body = `${hero({
    eyebrow, h1, sub, img, alt, small: true,
    crumbs: breadcrumb(trail),
    secondary: ['tarifs.html', 'Voir les tarifs'],
  })}

  ${trustBar()}

  <section>
    <div class="wrap">
      <div class="split rv">
        <div>
          <p class="eyebrow">${eyebrow}</p>
          <h2>${lead.title}</h2>
          ${lead.body.map((p) => `<p${p === lead.body[0] ? ' class="lead"' : ''}>${p}</p>`).join('\n          ')}
          <div class="btn-row" style="margin-top:26px">
            <a href="contact.html" class="btn btn-dark">Demander un devis</a>
            <a href="mailto:${SITE.email}" class="btn btn-outline"><i class="fas fa-envelope" aria-hidden="true"></i> Nous écrire</a>
          </div>
        </div>
        <div class="split-media">
          ${photo(lead.img || img, lead.imgAlt || alt, { w: 1000, sizes: '(min-width: 940px) 50vw, 100vw' })}
        </div>
      </div>
    </div>
  </section>

  <section class="sec-ink2">
    <div class="wrap">
      <div class="sec-head rv"><p class="eyebrow">Ce qui est compris</p><h2>${checksTitle}</h2></div>
      <div class="grid g-3 rv">
        ${checks.map(([i, t, d]) => `<article class="card card-dark">
          <span class="ico"><i class="fas fa-${i}" aria-hidden="true"></i></span>
          <h3>${t}</h3><p>${d}</p>
        </article>`).join('\n        ')}
      </div>
      ${priceNote ? `<p class="price-note rv" style="margin-top:34px">${priceNote}</p>` : ''}
    </div>
  </section>

  ${intro || ''}
  ${sections}
  ${faqSection(faq, { dark: false })}
  ${contactSection({ title: `Votre devis pour&nbsp;: ${serviceName}`, subject: `Demande de devis — ${serviceName}` })}
  ${relatedTags('Autres prestations qui pourraient vous intéresser', related)}
  ${ctaBand('Un déplacement à organiser&nbsp;?', 'Envoyez-nous votre demande&nbsp;: nous vous proposons le véhicule adapté et un tarif clair.')}`;

  return layout({
    slug, title, description, keywords, body,
    schema: [faqSchema(faq), breadcrumbSchema(trail), {
      '@type': 'Service',
      name: serviceName,
      serviceType: serviceName,
      description,
      provider: { '@id': `${SITE.domain}/#organisation` },
      areaServed: [{ '@type': 'City', name: 'Bruxelles' }, { '@type': 'Country', name: 'Belgique' }],
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: `${SITE.domain}/${slug}`,
        servicePhone: undefined,
      },
    }],
  });
}

const ALL_LINKS = [
  ['chauffeur-prive-bruxelles.html', 'Chauffeur privé Bruxelles'],
  ['limousine-avec-chauffeur-bruxelles.html', 'Limousine avec chauffeur Bruxelles'],
  ['transfert-aeroport-bruxelles.html', 'Transfert aéroport Bruxelles'],
  ['transport-mariage-bruxelles.html', 'Transport mariage Bruxelles'],
  ['transport-vip-bruxelles.html', 'Transport VIP'],
  ['transport-evenement-bruxelles.html', 'Transport pour événements'],
  ['location-minibus-bruxelles.html', 'Location minibus Bruxelles'],
  ['location-autocar-belgique.html', 'Location autocar Belgique'],
  ['mercedes-classe-v-avec-chauffeur.html', 'Mercedes Classe V avec chauffeur'],
  ['mercedes-classe-s-avec-chauffeur.html', 'Mercedes Classe S avec chauffeur'],
  ['tarifs.html', 'Tarifs indicatifs'],
  ['nos-chauffeurs.html', 'Nos chauffeurs'],
];
const related = (exclude) => ALL_LINKS.filter(([h]) => h !== exclude);

/* ---------- Pages de service ---------- */
const LANDINGS = [
  {
    slug: 'chauffeur-prive-bruxelles.html',
    title: 'Chauffeur Privé Bruxelles | Voiture avec Chauffeur',
    description: 'Chauffeur privé professionnel à Bruxelles : mise à disposition à l’heure ou à la journée, véhicules haut de gamme, ponctualité et discrétion.',
    keywords: 'chauffeur privé Bruxelles, voiture avec chauffeur Bruxelles, chauffeur professionnel Belgique',
    eyebrow: 'Chauffeur privé',
    h1: 'Chauffeur privé à Bruxelles',
    sub: 'Un chauffeur professionnel à votre disposition, pour une course, une demi-journée ou une journée complète.',
    img: 'chauffeur', alt: 'Chauffeur privé professionnel en costume à côté d’une berline noire à Bruxelles',
    serviceName: 'Chauffeur privé à Bruxelles',
    lead: {
      title: 'Votre temps vaut mieux qu’un volant',
      img: 'classeS', imgAlt: 'Berline Mercedes noire de prestige avec chauffeur privé à Bruxelles',
      body: [
        'Profitez d’un trajet confortable et sécurisé avec nos chauffeurs professionnels. Vous montez, vous travaillez, vous vous reposez — quelqu’un d’autre s’occupe du trafic, du stationnement et de l’itinéraire.',
        'La mise à disposition avec chauffeur est la formule la plus souple que nous proposons. Le véhicule et le chauffeur restent avec vous pendant toute la durée convenue&nbsp;: vous enchaînez vos rendez-vous, vos visites de chantier ou vos courses sans jamais chercher une place de parking dans le centre de Bruxelles.',
        'Nos chauffeurs connaissent la ville et la Belgique&nbsp;: les axes saturés aux heures de pointe, les accès réservés des hôtels, les zones de dépose des aéroports et les itinéraires alternatifs les jours de sommet européen ou de manifestation.',
      ],
    },
    checksTitle: 'Un service pensé pour les exigeants',
    checks: [
      ['clock', 'À l’heure ou à la journée', 'Mise à disposition d’une heure, d’une demi-journée ou d’une journée complète, selon votre programme.'],
      ['user-tie', 'Chauffeur en tenue', 'Accueil courtois, tenue soignée, aide aux bagages et ouverture de portière si vous le souhaitez.'],
      ['user-secret', 'Discrétion totale', 'Vos conversations, vos rendez-vous et vos déplacements restent strictement confidentiels.'],
      ['route', 'Itinéraires maîtrisés', 'Connaissance fine de Bruxelles et des grands axes belges, avec anticipation du trafic.'],
      ['gem', 'Véhicules haut de gamme', 'Mercedes Classe S ou Classe V selon le nombre de passagers, toujours impeccables.'],
      ['building', 'Particuliers et entreprises', 'Missions ponctuelles ou récurrentes, avec facturation claire pour les sociétés.'],
    ],
    faq: [
      ['Puis-je réserver un chauffeur privé pour plusieurs heures&nbsp;?', 'Oui. La mise à disposition est disponible à l’heure, à la demi-journée ou à la journée complète. Le chauffeur et le véhicule restent avec vous pendant toute la durée convenue.'],
      ['Quel véhicule sera mis à disposition&nbsp;?', 'Une Mercedes Classe S pour 1 à 3 passagers, une Mercedes Classe V pour un groupe allant jusqu’à 7 personnes. Pour davantage de passagers, nous proposons un minibus ou un autocar.'],
      ['Le chauffeur peut-il m’accompagner en dehors de Bruxelles&nbsp;?', 'Bien sûr. Nous couvrons toute la Belgique et les pays limitrophes sur demande. Précisez simplement votre trajet dans la demande de devis.'],
      ['Comment obtenir un tarif&nbsp;?', `Le tarif dépend de la durée, du trajet et du véhicule. Envoyez-nous votre demande via le formulaire ou par e-mail à <a href="mailto:${SITE.email}">${SITE.email}</a>&nbsp;: vous recevez un devis sous 24 h ouvrées.`],
    ],
  },
  {
    slug: 'limousine-avec-chauffeur-bruxelles.html',
    title: 'Limousine avec Chauffeur Bruxelles | Location de Prestige',
    description: 'Location de limousine avec chauffeur à Bruxelles : Mercedes Classe S et berlines de prestige pour affaires, galas et occasions spéciales.',
    keywords: 'location limousine Bruxelles, limousine avec chauffeur Bruxelles, limousine de prestige Belgique',
    eyebrow: 'Limousine avec chauffeur',
    h1: 'Limousine avec chauffeur à Bruxelles',
    sub: 'L’élégance d’une berline de prestige, la sérénité d’un chauffeur professionnel.',
    img: 'hero', alt: 'Limousine Mercedes noire avec chauffeur devant un immeuble de prestige à Bruxelles',
    serviceName: 'Location de limousine avec chauffeur à Bruxelles',
    lead: {
      title: 'Arriver compte autant que partir',
      img: 'classeS', imgAlt: 'Calandre d’une limousine Mercedes noire de nuit',
      body: [
        'Une limousine ne se choisit pas seulement pour se déplacer&nbsp;: elle se choisit pour l’impression qu’elle laisse. Nos berlines de prestige, conduites par un chauffeur en tenue, sont pensées pour les moments qui comptent.',
        'Rendez-vous d’affaires, dîner de gala, réception d’ambassade, anniversaire marquant, arrivée de clients étrangers&nbsp;: le véhicule vous attend à l’heure, le chauffeur ouvre la portière, et le trajet se fait dans un silence feutré.',
        'Pour les groupes, la même exigence s’applique à nos minivans Mercedes Classe V, à nos minibus et à nos autocars VIP. Le niveau de service ne dépend pas du nombre de sièges.',
      ],
    },
    checksTitle: 'Le service limousine, dans le détail',
    checks: [
      ['car-side', 'Berlines de prestige', 'Mercedes Classe S et véhicules haut de gamme, intérieur cuir, finitions soignées.'],
      ['champagne-glasses', 'Occasions spéciales', 'Galas, réceptions, anniversaires, demandes en mariage, soirées d’exception.'],
      ['briefcase', 'Déplacements d’affaires', 'Rendez-vous, roadshows, accueil de clients et de partenaires internationaux.'],
      ['user-secret', 'Confidentialité', 'Vitres teintées selon les véhicules, chauffeur discret, aucune information partagée.'],
      ['clock', 'Ponctualité garantie', 'Le chauffeur arrive en avance. Toujours.'],
      ['map-location-dot', 'Bruxelles et Belgique', 'Trajets urbains, interurbains et transfrontaliers sur demande.'],
    ],
    faq: [
      ['Quelle est la différence entre une limousine et une voiture avec chauffeur&nbsp;?', 'Dans les faits, la prestation est proche&nbsp;: un véhicule haut de gamme conduit par un chauffeur professionnel. Le terme « limousine » désigne chez nous les berlines de prestige type Mercedes Classe S, choisies pour les occasions où l’image compte particulièrement.'],
      ['Combien de personnes peuvent monter dans la limousine&nbsp;?', 'Jusqu’à 3 passagers en Mercedes Classe S. Au-delà, nous vous orientons vers la Mercedes Classe V (jusqu’à 7 passagers), le minibus (jusqu’à 8 places) ou l’autocar (environ 50 places).'],
      ['Peut-on louer une limousine pour quelques heures seulement&nbsp;?', 'Oui. Nous proposons aussi bien le transfert simple d’un point A à un point B que la mise à disposition à l’heure, à la demi-journée ou à la journée.'],
      ['Quel est le tarif d’une limousine avec chauffeur&nbsp;?', 'Le tarif est établi sur devis, en fonction de la durée, du trajet et du nombre de passagers. Décrivez-nous votre déplacement pour recevoir une proposition précise.'],
    ],
  },
  {
    slug: 'transfert-aeroport-bruxelles.html',
    title: 'Transfert Aéroport Bruxelles | Navette Zaventem, Charleroi',
    description: 'Transfert aéroport avec chauffeur à Bruxelles : Zaventem, Charleroi, Liège, Anvers, Schiphol. Accueil personnalisé, suivi des vols, bagages.',
    keywords: 'transfert aéroport Bruxelles, navette Zaventem, taxi aéroport Charleroi, transfert aéroport avec chauffeur Belgique',
    eyebrow: 'Transferts aéroport',
    h1: 'Transfert aéroport à Bruxelles',
    sub: 'Zaventem, Charleroi, Liège, Anvers, Lille ou Schiphol : un chauffeur vous attend, quoi qu’il arrive au vol.',
    img: 'aeroport', alt: 'Terminal d’aéroport, transfert privé avec chauffeur au départ de Bruxelles',
    serviceName: 'Transfert aéroport avec chauffeur à Bruxelles',
    lead: {
      title: 'Le trajet le plus stressant devient le plus simple',
      img: 'classeV', imgAlt: 'Mercedes Classe V noire, minivan de transfert aéroport à Bruxelles',
      body: [
        'Un vol tôt le matin, une correspondance serrée, une famille avec quatre valises&nbsp;: le transfert aéroport est le trajet où la ponctualité n’est pas négociable. C’est exactement pour cela que nos clients nous appellent.',
        'Nous suivons votre numéro de vol. Si l’avion a du retard, le chauffeur adapte son heure d’arrivée&nbsp;: vous ne payez pas d’attente inutile et vous ne cherchez personne à la sortie. À l’arrivée, l’accueil se fait en salle avec une pancarte à votre nom si vous le souhaitez.',
        'Selon la taille de votre groupe, nous mobilisons une Mercedes Classe S, une Mercedes Classe V, un minibus ou un autocar. Les bagages ont toujours leur place — c’est un critère de choix du véhicule, pas un détail.',
      ],
    },
    checksTitle: 'Un transfert aéroport sans mauvaise surprise',
    checks: [
      ['plane-arrival', 'Suivi des vols', 'Nous surveillons votre vol et ajustons l’heure de prise en charge en cas de retard.'],
      ['sign-hanging', 'Accueil en salle d’arrivée', 'Pancarte nominative et accompagnement jusqu’au véhicule, sur demande.'],
      ['suitcase-rolling', 'Bagages pris en charge', 'Le véhicule est choisi selon le nombre de valises, pas seulement de passagers.'],
      ['clock', 'Départs matinaux', 'Prise en charge à toute heure, y compris avant l’aube et le week-end.'],
      ['plane-departure', 'Tous les aéroports', 'Zaventem, Charleroi, Liège, Anvers, Ostende, Lille et Amsterdam-Schiphol.'],
      ['users', 'Groupes complets', 'Une équipe entière ou une famille élargie&nbsp;: un seul véhicule, un seul chauffeur.'],
    ],
    faq: [
      ['Que se passe-t-il si mon vol a du retard&nbsp;?', 'Nous suivons votre numéro de vol et adaptons l’heure d’arrivée du chauffeur en conséquence. Indiquez simplement votre numéro de vol dans la demande de devis.'],
      ['Le chauffeur m’attend-il à l’intérieur du terminal&nbsp;?', 'Oui, sur demande. Le chauffeur peut vous accueillir en salle d’arrivée avec une pancarte à votre nom et vous accompagner jusqu’au véhicule.'],
      ['Desservez-vous Brussels South Charleroi&nbsp;?', 'Oui. Nous assurons les transferts vers et depuis Bruxelles-Zaventem, Brussels South Charleroi, Liège, Anvers, Ostende, ainsi que Lille et Amsterdam-Schiphol.'],
      ['Combien de bagages puis-je emporter&nbsp;?', 'Cela dépend du véhicule. La Mercedes Classe V et le minibus offrent un grand espace bagages. Précisez le nombre de valises dans votre demande&nbsp;: nous choisirons le véhicule adapté.'],
    ],
  },
  {
    slug: 'transport-mariage-bruxelles.html',
    title: 'Transport Mariage Bruxelles | Limousine et Navettes',
    description: 'Transport de mariage à Bruxelles : limousine pour les mariés, minibus et autocars pour les invités. Véhicules élégants et chauffeurs ponctuels.',
    keywords: 'transport mariage Bruxelles, limousine mariage Belgique, navette invités mariage, voiture mariage avec chauffeur',
    eyebrow: 'Mariages',
    h1: 'Transport de mariage à Bruxelles',
    sub: 'Une limousine pour les mariés, des navettes pour les invités, et une journée qui reste à l’heure.',
    img: 'mariage', alt: 'Couple de mariés devant une voiture noire de prestige avec chauffeur',
    serviceName: 'Transport de mariage à Bruxelles',
    lead: {
      title: 'Le seul jour où l’on ne veut aucun imprévu',
      img: 'classeS', imgAlt: 'Berline Mercedes noire de prestige pour un mariage à Bruxelles',
      body: [
        'Le transport est l’un des rares postes d’un mariage qui peut faire dérailler tout le programme. Une navette en retard, et c’est la cérémonie, le photographe et le traiteur qui décalent.',
        'Nous prenons en charge la journée complète&nbsp;: le véhicule des mariés, les navettes entre la mairie, l’église et le lieu de réception, et le retour des invités en fin de soirée. Le tout coordonné avec vos horaires, pas les nôtres.',
        'Pour les mariés, une Mercedes Classe S ou une limousine de prestige. Pour la famille et les témoins, une Mercedes Classe V. Pour les invités, un minibus ou un autocar d’environ 50 places qui évite à chacun de prendre sa voiture.',
      ],
    },
    checksTitle: 'Une journée de mariage transportée de bout en bout',
    checks: [
      ['ring', 'Véhicule des mariés', 'Berline de prestige ou limousine, propre, élégante, avec chauffeur en tenue.'],
      ['bus', 'Navettes pour les invités', 'Minibus ou autocar entre la cérémonie, la réception et les hôtels.'],
      ['clock', 'Coordination des horaires', 'Nous calons les rotations sur votre déroulé de journée, marge de sécurité comprise.'],
      ['moon', 'Retours de fin de soirée', 'Personne ne reprend le volant après la fête&nbsp;: le chauffeur ramène tout le monde.'],
      ['camera', 'Véhicule photogénique', 'Un véhicule impeccable, qui tient sa place sur les photos du jour J.'],
      ['map-location-dot', 'Toute la Belgique', 'Châteaux, domaines, abbayes et lieux de réception partout dans le pays.'],
    ],
    faq: [
      ['Pouvez-vous transporter tous nos invités&nbsp;?', 'Oui. Selon le nombre de personnes, nous mobilisons un minibus (jusqu’à 8 places), un autocar (environ 50 places) ou plusieurs véhicules coordonnés.'],
      ['Le véhicule reste-t-il disponible toute la journée&nbsp;?', 'C’est la formule la plus fréquente pour un mariage&nbsp;: une mise à disposition à la journée, avec plusieurs rotations selon votre programme.'],
      ['Décorez-vous le véhicule&nbsp;?', 'Le véhicule est livré impeccable. Vous pouvez apporter votre propre décoration florale ou vos rubans&nbsp;: nous en discutons lors de la préparation.'],
      ['Combien de temps à l’avance faut-il réserver&nbsp;?', 'Le plus tôt possible, surtout pour les samedis de mai à septembre. Envoyez-nous votre date dès qu’elle est fixée pour bloquer le véhicule.'],
    ],
  },
  {
    slug: 'transport-vip-bruxelles.html',
    title: 'Transport VIP Bruxelles | Chauffeur Privé Discret',
    description: 'Transport VIP à Bruxelles : véhicules haut de gamme et chauffeurs discrets pour personnalités, délégations et clients de haut rang. Devis sur mesure.',
    keywords: 'transport VIP Bruxelles, chauffeur VIP Belgique, transport personnalités Bruxelles, service VIP avec chauffeur',
    eyebrow: 'Transport VIP',
    h1: 'Transport VIP à Bruxelles',
    sub: 'Discrétion, confidentialité et ponctualité absolues, du premier au dernier kilomètre.',
    img: 'nuit', alt: 'Berline noire de prestige la nuit, transport VIP à Bruxelles',
    serviceName: 'Transport VIP à Bruxelles',
    lead: {
      title: 'Le meilleur service est celui qui ne se voit pas',
      img: 'classeS', imgAlt: 'Berline Mercedes noire de nuit pour un transport VIP à Bruxelles',
      body: [
        'Bruxelles accueille en permanence des délégations, des dirigeants, des artistes et des invités dont le déplacement demande davantage qu’une voiture propre&nbsp;: il demande de la fiabilité et du silence.',
        'Nos chauffeurs VIP sont sélectionnés pour leur expérience et leur retenue. Ils anticipent, ils préparent leurs itinéraires, ils connaissent les accès discrets des hôtels et des lieux institutionnels, et ils ne commentent jamais ce qui se passe à bord.',
        'Selon votre besoin, nous mobilisons une berline Mercedes Classe S, une Mercedes Classe V pour une petite délégation, ou plusieurs véhicules coordonnés pour un déplacement de groupe.',
      ],
    },
    checksTitle: 'Ce que recouvre un service VIP',
    checks: [
      ['user-secret', 'Confidentialité stricte', 'Aucune information sur vos trajets, vos horaires ou vos passagers n’est partagée.'],
      ['clock', 'Ponctualité sans faille', 'Repérage préalable des adresses, marge de trafic, arrivée systématiquement en avance.'],
      ['shield-halved', 'Conduite sécurisante', 'Conduite souple et anticipative, véhicules entretenus et contrôlés.'],
      ['route', 'Itinéraires préparés', 'Accès, parkings, entrées de service&nbsp;: le trajet est étudié avant votre arrivée.'],
      ['users', 'Délégations et groupes', 'Un ou plusieurs véhicules coordonnés selon la taille du déplacement.'],
      ['language', 'Accueil international', 'Chauffeurs habitués aux visiteurs étrangers et aux agendas institutionnels.'],
    ],
    faq: [
      ['Vos chauffeurs sont-ils habitués aux personnalités&nbsp;?', 'Oui. Nos chauffeurs VIP sont expérimentés dans l’accueil de dirigeants, de délégations et d’invités de marque, avec une exigence particulière sur la discrétion et la ponctualité.'],
      ['Pouvez-vous coordonner plusieurs véhicules&nbsp;?', 'Oui. Pour une délégation ou un événement, nous coordonnons plusieurs berlines, minivans, minibus ou autocars selon le nombre de participants.'],
      ['Le service est-il disponible la nuit et le week-end&nbsp;?', 'Oui, 7 jours sur 7 et à toute heure. Précisez vos horaires dans votre demande de devis.'],
      ['Comment garantissez-vous la confidentialité&nbsp;?', 'Nos chauffeurs sont tenus à une discrétion totale. Aucune information relative à vos déplacements, vos passagers ou vos échanges à bord n’est communiquée à des tiers.'],
    ],
  },
  {
    slug: 'transport-evenement-bruxelles.html',
    title: 'Transport Événement Bruxelles | Navettes Séminaires',
    description: 'Transport pour événements et groupes à Bruxelles : navettes de séminaires, congrès, incentives, concerts et soirées d’entreprise. Minibus et autocars avec chauffeur.',
    keywords: 'transport événement Bruxelles, navette séminaire Bruxelles, transport congrès Belgique, transport groupe entreprise Bruxelles',
    eyebrow: 'Événements & groupes',
    h1: 'Transport pour événements et groupes',
    sub: 'Séminaires, congrès, incentives, concerts : une logistique de transport coordonnée de bout en bout.',
    img: 'evenement', alt: 'Salle d’événement professionnel à Bruxelles desservie par des navettes avec chauffeur',
    serviceName: 'Transport pour événements et groupes à Bruxelles',
    lead: {
      title: 'Cinquante personnes, un seul point de rendez-vous',
      img: 'autocar', imgAlt: 'Autocar de grand tourisme pour le transport de groupes lors d’un événement en Belgique',
      body: [
        'Organiser un événement, c’est déjà beaucoup. Le transport ne devrait pas s’ajouter à la liste des inquiétudes. Nous prenons en charge l’acheminement de vos participants, du premier accueil au dernier retour.',
        'Navettes entre les hôtels et le lieu de l’événement, transferts depuis les aéroports et les gares, rotations pendant la journée, retour groupé le soir&nbsp;: chaque rotation est planifiée avec vous, puis exécutée à l’heure.',
        'Selon le format, nous mobilisons des minivans Mercedes Classe V, des minibus jusqu’à 8 places ou des autocars d’environ 50 places — et plusieurs véhicules coordonnés lorsque le groupe est important.',
      ],
    },
    checksTitle: 'Une logistique de transport clé en main',
    checks: [
      ['calendar-check', 'Planification des rotations', 'Un plan de transport écrit, avec horaires, points de prise en charge et véhicules affectés.'],
      ['hotel', 'Navettes hôtel ↔ site', 'Rotations régulières entre les hébergements et le lieu de votre événement.'],
      ['plane-departure', 'Accueil aéroport et gare', 'Prise en charge des participants dès leur arrivée en Belgique.'],
      ['bus', 'Grands groupes', 'Autocars d’environ 50 places et véhicules multiples pour les événements d’ampleur.'],
      ['user-tie', 'Interlocuteur unique', 'Un seul contact pour l’ensemble de vos véhicules et de vos horaires.'],
      ['file-invoice', 'Facturation entreprise', 'Devis détaillé et facturation adaptée aux services achats et aux agences.'],
    ],
    faq: [
      ['Pouvez-vous gérer plusieurs véhicules en parallèle&nbsp;?', 'Oui. Pour les événements importants, nous coordonnons plusieurs minibus et autocars, avec un plan de rotation établi à l’avance.'],
      ['Travaillez-vous avec les agences événementielles&nbsp;?', 'Oui, régulièrement. Nous fournissons un devis détaillé, un plan de transport écrit et une facturation adaptée aux processus des entreprises et des agences.'],
      ['Assurez-vous les transferts depuis les aéroports pour nos participants&nbsp;?', 'Oui. Nous prenons en charge les arrivées à Zaventem, Charleroi, Liège, Anvers, Lille et Schiphol, avec suivi des vols.'],
      ['Peut-on réserver pour plusieurs jours consécutifs&nbsp;?', 'Oui. Congrès, séminaires résidentiels et incentives sur plusieurs jours sont pris en charge, avec le même chauffeur lorsque c’est possible.'],
    ],
  },
];

/* ---------- Pages véhicules ---------- */
const VEHICLES = [
  {
    slug: 'mercedes-classe-v-avec-chauffeur.html',
    title: 'Mercedes Classe V avec Chauffeur | Minivan de Luxe',
    description: 'Mercedes Classe V avec chauffeur à Bruxelles : minivan de luxe jusqu’à 7 passagers, intérieur haut de gamme et grand espace bagages. Idéal aéroport.',
    keywords: 'Mercedes Classe V avec chauffeur, minivan de luxe Bruxelles, location Classe V Belgique, van avec chauffeur Bruxelles',
    eyebrow: 'Nos minivans de luxe',
    h1: 'Mercedes Classe V avec chauffeur',
    sub: 'Jusqu’à 7 passagers, un intérieur haut de gamme et un vrai coffre. Notre véhicule le plus demandé.',
    img: 'classeV', alt: 'Mercedes Classe V noire avec chauffeur, minivan de luxe à Bruxelles',
    serviceName: 'Location de Mercedes Classe V avec chauffeur',
    lead: {
      title: 'Mercedes Classe V — pour votre confort',
      img: 'groupe', imgAlt: 'Passagers installés à l’arrière d’un minivan de luxe avec chauffeur',
      body: [
        'La Mercedes Classe V est le minivan de référence du transport avec chauffeur. Elle réunit ce que les autres véhicules obligent à arbitrer&nbsp;: la place, le confort et l’élégance.',
        'Jusqu’à 7 passagers voyagent dans des sièges individuels, avec un grand espace pour les jambes et un intérieur haut de gamme. Le coffre, lui, est réellement dimensionné pour les bagages — pas pour un sac de sport.',
        'C’est le véhicule idéal pour les transferts privés, les navettes aéroport en famille, les petits groupes d’affaires et tous les déplacements où l’on veut rester ensemble sans être serré.',
      ],
    },
    checksTitle: 'Les points forts de la Classe V',
    checks: [
      ['users', 'Jusqu’à 7 passagers', 'Des sièges individuels, pour que chacun voyage confortablement installé.'],
      ['couch', 'Grand confort', 'Assises soignées, souvent en cuir, et suspension souple sur les longs trajets.'],
      ['gem', 'Intérieur haut de gamme', 'Finitions premium, éclairage d’ambiance et insonorisation soignée.'],
      ['suitcase-rolling', 'Espace bagages', 'Un coffre généreux pour les passagers et leurs valises, sans compromis.'],
      ['plane-departure', 'Idéal aéroport', 'Le choix naturel pour les transferts vers Zaventem et Charleroi en famille.'],
      ['snowflake', 'Climatisation', 'Température réglable à l’avant comme à l’arrière du véhicule.'],
    ],
    faq: [
      ['Combien de passagers peut accueillir la Mercedes Classe V&nbsp;?', 'Jusqu’à 7 passagers, installés dans des sièges individuels avec un grand espace pour les jambes.'],
      ['Y a-t-il de la place pour les bagages&nbsp;?', 'Oui. La Classe V dispose d’un coffre réellement dimensionné pour accueillir les valises de tous les passagers — c’est l’un de ses principaux atouts pour les transferts aéroport.'],
      ['La Classe V convient-elle aux trajets longue distance&nbsp;?', 'Parfaitement. Son confort de suspension, son insonorisation et son espace en font un excellent véhicule pour les trajets vers les autres villes belges ou les pays limitrophes.'],
      ['Quel est le tarif d’une Mercedes Classe V avec chauffeur&nbsp;?', 'Le tarif est établi sur devis selon la durée, le trajet et le nombre de passagers. Envoyez-nous les détails de votre déplacement pour recevoir une proposition.'],
    ],
  },
  {
    slug: 'mercedes-classe-s-avec-chauffeur.html',
    title: 'Mercedes Classe S avec Chauffeur | Berline de Prestige',
    description: 'Mercedes Classe S avec chauffeur à Bruxelles : berline haut de gamme, sièges cuir, silence de roulement et chauffeur en tenue. Affaires et VIP.',
    keywords: 'Mercedes Classe S avec chauffeur, berline de prestige Bruxelles, location Classe S Belgique, limousine Mercedes Bruxelles',
    eyebrow: 'Nos véhicules haut de gamme',
    h1: 'Mercedes Classe S avec chauffeur',
    sub: 'Nos véhicules haut de gamme pour votre confort : luxe, élégance et service de chauffeur professionnel.',
    img: 'hero', alt: 'Mercedes Classe S noire avec chauffeur dans une rue pavée de Bruxelles',
    serviceName: 'Location de Mercedes Classe S avec chauffeur',
    lead: {
      title: 'La référence absolue du transport de prestige',
      img: 'cuir', imgAlt: 'Intérieur en cuir d’une Mercedes Classe S avec chauffeur',
      body: [
        'La Mercedes Classe S n’a plus rien à prouver. Silence de roulement, suspension pilotée, sièges en cuir, finitions d’exception&nbsp;: elle transforme un simple déplacement en un moment de calme réel.',
        'Conduite par l’un de nos chauffeurs professionnels en tenue, elle est le choix naturel pour vos rendez-vous d’affaires, vos réceptions, vos soirées de gala et l’accueil de vos clients les plus exigeants.',
        'Jusqu’à 3 passagers voyagent à l’arrière avec un espace généreux. Pour un groupe plus important, la Mercedes Classe V offre le même niveau d’exigence avec davantage de sièges.',
      ],
    },
    checksTitle: 'Ce que la Classe S apporte au trajet',
    checks: [
      ['gem', 'Luxe et élégance', 'Une présence immédiate, à l’extérieur comme à bord.'],
      ['couch', 'Sièges cuir premium', 'Assises enveloppantes et réglables, pensées pour les trajets d’affaires.'],
      ['volume-off', 'Silence de roulement', 'Insonorisation d’exception&nbsp;: vous pouvez travailler ou téléphoner sereinement.'],
      ['user-tie', 'Chauffeur en tenue', 'Accueil soigné, ouverture de portière et aide aux bagages.'],
      ['user-secret', 'Discrétion', 'Le véhicule et le chauffeur restent volontairement en retrait.'],
      ['briefcase', 'Affaires et VIP', 'Le standard attendu pour vos partenaires et vos invités de marque.'],
    ],
    faq: [
      ['Combien de passagers peut accueillir la Mercedes Classe S&nbsp;?', 'Jusqu’à 3 passagers, avec un espace particulièrement généreux à l’arrière.'],
      ['La Classe S convient-elle aux transferts aéroport&nbsp;?', 'Oui, pour 1 à 3 passagers avec des bagages raisonnables. Pour une famille ou un groupe avec plusieurs valises, nous recommandons la Mercedes Classe V.'],
      ['Le chauffeur porte-t-il une tenue&nbsp;?', 'Oui. Nos chauffeurs assurent le service en tenue soignée, avec un accueil courtois et une aide aux bagages.'],
      ['Peut-on réserver la Classe S pour une soirée&nbsp;?', 'Oui. Nous proposons la mise à disposition à l’heure, à la soirée ou à la journée complète, en plus des transferts simples.'],
    ],
  },
  {
    slug: 'location-minibus-bruxelles.html',
    title: 'Location Minibus Bruxelles avec Chauffeur | 8 Places',
    description: 'Location de minibus avec chauffeur à Bruxelles : jusqu’à 8 places, grand coffre, chauffeur professionnel. Environ 350 € par jour. Devis gratuit.',
    keywords: 'location minibus Bruxelles, minibus avec chauffeur Belgique, louer minibus 8 places Bruxelles, navette minibus Bruxelles',
    eyebrow: 'Minibus',
    h1: 'Location de minibus à Bruxelles',
    sub: 'Jusqu’à 8 places avec chauffeur professionnel — le bon format pour les groupes réduits.',
    img: 'minibus', alt: 'Minibus blanc avec chauffeur pour la location de groupe à Bruxelles',
    serviceName: 'Location de minibus avec chauffeur à Bruxelles',
    priceNote: '<strong>Tarif indicatif&nbsp;:</strong> environ <strong>350 € par jour</strong> pour un minibus de 8 places. Le montant final dépend de la durée, du nombre de passagers et du trajet exact. <a href="contact.html">Demandez votre devis personnalisé</a>.',
    lead: {
      title: 'Le format qui manque entre la voiture et l’autocar',
      img: 'groupe', imgAlt: 'Groupe de passagers à bord d’un minibus avec chauffeur en Belgique',
      body: [
        'Huit personnes, c’est trop pour une berline et beaucoup trop peu pour un autocar. Le minibus est la réponse&nbsp;: la souplesse d’un véhicule qui circule facilement dans Bruxelles, avec la capacité d’un vrai transport de groupe.',
        'Équipes en séminaire, familles élargies, groupes d’amis, navettes régulières entre un hôtel et un site d’événement&nbsp;: le minibus fait le travail sans immobiliser un autocar de 50 places pour huit passagers.',
        'Le compartiment à bagages est généreux, l’accès à bord est aisé, et le chauffeur reste avec le groupe pendant toute la mission.',
      ],
    },
    checksTitle: 'Le minibus, en pratique',
    checks: [
      ['users', 'Jusqu’à 8 places', 'Le format idéal pour un groupe réduit qui veut rester ensemble.'],
      ['suitcase-rolling', 'Coffre spacieux', 'De la place pour les valises, le matériel ou les équipements sportifs.'],
      ['city', 'Agile en ville', 'Un gabarit qui circule et stationne bien plus facilement qu’un autocar.'],
      ['briefcase', 'Transport professionnel', 'Séminaires, visites de sites, navettes de collaborateurs.'],
      ['clock', 'Mise à disposition', 'À la journée ou en rotations, selon votre programme.'],
      ['snowflake', 'Confort à bord', 'Sièges confortables, climatisation et espace pour les jambes.'],
    ],
    faq: [
      ['Combien coûte la location d’un minibus à Bruxelles&nbsp;?', 'À titre indicatif, environ 350 € par jour pour un minibus de 8 places, chauffeur inclus. Le montant exact dépend de la durée, du nombre de passagers et du trajet.'],
      ['Le chauffeur est-il compris dans le prix&nbsp;?', 'Oui. Toutes nos prestations incluent un chauffeur professionnel&nbsp;: nous ne proposons pas de location de véhicule sans conducteur.'],
      ['Combien de places compte le minibus&nbsp;?', 'Notre minibus offre jusqu’à 8 places assises. Au-delà, nous vous orientons vers un autocar d’environ 50 places ou vers plusieurs véhicules.'],
      ['Peut-on utiliser le minibus pour des navettes répétées&nbsp;?', 'Oui. Le minibus est particulièrement adapté aux rotations entre un hôtel, une gare, un aéroport et un lieu d’événement.'],
    ],
  },
  {
    slug: 'location-autocar-belgique.html',
    title: 'Location Autocar Belgique | Bus VIP avec Chauffeur',
    description: 'Location d’autocar et de bus VIP avec chauffeur en Belgique : environ 50 places, sièges inclinables, grandes soutes. Environ 600 € par jour.',
    keywords: 'location autocar Belgique, bus VIP Belgique, location bus Bruxelles, autocar avec chauffeur Belgique, transport groupe 50 places',
    eyebrow: 'Autocar & Bus VIP',
    h1: 'Location d’autocar et de bus VIP en Belgique',
    sub: 'Environ 50 places avec chauffeur : excursions, congrès, événements et transports d’entreprise.',
    img: 'autocar', alt: 'Autocar de grand tourisme sur une route belge pour le transport de groupes',
    serviceName: 'Location d’autocar et de bus VIP en Belgique',
    priceNote: '<strong>Tarif indicatif&nbsp;:</strong> environ <strong>600 € par jour</strong> pour un autocar d’environ 50 places. Le montant final dépend de la durée, du kilométrage et du trajet exact. <a href="contact.html">Demandez votre devis personnalisé</a>.',
    lead: {
      title: 'Tout le groupe ensemble, dans un seul véhicule',
      img: 'autocarInt', imgAlt: 'Intérieur d’un autocar VIP avec sièges en cuir matelassé',
      body: [
        'Quand le groupe dépasse la douzaine de personnes, l’autocar devient la solution la plus simple, la plus économique et la plus confortable. Un seul point de rendez-vous, un seul horaire, un seul chauffeur.',
        'Nos autocars d’environ 50 places offrent des sièges inclinables, la climatisation et de vastes soutes à bagages. Ils conviennent aussi bien à une excursion d’une journée vers Bruges ou les Ardennes qu’à un transfert de congressistes entre un hôtel et un centre de conférences.',
        'Pour les groupes exigeant un niveau de service supérieur, notre formule Bus VIP conserve la capacité de l’autocar en soignant le confort et l’accueil à bord.',
      ],
    },
    checksTitle: 'L’autocar, en pratique',
    checks: [
      ['users', 'Environ 50 places', 'La capacité qu’il faut pour transporter un groupe entier d’un seul coup.'],
      ['couch', 'Sièges inclinables', 'Un vrai confort de voyage, y compris sur les longues distances.'],
      ['boxes-packing', 'Grandes soutes', 'Valises, matériel d’exposition, instruments ou équipements sportifs.'],
      ['mountain-sun', 'Excursions', 'Bruges, Gand, Anvers, les Ardennes, la côte belge et les pays voisins.'],
      ['building', 'Congrès et entreprises', 'Transferts de participants, séminaires et journées d’entreprise.'],
      ['snowflake', 'Climatisation', 'Une température maîtrisée pendant tout le trajet.'],
    ],
    faq: [
      ['Combien coûte la location d’un autocar en Belgique&nbsp;?', 'À titre indicatif, environ 600 € par jour pour un autocar d’environ 50 places, chauffeur inclus. Le prix varie selon la durée, le kilométrage et le trajet exact.'],
      ['Combien de places compte l’autocar&nbsp;?', 'Environ 50 places assises. Pour un groupe plus important, nous coordonnons plusieurs véhicules.'],
      ['Peut-on partir à l’étranger en autocar&nbsp;?', 'Oui. Nous assurons des trajets vers la France, les Pays-Bas, le Luxembourg et l’Allemagne sur demande. Précisez votre destination dans la demande de devis.'],
      ['Y a-t-il de la place pour les bagages&nbsp;?', 'Oui. Nos autocars disposent de vastes soutes, adaptées aux valises comme au matériel volumineux.'],
    ],
  },
];

/* ---------- Pages hub ---------- */
function servicesHub() {
  const trail = [['index.html', 'Accueil'], ['nos-services.html', 'Nos services']];
  const body = `${hero({
    eyebrow: 'Nos services', small: true,
    h1: 'Nos services de transport avec chauffeur',
    sub: 'Limousine, voiture avec chauffeur, minivan, minibus ou autocar : une solution pour chaque déplacement, à Bruxelles et partout en Belgique.',
    img: 'chauffeur', alt: 'Chauffeur professionnel devant une berline noire à Bruxelles',
    crumbs: breadcrumb(trail),
    secondary: ['notre-flotte.html', 'Voir la flotte'],
  })}
  ${trustBar()}
  ${servicesSection({ title: 'Huit prestations, une même exigence', intro: 'Chaque service est assuré par un chauffeur professionnel et un véhicule haut de gamme, sélectionné selon le nombre de passagers et la nature du trajet.' })}
  ${choiceSection()}
  ${amenitiesSection()}
  ${whySection()}
  ${faqSection(HOME_FAQ.slice(0, 5), { dark: false })}
  ${contactSection({ title: 'Quel service vous correspond&nbsp;?', intro: 'Décrivez-nous votre déplacement : nous vous indiquons la formule et le véhicule les plus adaptés, avec un tarif clair.' })}
  ${ctaBand('Une question sur nos services&nbsp;?', 'Nous répondons à toutes les demandes par e-mail, sous 24 h ouvrées.')}`;

  return layout({
    slug: 'nos-services.html',
    title: 'Nos Services | Transport avec Chauffeur à Bruxelles',
    description: 'Chauffeur privé, limousine, transfert aéroport, mariage, transport VIP, minibus et autocars avec chauffeur à Bruxelles et en Belgique. Devis gratuit.',
    keywords: 'services transport avec chauffeur Bruxelles, limousine Bruxelles, minibus Bruxelles, autocar Belgique',
    schema: [faqSchema(HOME_FAQ.slice(0, 5)), breadcrumbSchema(trail)],
    body,
  });
}

function fleetHub() {
  const trail = [['index.html', 'Accueil'], ['notre-flotte.html', 'Notre flotte']];
  const body = `${hero({
    eyebrow: 'Notre flotte', small: true,
    h1: 'Notre flotte de véhicules avec chauffeur',
    sub: 'De la berline Mercedes Classe S à l’autocar de 50 places : le bon véhicule pour le bon nombre de passagers.',
    img: 'classeV', alt: 'Mercedes Classe V noire, minivan de luxe de la flotte Belgium Limousine Services',
    crumbs: breadcrumb(trail),
    secondary: ['tarifs.html', 'Voir les tarifs'],
  })}
  ${trustBar()}
  ${choiceSection()}
  ${fleetSection({ dark: false, title: 'Quatre familles de véhicules', intro: 'Toutes nos prestations incluent un chauffeur professionnel. Nous ne proposons pas de location sans conducteur.' })}
  ${amenitiesSection()}
  ${pricingSection({ dark: false })}
  ${faqSection([
    ['Quel véhicule choisir selon le nombre de passagers&nbsp;?', 'Jusqu’à 3 passagers&nbsp;: Mercedes Classe S. Jusqu’à 7 passagers&nbsp;: Mercedes Classe V. Jusqu’à 8 places&nbsp;: minibus. Environ 50 places&nbsp;: autocar. Au-delà, nous coordonnons plusieurs véhicules.'],
    ['Vos véhicules sont-ils récents&nbsp;?', 'Oui. Notre flotte est composée de véhicules modernes, entretenus régulièrement et nettoyés avant chaque mission.'],
    ['Peut-on louer un véhicule sans chauffeur&nbsp;?', 'Non. Toutes nos prestations incluent un chauffeur professionnel&nbsp;: c’est le cœur de notre métier.'],
    ['Les véhicules disposent-ils du Wi-Fi&nbsp;?', 'Oui, le Wi-Fi gratuit est disponible à bord, avec la climatisation, des sièges confortables et un grand espace pour les jambes.'],
  ], { dark: true })}
  ${contactSection({ title: 'Quel véhicule pour votre trajet&nbsp;?', intro: 'Indiquez-nous le nombre de passagers et votre itinéraire : nous vous proposons le véhicule adapté et son tarif.' })}
  ${ctaBand('Réservez le véhicule qu’il vous faut', 'Un chauffeur professionnel, un véhicule impeccable et un tarif annoncé à l’avance.')}`;

  return layout({
    slug: 'notre-flotte.html',
    title: 'Notre Flotte | Mercedes, Minibus et Autocars avec Chauffeur',
    description: 'Mercedes Classe V (7 passagers), Classe S, minibus 8 places et autocars 50 places avec chauffeur à Bruxelles. Le bon véhicule pour votre groupe.',
    keywords: 'Mercedes Classe V avec chauffeur, Mercedes Classe S avec chauffeur, location minibus Bruxelles, location autocar Belgique',
    schema: [breadcrumbSchema(trail)],
    body,
  });
}

function driversPage() {
  const trail = [['index.html', 'Accueil'], ['nos-chauffeurs.html', 'Nos chauffeurs']];
  const values = [
    ['award', 'Expérience', 'Des années de conduite professionnelle en transport de personnes, sur tous types de véhicules et pour tous types de clients.'],
    ['clock', 'Ponctualité', 'Arrivée en avance, suivi des vols, marge prévue pour le trafic bruxellois. Le retard n’est pas une option.'],
    ['user-tie', 'Professionnalisme', 'Tenue soignée, accueil courtois, aide aux bagages, connaissance des usages du transport haut de gamme.'],
    ['user-secret', 'Discrétion', 'Ce qui se dit à bord reste à bord. Aucun commentaire, aucune indiscrétion, aucune information partagée.'],
    ['shield-halved', 'Sécurité', 'Conduite souple et anticipative, respect strict du code de la route, véhicules contrôlés régulièrement.'],
    ['map-location-dot', 'Connaissance du terrain', 'Bruxelles et ses 19 communes, la Flandre, la Wallonie, les aéroports et les axes transfrontaliers.'],
  ];
  const body = `${hero({
    eyebrow: 'Nos chauffeurs', small: true,
    h1: 'Chauffeur privé professionnel',
    sub: 'Profitez d’un trajet confortable et sécurisé avec nos chauffeurs professionnels.',
    img: 'chauffeur', alt: 'Chauffeur privé professionnel en costume ouvrant la portière d’une berline noire',
    crumbs: breadcrumb(trail),
    secondary: ['nos-services.html', 'Nos services'],
  })}
  ${trustBar()}
  ${driversSection({ cta: ['contact.html', 'Réserver un chauffeur'] })}
  <section class="sec-ink2">
    <div class="wrap">
      <div class="sec-head rv"><p class="eyebrow">Nos engagements</p><h2>Six qualités non négociables</h2></div>
      <div class="grid g-3 rv">
        ${values.map(([i, t, d]) => `<article class="card card-dark"><span class="ico"><i class="fas fa-${i}" aria-hidden="true"></i></span><h3>${t}</h3><p>${d}</p></article>`).join('\n        ')}
      </div>
    </div>
  </section>
  ${faqSection([
    ['Vos chauffeurs parlent-ils plusieurs langues&nbsp;?', 'Nos chauffeurs assurent l’accueil en français et sont habitués aux visiteurs internationaux. Précisez vos besoins linguistiques dans votre demande de devis.'],
    ['Le chauffeur reste-t-il avec nous pendant toute la mission&nbsp;?', 'Oui, dans le cadre d’une mise à disposition. Le chauffeur et le véhicule vous restent affectés pendant toute la durée convenue.'],
    ['Le chauffeur aide-t-il avec les bagages&nbsp;?', 'Oui. L’aide aux bagages fait partie du service, aussi bien au départ qu’à l’arrivée.'],
    ['Puis-je avoir le même chauffeur sur plusieurs jours&nbsp;?', 'Nous faisons notre possible pour affecter le même chauffeur sur une mission de plusieurs jours, ce qui est particulièrement apprécié lors des séminaires et des congrès.'],
  ], { dark: false })}
  ${contactSection({ title: 'Réservez votre chauffeur privé', intro: 'Indiquez-nous la date, le trajet et le nombre de passagers : nous affectons le chauffeur et le véhicule adaptés.' })}
  ${ctaBand('Un chauffeur professionnel, à votre disposition', 'Expérience, ponctualité, discrétion et sécurité — à Bruxelles et dans toute la Belgique.')}`;

  return layout({
    slug: 'nos-chauffeurs.html',
    title: 'Chauffeur Privé Professionnel à Bruxelles | Nos Chauffeurs',
    description: 'Nos chauffeurs privés : expérience, ponctualité, professionnalisme, discrétion et sécurité. Ils connaissent Bruxelles et toute la Belgique. Devis gratuit.',
    keywords: 'chauffeur privé Bruxelles, chauffeur professionnel Belgique, chauffeur limousine Bruxelles',
    schema: [breadcrumbSchema(trail)],
    body,
  });
}

function pricingPage() {
  const trail = [['index.html', 'Accueil'], ['tarifs.html', 'Tarifs']];
  const body = `${hero({
    eyebrow: 'Tarifs indicatifs', small: true,
    h1: 'Tarifs indicatifs',
    sub: 'Des ordres de grandeur transparents, et un devis précis établi selon votre trajet.',
    img: 'autocar', alt: 'Autocar de grand tourisme, tarifs de location avec chauffeur en Belgique',
    crumbs: breadcrumb(trail),
    secondary: ['notre-flotte.html', 'Voir la flotte'],
  })}
  ${trustBar()}
  ${pricingSection({ dark: false })}
  <section class="sec-ink2">
    <div class="wrap">
      <div class="sec-head rv"><p class="eyebrow">Ce qui fait varier le prix</p><h2>Comment votre devis est calculé</h2>
      <p class="lead">Aucun tarif au kilomètre caché, aucun supplément découvert à l’arrivée. Le montant du devis est le montant facturé.</p></div>
      <div class="grid g-4 rv">
        ${[
          ['hourglass-half', 'La durée', 'Transfert simple, mise à disposition à l’heure, à la demi-journée ou à la journée complète.'],
          ['users', 'Le nombre de passagers', 'Il détermine le véhicule&nbsp;: berline, minivan, minibus ou autocar.'],
          ['route', 'Le trajet exact', 'Distance parcourue, nombre d’arrêts, aller simple ou aller-retour.'],
          ['calendar-days', 'La date et l’horaire', 'Les départs de nuit, les week-ends et les périodes chargées peuvent influer sur la disponibilité.'],
        ].map(([i, t, d]) => `<article class="card card-dark"><span class="ico"><i class="fas fa-${i}" aria-hidden="true"></i></span><h3>${t}</h3><p>${d}</p></article>`).join('\n        ')}
      </div>
    </div>
  </section>
  ${faqSection([
    ['Les tarifs affichés sont-ils définitifs&nbsp;?', 'Non, ce sont des montants indicatifs. Environ 350 € par jour pour un minibus de 8 places et environ 600 € par jour pour un autocar d’environ 50 places. Le devis final dépend de la durée, du nombre de passagers et du trajet exact.'],
    ['Le chauffeur est-il inclus dans le tarif&nbsp;?', 'Oui, toujours. Toutes nos prestations comprennent un chauffeur professionnel.'],
    ['Comment obtenir un tarif pour une limousine&nbsp;?', 'Les limousines et voitures avec chauffeur sont tarifées sur devis, car le prix dépend fortement du trajet et de la durée. Envoyez-nous votre demande pour recevoir une proposition sous 24 h ouvrées.'],
    ['Facturez-vous les entreprises&nbsp;?', 'Oui. Nous travaillons avec les particuliers comme avec les entreprises et les agences, avec un devis détaillé et une facturation claire.'],
  ], { dark: false })}
  ${contactSection({ title: 'Demandez un devis personnalisé', intro: 'Quelques informations suffisent : date, trajet, nombre de passagers et véhicule souhaité.' })}
  ${ctaBand('Un tarif clair, sans surprise', 'Décrivez votre déplacement, recevez une proposition détaillée sous 24 h ouvrées.')}`;

  return layout({
    slug: 'tarifs.html',
    title: 'Tarifs | Minibus 350 €/jour, Autocar 600 €/jour à Bruxelles',
    description: 'Tarifs indicatifs : minibus 8 places environ 350 €/jour, autocar 50 places environ 600 €/jour. Limousines sur devis. Bruxelles et toute la Belgique.',
    keywords: 'prix location minibus Bruxelles, tarif autocar Belgique, prix limousine avec chauffeur Bruxelles',
    schema: [breadcrumbSchema(trail), {
      '@type': 'OfferCatalog',
      name: 'Tarifs indicatifs — Belgium Limousine Services',
      itemListElement: [
        { '@type': 'Offer', name: 'Minibus jusqu’à 8 places avec chauffeur', price: '350', priceCurrency: 'EUR', description: 'Tarif indicatif par jour, chauffeur inclus.' },
        { '@type': 'Offer', name: 'Autocar d’environ 50 places avec chauffeur', price: '600', priceCurrency: 'EUR', description: 'Tarif indicatif par jour, chauffeur inclus.' },
      ],
    }],
    body,
  });
}

function contactPage() {
  const trail = [['index.html', 'Accueil'], ['contact.html', 'Contact']];
  const body = `${hero({
    eyebrow: 'Contact', small: true,
    h1: 'Demande de devis',
    sub: 'Un formulaire, quelques informations, et une proposition claire sous 24 h ouvrées.',
    img: 'cuir', alt: 'Intérieur en cuir d’un véhicule de luxe avec chauffeur',
    crumbs: breadcrumb(trail),
    primary: ['#devis', 'Remplir le formulaire'],
    secondary: ['tarifs.html', 'Voir les tarifs'],
  })}
  ${trustBar()}
  ${contactSection({ title: 'Parlez-nous de votre déplacement', intro: 'Plus votre demande est précise, plus notre devis le sera. Indiquez la date, le lieu de départ, la destination, le nombre de passagers et le type de véhicule souhaité.' })}
  <section class="sec-bone">
    <div class="wrap">
      <div class="grid g-3 rv">
        <article class="card">
          <span class="ico"><i class="fas fa-envelope" aria-hidden="true"></i></span>
          <h3>Par e-mail</h3>
          <p>Écrivez-nous directement, nous répondons à toutes les demandes.</p>
          <a class="link-arrow" href="mailto:${SITE.email}">${SITE.email} <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
        </article>
        <article class="card">
          <span class="ico"><i class="fas fa-clock" aria-hidden="true"></i></span>
          <h3>Délai de réponse</h3>
          <p>Nous répondons aux demandes de devis sous 24 h ouvrées, 7 jours sur 7 pour les demandes urgentes.</p>
        </article>
        <article class="card">
          <span class="ico"><i class="fas fa-map-location-dot" aria-hidden="true"></i></span>
          <h3>Zone d’intervention</h3>
          <p>Bruxelles et ses 19 communes, toute la Belgique, et les pays limitrophes sur demande.</p>
        </article>
      </div>
    </div>
  </section>
  ${faqSection([
    ['Quelles informations dois-je fournir pour obtenir un devis&nbsp;?', 'La date souhaitée, le lieu de départ, la destination, le nombre de passagers et le type de véhicule envisagé. Ajoutez les horaires, le nombre de bagages et l’occasion si vous le pouvez&nbsp;: le devis n’en sera que plus précis.'],
    ['Sous quel délai recevrai-je une réponse&nbsp;?', 'Sous 24 h ouvrées. Pour une demande urgente, précisez-le dans votre message.'],
    ['Le devis est-il gratuit&nbsp;?', 'Oui, le devis est gratuit et sans engagement.'],
    ['Par quel moyen puis-je vous contacter&nbsp;?', `Par le formulaire de cette page ou directement par e-mail à <a href="mailto:${SITE.email}">${SITE.email}</a>. Toutes nos réservations et tous nos devis sont traités par e-mail.`],
  ], { dark: true })}
  ${relatedTags('Nos prestations', ALL_LINKS)}`;

  return layout({
    slug: 'contact.html',
    title: 'Contact et Devis Gratuit | Belgium Limousine Services',
    description: 'Demandez votre devis gratuit pour une limousine, un minibus ou un autocar avec chauffeur à Bruxelles. Réponse sous 24 h ouvrées par e-mail.',
    keywords: 'devis limousine Bruxelles, contact location bus Bruxelles, réserver chauffeur privé Bruxelles',
    schema: [breadcrumbSchema(trail), { '@type': 'ContactPage', '@id': `${SITE.domain}/contact.html#contact` }],
    body,
  });
}

function thanksPage() {
  const body = `<section class="hero hero-sm">
    <div class="hero-media">${photo('hero', 'Mercedes Classe S noire avec chauffeur à Bruxelles', { w: 1600, eager: true })}</div>
    <div class="wrap">
      <div class="hero-inner" style="text-align:center;max-width:720px;margin:0 auto">
        <p class="eyebrow" style="justify-content:center">Demande envoyée</p>
        <h1>Merci pour votre demande</h1>
        <p class="hero-sub" style="margin-left:auto;margin-right:auto">Votre demande de devis a bien été transmise à notre équipe. Nous vous répondons sous 24 h ouvrées à l’adresse e-mail que vous avez indiquée.</p>
        <div class="btn-row center">
          <a href="index.html" class="btn btn-gold btn-lg">Retour à l’accueil</a>
          <a href="notre-flotte.html" class="btn btn-ghost btn-lg">Découvrir notre flotte</a>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="wrap">
      <div class="sec-head center rv">
        <p class="eyebrow">Et maintenant&nbsp;?</p>
        <h2>Ce qui se passe ensuite</h2>
      </div>
      <div class="grid g-3 rv">
        <article class="card"><span class="ico"><i class="fas fa-inbox" aria-hidden="true"></i></span><h3>1. Nous lisons votre demande</h3><p>Votre message arrive directement dans notre boîte&nbsp;: date, trajet, nombre de passagers et véhicule souhaité.</p></article>
        <article class="card"><span class="ico"><i class="fas fa-calculator" aria-hidden="true"></i></span><h3>2. Nous établissons le devis</h3><p>Nous sélectionnons le véhicule adapté et calculons un tarif clair, sans supplément caché.</p></article>
        <article class="card"><span class="ico"><i class="fas fa-paper-plane" aria-hidden="true"></i></span><h3>3. Vous recevez notre réponse</h3><p>Sous 24 h ouvrées, par e-mail. Il ne vous reste qu’à confirmer pour bloquer le véhicule.</p></article>
      </div>
      <div class="btn-row center rv" style="margin-top:36px">
        <a href="mailto:${SITE.email}" class="btn btn-outline"><i class="fas fa-envelope" aria-hidden="true"></i> ${SITE.email}</a>
      </div>
    </div>
  </section>
  ${relatedTags('En attendant, découvrez nos prestations', ALL_LINKS)}`;

  return layout({
    slug: 'merci.html',
    title: 'Merci pour votre demande | Belgium Limousine Services',
    description: 'Votre demande de devis a bien été envoyée à Belgium Limousine Services. Nous vous répondons sous 24 h ouvrées.',
    body,
  }).replace('<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">', '<meta name="robots" content="noindex, follow">');
}

/* ---------- Pages légales ---------- */
function legalPage({ slug, title, description, h1, sections }) {
  const trail = [['index.html', 'Accueil'], [slug, h1]];
  const body = `${hero({
    eyebrow: 'Informations légales', small: true,
    h1, sub: description, img: 'bruxelles', alt: 'Bruxelles, siège de Belgium Limousine Services',
    crumbs: breadcrumb(trail),
    primary: ['contact.html', 'Nous contacter'],
    secondary: ['index.html', 'Retour à l’accueil'],
  })}
  <section>
    <div class="wrap">
      <div class="prose rv">
        ${sections}
      </div>
    </div>
  </section>`;
  return layout({ slug, title, description, body, schema: [breadcrumbSchema(trail)] });
}

function legalPages() {
  return [
    legalPage({
      slug: 'mentions-legales.html',
      title: 'Mentions légales | Belgium Limousine Services',
      description: 'Mentions légales du site limousinebruxelles.com, exploité par Belgium Limousine Services, Bruxelles, Belgique.',
      h1: 'Mentions légales',
      sections: `
        <h2>Éditeur du site</h2>
        <p>Le présent site <strong>limousinebruxelles.com</strong> est édité par <strong>Belgium Limousine Services</strong>, prestataire de services de location de véhicules avec chauffeur établi à Bruxelles, Belgique.</p>
        <p>Contact&nbsp;: <a href="mailto:${SITE.email}">${SITE.email}</a></p>
        <h2>Activité</h2>
        <p>Location de limousines, de voitures avec chauffeur, de minivans, de minibus et d’autocars avec chauffeur professionnel, à Bruxelles et dans toute la Belgique, ainsi que vers les pays limitrophes sur demande.</p>
        <h2>Hébergement</h2>
        <p>Le site est hébergé sur une infrastructure d’hébergement statique. Pour toute question relative à l’hébergement, écrivez-nous à l’adresse ci-dessus.</p>
        <h2>Propriété intellectuelle</h2>
        <p>L’ensemble des contenus du site (textes, structure, mise en page, identité visuelle) est protégé par le droit d’auteur. Toute reproduction, représentation ou adaptation, totale ou partielle, sans autorisation écrite préalable est interdite.</p>
        <p>Les photographies d’illustration sont utilisées sous licence libre de droits et restent la propriété de leurs auteurs respectifs.</p>
        <h2>Tarifs et disponibilité</h2>
        <p>Les tarifs mentionnés sur ce site sont <strong>indicatifs</strong>. Ils ne constituent pas une offre contractuelle. Le prix définitif est communiqué dans le devis personnalisé établi après réception de votre demande, en fonction de la durée, du nombre de passagers et du trajet exact.</p>
        <h2>Limitation de responsabilité</h2>
        <p>Belgium Limousine Services s’efforce de maintenir les informations de ce site exactes et à jour, sans pouvoir garantir l’absence totale d’erreurs ou d’omissions. Les informations sont fournies à titre indicatif et peuvent être modifiées à tout moment.</p>
        <h2>Droit applicable</h2>
        <p>Le présent site et les prestations qui y sont décrites sont soumis au droit belge. Tout litige relève de la compétence des juridictions belges.</p>
      `,
    }),
    legalPage({
      slug: 'politique-de-confidentialite.html',
      title: 'Politique de confidentialité | Belgium Limousine Services',
      description: 'Politique de confidentialité et traitement des données personnelles sur limousinebruxelles.com, conformément au RGPD.',
      h1: 'Politique de confidentialité',
      sections: `
        <p class="lead">Belgium Limousine Services attache une grande importance à la protection de vos données personnelles. Cette politique explique quelles données nous collectons, pourquoi, et quels sont vos droits.</p>
        <h2>Responsable du traitement</h2>
        <p>Belgium Limousine Services, Bruxelles, Belgique. Contact&nbsp;: <a href="mailto:${SITE.email}">${SITE.email}</a></p>
        <h2>Données collectées</h2>
        <p>Nous collectons uniquement les données que vous nous transmettez volontairement via le formulaire de demande de devis ou par e-mail&nbsp;:</p>
        <ul>
          <li>votre nom&nbsp;;</li>
          <li>votre adresse e-mail&nbsp;;</li>
          <li>les informations relatives à votre déplacement&nbsp;: date souhaitée, lieu de départ, destination, nombre de passagers, type de véhicule&nbsp;;</li>
          <li>tout élément que vous choisissez d’ajouter dans le champ « message ».</li>
        </ul>
        <h2>Finalité du traitement</h2>
        <p>Ces données sont utilisées exclusivement pour&nbsp;:</p>
        <ul>
          <li>répondre à votre demande de devis&nbsp;;</li>
          <li>organiser et exécuter la prestation de transport si vous confirmez la réservation&nbsp;;</li>
          <li>assurer le suivi de la relation commerciale.</li>
        </ul>
        <p>Vos données ne sont ni vendues, ni louées, ni transmises à des tiers à des fins commerciales.</p>
        <h2>Base légale</h2>
        <p>Le traitement repose sur votre consentement (case à cocher du formulaire) et sur l’exécution de mesures précontractuelles prises à votre demande.</p>
        <h2>Durée de conservation</h2>
        <p>Les demandes de devis sont conservées le temps nécessaire au traitement de votre demande et, en cas de réservation, pendant la durée légale de conservation des documents commerciaux.</p>
        <h2>Transmission du formulaire</h2>
        <p>Le formulaire de demande de devis achemine votre message vers notre adresse e-mail via un service tiers de transmission de formulaires. Ce prestataire agit uniquement comme intermédiaire technique d’acheminement et ne réutilise pas vos données.</p>
        <h2>Cookies</h2>
        <p>Ce site ne dépose <strong>aucun cookie de suivi publicitaire ni d’analyse comportementale</strong>. Seules les ressources techniques nécessaires à l’affichage des polices et des icônes sont chargées depuis des réseaux de diffusion externes.</p>
        <h2>Vos droits</h2>
        <p>Conformément au Règlement général sur la protection des données (RGPD), vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation et d’opposition concernant vos données, ainsi que d’un droit à la portabilité.</p>
        <p>Pour exercer ces droits, écrivez-nous à <a href="mailto:${SITE.email}">${SITE.email}</a>. Vous pouvez également introduire une réclamation auprès de l’Autorité de protection des données belge.</p>
        <h2>Sécurité</h2>
        <p>Le site est servi exclusivement en HTTPS. Nous mettons en œuvre des mesures raisonnables pour protéger les données que vous nous transmettez contre tout accès non autorisé.</p>
      `,
    }),
  ];
}

/* ---------- Export ---------- */
export function allPages() {
  const pages = [
    { slug: 'index.html', html: homePage() },
    { slug: 'nos-services.html', html: servicesHub() },
    { slug: 'notre-flotte.html', html: fleetHub() },
    { slug: 'nos-chauffeurs.html', html: driversPage() },
    { slug: 'tarifs.html', html: pricingPage() },
    { slug: 'contact.html', html: contactPage() },
    { slug: 'merci.html', html: thanksPage(), noindex: true },
  ];
  for (const def of [...LANDINGS, ...VEHICLES]) {
    pages.push({ slug: def.slug, html: landing({ ...def, related: related(def.slug) }) });
  }
  for (const html of legalPages()) {
    const slug = /<link rel="canonical" href="[^"]*\/([^"/]+)">/.exec(html)[1];
    pages.push({ slug, html, priority: '0.3' });
  }
  return pages;
}
