/**
 * Visuels alignés sur le catalogue en ligne (API menu Delicity = même source que
 * deliscorner.com/order). Régénérer lib/delicity-product-images.json avec
 * `npm run sync:menu` dans apps/delis-corner.
 */
import delicityCatalog from "./delicity-product-images.json";
import {
  coffeeEspresso,
  coffeeFrappe,
  coffeeLattes,
  coffeeMatchaChai,
  coffeeOther,
  formulas,
  saladsBowl,
  sandwichSalads,
  sides,
  type MenuRow,
} from "./menu-data";

type CatalogEntry = { image: string | null; price: string | null };

const catalog = delicityCatalog as Record<string, CatalogEntry>;

/** Bannière commerce (défaut si l’API n’a pas encore de photo produit). */
const FALLBACK_IMAGE =
  "https://delicity.b-cdn.net/public/merchants/delis-corner/banner/7IsqkQAV1OGw_ZXKzfMY8FbCEm_base.jpeg?width=900&aspect_ratio=4:3&format=webp";

/**
 * Noms menu-data (PDF) → clés API, si la casse/orthographe ne suffit pas
 * (recherche insensible à la casse en priorité).
 */
const NAME_TO_API: Record<string, string> = {
  "Mocha / Moka": "Mocha",
  "Sandwich + potatoes ou dessert": "Formule Sandwich + Potatoes",
  "Sandwich + potatoes & dessert": "Formule Sandwich + Potatoes",
};

function apiNameForLocalName(local: string): string {
  if (NAME_TO_API[local]) {
    return NAME_TO_API[local]!;
  }
  const k = Object.keys(catalog).find((key) => key.toLowerCase() === local.trim().toLowerCase());
  if (k) {
    return k;
  }
  return local;
}

function imageUrlForLocalRow(row: MenuRow): string {
  const key = apiNameForLocalName(row.name);
  const entry = catalog[key];
  if (entry?.image) {
    return entry.image;
  }
  return FALLBACK_IMAGE;
}

export function withOrderImages(rows: MenuRow[]) {
  return rows.map((row) => ({ ...row, imageUrl: imageUrlForLocalRow(row) }));
}

/** L’entrée unique « Potatoes ou tenders » côté PDF est 2 fiches côté commande. */
const sidesShowcaseRows: MenuRow[] = (() => {
  const s0 = sides[0]!;
  const c = sides[1]!;
  return [
    { name: "Potatoes", detail: s0.detail, price: s0.price },
    { name: "Tenders de Poulet", detail: s0.detail, price: s0.price },
    { name: c.name, detail: c.detail, price: c.price },
  ];
})();

export const showcaseSandwiches = withOrderImages(sandwichSalads);
export const showcaseSalads = withOrderImages(saladsBowl);
export const showcaseSides = withOrderImages(sidesShowcaseRows);
export const showcaseEspresso = withOrderImages(coffeeEspresso);
export const showcaseLattes = withOrderImages(coffeeLattes);
export const showcaseMatchaChai = withOrderImages(coffeeMatchaChai);
export const showcaseFrappe = withOrderImages(coffeeFrappe);
export const showcaseOtherDrinks = withOrderImages(coffeeOther);
export const showcaseFormulas = withOrderImages(formulas);

export type DishWithPhoto = MenuRow & { imageUrl: string };