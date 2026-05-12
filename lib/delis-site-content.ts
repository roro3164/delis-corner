/** Textes éditoriaux — coordonnées alignées sur [deliscorner.com](https://deliscorner.com/) (fiche Google / commande en ligne). */

export const aboutIntro = {
  kicker: "Montpellier",
  title: "Café de spécialité & sandwichs au quotidien",
  lead:
    "Deli’s Corner, c’est avant tout un coffee shop et une sandwicherie au cœur de Montpellier, entre la rue des Teissiers et la rue Saint-Paul. " +
    "On y vient pour un bon espresso, un latte maison, un matcha ou un frappé, autant que pour un sandwich généreux, une salade ou une formule déjeuner — le tout préparé avec des ingrédients frais et le goût du fait maison.",
};

export const aboutPillars: { title: string; text: string }[] = [
  {
    title: "Boissons & café",
    text:
      "Espresso, lattes et variantes vanille, miel, cannelle… matcha, chai, frappés, chocolat chaud et bien d’autres boissons pour accompagner la pause ou la journée.",
  },
  {
    title: "Sandwichs, salades & sides",
    text:
      "Pain brioché travaillé, garnitures travaillées chaque jour : sandwichs, salades, bowls et petites options salées pour compléter l’assiette.",
  },
  {
    title: "Un coin de quartier",
    text:
      "Un lieu simple pour s’arrêter entre deux courses, déjeuner en terrasse ou repartir avec une commande à emporter — l’adresse du quotidien, sans détour.",
  },
];

export type ContactLine = { label: string; value: string; href: string };

export const orderOnlineUrl = "https://deliscorner.com/order";
/** Réservation par téléphone (pas de lien web dédié sur deliscorner.com). */
export const reserveByPhoneHref = "tel:+33422913774";

/** Fiche Google Maps (partage ; pour ouvrir l’app ou le plan plein écran). */
export const mapsListingShareUrl = "https://share.google/lDYkZBtbuweol1WfT";

/** iframe Google Maps ; les liens share.google ne s’affichent pas en cadre intégré. */
export const mapsEmbedSrc =
  "https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1sDeli%27s+Corner+8+Rue+Saint-Paul+Montpellier";

export const practical = {
  hours: {
    title: "Horaires",
    lines: ["Lundi — fermé", "Mardi – dimanche — 10h – 17h"],
  },
  address: {
    title: "Adresse & accès",
    lines: [
      "Deli’s Corner",
      "8 rue Saint-Paul, 34000 Montpellier",
      "Entre la rue des Teissiers et la rue Saint-Paul — cœur de ville, accès piéton.",
    ],
  },
  contact: {
    title: "Contact & commande",
    lines: [
      { label: "Téléphone", value: "04 22 91 37 74", href: "tel:+33422913774" },
      { label: "Commande en ligne", value: "deliscorner.com", href: orderOnlineUrl },
      { label: "Itinéraire", value: "Ouvrir dans Google Maps", href: mapsListingShareUrl },
    ] satisfies ContactLine[],
  },
};

export const preFooterCta = {
  title: "Rendez-vous au Deli’s Corner",
  lead:
    "Café et sandwicherie à Montpellier — 8 rue Saint-Paul, entre la rue des Teissiers et Saint-Paul. " +
    "Commandez sur place ou en ligne, et venez goûter la carte du moment.",
};
