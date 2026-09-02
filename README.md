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

Deux sources, déclarées dans la constante `PHOTOS` de `tools/layout.mjs`.

**Fichiers locaux (`img/`)** — véhicules de groupe. Générés par IA pour représenter des
véhicules réellement utilisés en Belgique, avec plaque d'immatriculation belge
(1-ABC-123, caractères rouges sur fond blanc, bande UE « B ») :

| Fichier | Sujet |
|---|---|
| `autocar-vip-bruxelles` | Autocar de grand tourisme sans livrée, rue de Bruxelles |
| `autocar-grand-place-bruxelles` | Autocar devant les façades de la Grand-Place |
| `minibus-bruxelles` | Minibus noir type Sprinter, rue bruxelloise |
| `autocar-interieur` | Intérieur d'autocar, cuir matelassé et surpiqûres dorées |

Chaque visuel existe en deux largeurs (`-800.jpg` et `-1600.jpg`) servies via `srcset`.

> **Ce sont des images d'illustration, pas des photos de la flotte réelle.**
> Elles doivent être remplacées par de vraies photographies des véhicules dès que
> celles-ci sont disponibles : déposer les fichiers dans `img/` en respectant le
> suffixe `-800` / `-1600`, aucune autre modification n'est nécessaire.

**Photographies Unsplash** — berlines, chauffeur, intérieurs, décors bruxellois
(Unsplash License : usage commercial autorisé, sans attribution obligatoire), servies
depuis `images.unsplash.com`. Remplacer un identifiant dans `PHOTOS` suffit à changer
la photo sur tout le site.

## Déploiement

Site statique : déployer la racine du dépôt telle quelle.
`_headers` (en-têtes de sécurité + cache) et `_redirects` (301 depuis les anciennes URL WordPress)
sont pris en charge par Netlify et Cloudflare Pages.
