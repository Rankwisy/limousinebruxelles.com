# Aurum — Limousine Bruxelles

**limousinebruxelles.com**

Site vitrine statique (HTML/CSS/JS, sans framework ni dépendance) pour **Aurum — Limousine Bruxelles** :
location de limousines, voitures avec chauffeur, minivans, minibus et autocars à Bruxelles et en Belgique.

Site entièrement en français. Contact unique : **info@limousinebruxelles.com**
(aucun numéro de téléphone ni adresse postale n'est publié).

---

## Structure

```
├── index.html                     Accueil
├── nos-services.html              Hub services
├── notre-flotte.html              Hub flotte
├── nos-chauffeurs.html            Nos chauffeurs
├── tarifs.html                    Tarifs indicatifs
├── contact.html                   Formulaire de devis
├── merci.html                     Confirmation d'envoi (noindex)
│
├── chauffeur-prive-bruxelles.html            ─┐
├── limousine-avec-chauffeur-bruxelles.html    │
├── transfert-aeroport-bruxelles.html          │  Pages de service
├── transport-mariage-bruxelles.html           │  (une par mot-clé cible)
├── transport-vip-bruxelles.html               │
├── transport-evenement-bruxelles.html        ─┘
│
├── mercedes-classe-v-avec-chauffeur.html     ─┐
├── mercedes-classe-s-avec-chauffeur.html      │  Pages véhicule
├── location-minibus-bruxelles.html            │
├── location-autocar-belgique.html            ─┘
│
├── mentions-legales.html
├── politique-de-confidentialite.html
│
├── css/style.css                  Design system (noir / gris anthracite / blanc / or)
├── js/main.js                     Navigation, révélations au scroll, formulaire
├── img/                           Logo + favicon
├── tools/                         Générateur de pages (voir ci-dessous)
├── sitemap.xml · robots.txt · site.webmanifest
└── _headers · _redirects          Netlify / Cloudflare Pages
```

## Générer le site

Toutes les pages HTML de la racine sont **générées** : elles partagent un seul gabarit
(en-tête, navigation, pied de page, données structurées) afin d'éviter la duplication.

```bash
node tools/build.mjs
```

| Fichier | Rôle |
|---|---|
| `tools/layout.mjs` | Gabarit HTML, navigation, pied de page, formulaire, données structurées, images |
| `tools/blocks.mjs` | Sections réutilisables (hero, services, flotte, tarifs, équipements, contact…) |
| `tools/pages.mjs`  | Contenu et métadonnées de chaque page |
| `tools/build.mjs`  | Écrit les pages + `sitemap.xml`, `robots.txt`, `_headers`, `_redirects`, manifeste |
| `tools/serve.mjs`  | Serveur statique local : `node tools/serve.mjs 4321` |

**Ne pas modifier les fichiers `.html` de la racine à la main** : ils sont écrasés au prochain build.
Toute modification de contenu se fait dans `tools/pages.mjs` (ou `tools/blocks.mjs` pour une section partagée).

## Formulaire de devis — activation

Le formulaire poste vers **FormSubmit** (`https://formsubmit.co/info@limousinebruxelles.com`),
un relais qui transfère les demandes par e-mail sans backend.

> **À faire une seule fois après la mise en ligne :** envoyer le formulaire une première fois.
> FormSubmit adresse un e-mail de confirmation à `info@limousinebruxelles.com` ;
> il suffit de cliquer sur le lien d'activation. Les demandes suivantes arrivent directement dans la boîte.

Après envoi, le visiteur est redirigé vers `merci.html`.
Un lien `mailto:` direct est présent sur toutes les pages en solution de repli.

Pour changer de service (Formspree, Web3Forms, fonction serverless…), modifier l'attribut
`action` dans `quoteForm()` (`tools/layout.mjs`) et la directive `form-action` du fichier `_headers`.

## SEO

- Titres et méta-descriptions uniques, calibrés (≤ 62 et ≤ 165 caractères).
- Un seul `<h1>` par page, hiérarchie `h2`/`h3` sémantique.
- Données structurées JSON-LD : `LocalBusiness`/`LimousineService`, `WebPage`, `Service`,
  `BreadcrumbList`, `FAQPage`, `OfferCatalog`.
- `sitemap.xml` et `robots.txt` générés automatiquement.
- Attributs `alt` descriptifs sur toutes les images, `loading="lazy"` hors hero.
- Mots-clés cibles : location limousine Bruxelles, limousine avec chauffeur Bruxelles,
  chauffeur privé Bruxelles, location minibus Bruxelles, location autocar Belgique,
  bus VIP Belgique, transport mariage Bruxelles, transfert aéroport Bruxelles,
  Mercedes Classe V / Classe S avec chauffeur.

## Performance

- Aucun framework, aucune dépendance npm. CSS et JS servis en deux fichiers.
- Images responsives (`srcset`/`sizes`) servies par le CDN Unsplash en `auto=format` (AVIF/WebP).
- Hero préchargé (`rel="preload"` + `fetchpriority="high"`), reste en `loading="lazy"`.
- Polices Google en `display=swap`, `preconnect` sur les origines externes.
- Cache immuable d'un an sur `/css`, `/js`, `/img` via `_headers`.

## Accessibilité

Navigation au clavier, lien d'évitement, `aria-expanded` sur les menus, contrastes vérifiés,
zones tactiles ≥ 44 px, et respect de `prefers-reduced-motion`.

## Images

Photographies **Unsplash** (Unsplash License — usage commercial autorisé, sans attribution obligatoire),
servies directement depuis `images.unsplash.com`. La liste est centralisée dans la constante `PHOTOS`
de `tools/layout.mjs` : remplacer un identifiant suffit à changer la photo partout.
Le jour où des photos réelles de la flotte seront disponibles, il suffira de les déposer dans `img/`
et d'adapter la fonction `photo()`.

## Déploiement

Site statique : déployer la racine du dépôt telle quelle.
`_headers` (en-têtes de sécurité + cache) et `_redirects` (301 depuis les anciennes URL WordPress)
sont pris en charge par Netlify et Cloudflare Pages.
