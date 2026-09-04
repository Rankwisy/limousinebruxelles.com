# Aurum — Limousine Bruxelles

**limousinebruxelles.com**

Site vitrine statique (HTML/CSS/JS, sans framework ni dépendance) pour **Aurum — Limousine Bruxelles** :
location de limousines, voitures avec chauffeur, minivans, minibus et autocars à Bruxelles et en Belgique.

Bilingue : **français (fr-BE)** à la racine, **anglais américain (en-US)** sous `/en/`.
Contact unique : **info@limousinebruxelles.com**
(aucun numéro de téléphone ni adresse postale n'est publié).

## Langues

| Langue | Chemin | Public visé |
|---|---|---|
| `fr-BE` | `/` | Clientèle belge et francophone |
| `en-US` | `/en/` | Voyageurs anglophones **à destination** de la Belgique : arrivées à Brussels Airport, institutions européennes, congrès, mariages, groupes en tournée |

- Chaque page existe dans les deux langues et pointe vers son équivalent via `hreflang`
  (`fr-BE`, `en-US`, `x-default` → français), y compris dans le `sitemap.xml`.
- Sélecteur de langue dans la navigation, avec drapeaux **SVG** (les emoji drapeaux
  ne s'affichent pas sous Windows) : 🇧🇪 FR et 🇺🇸 EN.
- Les slugs sont traduits et optimisés par langue : `location-autocar-belgique.html`
  ↔ `en/bus-rental-belgium.html`.

> **Portée réaliste du référencement anglais.** Ces pages visent les recherches en anglais
> **liées à la Belgique** (« bus rental Brussels », « Brussels airport transfer »,
> « charter bus Belgium »). Elles ne peuvent pas se positionner sur des requêtes locales
> américaines (« bus rental near me » depuis Chicago) : Google résout ces recherches
> géographiquement vers des opérateurs locaux.

## Découvrabilité par les IA

- `llms.txt` à la racine : résumé factuel du service, capacités, tarifs indicatifs,
  aéroports desservis et liste des pages, pour les moteurs de réponse.
- `robots.txt` autorise explicitement `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`,
  `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended` et `CCBot`.
- FAQ en `FAQPage` JSON-LD sur la quasi-totalité des pages : réponses factuelles et
  courtes, directement citables par un assistant.

---

## Structure

```
├── index.html …                Site français (19 pages) à la racine
├── en/index.html …             Site anglais (19 pages)
│
├── css/style.css               Design system (noir / anthracite / blanc / or)
├── js/main.js                  Navigation, révélations au scroll, formulaire
├── img/                        Logo, favicon, visuels autocar et minibus
├── tools/                      Générateur (voir ci-dessous)
├── sitemap.xml                 36 URL, avec alternates hreflang
├── robots.txt · llms.txt       Indexation et moteurs de réponse IA
├── site.webmanifest
└── _headers · _redirects       Netlify / Cloudflare Pages
```

## Générer le site

Toutes les pages HTML de la racine sont **générées** : elles partagent un seul gabarit
(en-tête, navigation, pied de page, données structurées) afin d'éviter la duplication.

```bash
node tools/build.mjs
```

| Fichier | Rôle |
|---|---|
| `tools/site.mjs` | Constantes globales et catalogue des photos |
| `tools/locales.mjs` | Assemble les langues, liens inter-langues, URL canoniques |
| `tools/locale-fr*.mjs` | Tout le contenu français (chrome, sections, pages, mentions légales) |
| `tools/locale-en*.mjs` | Tout le contenu anglais, même structure |
| `tools/layout.mjs` | Gabarit HTML, navigation, sélecteur de langue, hreflang, JSON-LD |
| `tools/blocks.mjs` | Sections réutilisables (hero, services, flotte, tarifs, contact…) |
| `tools/pages.mjs` | Assemble les pages d'une langue à partir de son bundle |
| `tools/build.mjs` | Écrit les 38 pages + sitemap, robots, llms.txt, `_headers`, `_redirects` |
| `tools/serve.mjs` | Serveur statique local : `node tools/serve.mjs 4321` |

**Ne pas modifier les fichiers `.html` générés à la main** : ils sont écrasés au prochain build.
Le contenu se modifie dans `tools/locale-fr*.mjs` et `tools/locale-en*.mjs`.
Ajouter une langue (le néerlandais, par exemple) revient à copier un bundle et à l'ajouter
dans `tools/locales.mjs` — le reste suit automatiquement : navigation, hreflang, sitemap, JSON-LD.

## Formulaire de devis — activation

Le formulaire poste vers **FormSubmit** (`https://formsubmit.co/info@limousinebruxelles.com`),
un relais qui transfère les demandes par e-mail sans backend.

> **À faire une seule fois après la mise en ligne :** envoyer le formulaire une première fois.
> FormSubmit adresse un e-mail de confirmation à `info@limousinebruxelles.com` ;
> il suffit de cliquer sur le lien d'activation. Les demandes suivantes arrivent directement dans la boîte.

Après envoi, le visiteur est redirigé vers `merci.html` (FR) ou `en/thank-you.html` (EN).
Un lien `mailto:` direct est présent sur toutes les pages en solution de repli.

Pour changer de service (Formspree, Web3Forms, fonction serverless…), modifier l'attribut
`action` dans `quoteForm()` (`tools/layout.mjs`) et la directive `form-action` du fichier `_headers`.

## SEO

- Titres et méta-descriptions uniques par page **et par langue**, calibrés (≤ 65 et ≤ 165 caractères).
- Un seul `<h1>` par page, hiérarchie `h2`/`h3` sémantique.
- Données structurées JSON-LD : `LocalBusiness`/`LimousineService`, `WebPage`, `Service`,
  `BreadcrumbList`, `FAQPage`, `OfferCatalog`.
- `sitemap.xml` avec alternates `hreflang`, `robots.txt` et `llms.txt` générés automatiquement.
- Attributs `alt` descriptifs sur toutes les images, `loading="lazy"` hors hero.
- Mots-clés cibles : location limousine Bruxelles, limousine avec chauffeur Bruxelles,
  chauffeur privé Bruxelles, location minibus Bruxelles, location autocar Belgique,
  bus VIP Belgique, transport mariage Bruxelles, transfert aéroport Bruxelles,
  Mercedes Classe V / Classe S avec chauffeur.
- Mots-clés anglais : bus rental Brussels, charter bus Belgium, Brussels airport transfer,
  private chauffeur Brussels, limousine service Brussels, minibus rental Brussels,
  group transportation Brussels, Mercedes V-Class / S-Class chauffeur.

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

Deux sources, déclarées dans la constante `PHOTOS` de `tools/site.mjs`.

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
