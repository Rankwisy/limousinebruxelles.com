/** Assemble les deux bundles de langue et les outils de liens inter-langues. */
import fr from './locale-fr.mjs';
import en from './locale-en.mjs';
import { LANDINGS as frLandings, VEHICLES as frVehicles, LEGAL as frLegal } from './locale-fr-pages.mjs';
import { LANDINGS as enLandings, VEHICLES as enVehicles } from './locale-en-pages.mjs';
import { LEGAL as enLegal } from './locale-en-legal.mjs';
import { HUBS as frHubs } from './locale-fr-hubs.mjs';
import { HUBS as enHubs } from './locale-en-hubs.mjs';

fr.landings = frLandings;
fr.vehicles = frVehicles;
fr.legal = frLegal;
fr.hubs = frHubs;

en.landings = enLandings;
en.vehicles = enVehicles;
en.legal = enLegal;
en.hubs = enHubs;

/** Préfixe pour remonter à la racine depuis une page de cette langue. */
for (const L of [fr, en]) L.up = L.base ? '../' : '';

export const LOCALES = [fr, en];
export const BY_CODE = { fr, en };

/** Lien vers une page de la même langue. */
export const link = (L, key) => L.slugs[key] || key;

/** Lien vers la même page dans l'autre langue. */
export function crossLink(from, to, key) {
  const slug = to.slugs[key] || 'index.html';
  return from.base ? `${from.up}${to.base}${slug}` : `${to.base}${slug}`;
}

/** Clé de page à partir d'un slug (pour retrouver l'équivalent dans l'autre langue). */
export function keyOf(L, slug) {
  return Object.keys(L.slugs).find((k) => L.slugs[k] === slug);
}

/** URL absolue canonique. */
export const absUrl = (L, slug) =>
  `https://limousinebruxelles.com/${L.base}${slug === 'index.html' ? '' : slug}`;
