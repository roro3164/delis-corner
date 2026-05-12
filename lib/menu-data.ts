/** Contenu issu des cartes café & food (PDF) — site isolé Deli's Corner. */

export type MenuRow = { name: string; detail?: string; price?: string };

export const coffeeEspresso: MenuRow[] = [
  { name: "Espresso", detail: "", price: "2,00 €" },
  { name: "Double espresso / Doppio", price: "3,00 €" },
  { name: "Americano", detail: "Expresso allongé avec de l’eau", price: "2,00 €" },
  { name: "Cortado / Noisette", detail: "Expresso avec touche de lait", price: "2,20 €" },
  { name: "Ristretto", detail: "Espresso court", price: "2,00 €" },
  { name: "Cappuccino", detail: "Double espresso, poudre chocolat noir, lait", price: "4,50 €" },
  { name: "Hot chocolate", detail: "Chocolat en poudre, lait", price: "4,50 €" },
  { name: "Espresso tonic", detail: "Espresso, eau tonique et glaçons", price: "4,50 €" },
  { name: "Espresso martini", detail: "Espresso, vodka, Kahlua, sirop de sucre et glaçons", price: "9,00 €" },
  {
    name: "Thé Earl Grey",
    detail: "Et coffret de Noailles (10 variétés)",
    price: "4,00 €",
  },
];

export const coffeeLattes: MenuRow[] = [
  { name: "Latte", detail: "Expresso, lait chaud, mousse de lait", price: "4,00 €" },
  { name: "Spéculoos latte", detail: "Expresso, lait, sirop de spéculoos", price: "5,00 €" },
  { name: "Vanilla latte", detail: "Expresso, lait, sirop de vanille", price: "5,00 €" },
  { name: "Cinnamon latte", detail: "Expresso, lait, sirop de cannelle", price: "5,00 €" },
  { name: "Honey latte", detail: "Expresso, lait, sirop de miel", price: "5,00 €" },
  { name: "Pumpkin spice latte", detail: "Expresso, lait, sirop de citrouille épicée", price: "5,00 €" },
  { name: "Flat white", detail: "Double expresso, lait et micro mousse", price: "4,00 €" },
  { name: "Mocha / Moka", detail: "Expresso, chocolat noir, lait", price: "4,50 €" },
];

export const coffeeMatchaChai: MenuRow[] = [
  { name: "Matcha americano", detail: "Poudre de thé vert matcha, eau", price: "4,50 €" },
  { name: "Matcha latte", detail: "Poudre de thé vert matcha, lait", price: "5,00 €" },
  { name: "Spéculoos matcha latte", price: "5,50 €" },
  { name: "Cinnamon matcha latte", price: "6,00 €" },
  { name: "Vanilla matcha latte", price: "6,00 €" },
  { name: "Honey matcha latte", price: "6,00 €" },
  { name: "Pumpkin spice matcha latte", price: "6,00 €" },
  { name: "Dirty matcha latte", detail: "Expresso, matcha, lait", price: "6,00 €" },
  { name: "Matcha tonic", detail: "Matcha, eau tonique et glaçons", price: "6,00 €" },
  {
    name: "Matcha martini",
    detail: "Matcha, vodka, sirop sucre de canne, jus de pomme",
    price: "9,00 €",
  },
  { name: "Chai latte", detail: "Poudre de thé et d’épices chai, lait", price: "5,50 €" },
  { name: "Vanilla chai latte", price: "6,50 €" },
  { name: "Dirty chai latte", detail: "Expresso, chai, lait", price: "7,00 €" },
  { name: "Matcha chai latte", detail: "Matcha, thé chai, lait", price: "7,00 €" },
];

export const coffeeFrappe: MenuRow[] = [
  { name: "Café frappé", detail: "Expresso, eau, glaçons", price: "4,50 €" },
  { name: "Thé frappé / glacé", detail: "Thé, glaçons", price: "4,50 €" },
  { name: "Latte frappé", detail: "Expresso, lait, glaçons", price: "5,00 €" },
  { name: "Matcha frappé", detail: "Matcha, lait, glaçons", price: "6,00 €" },
  { name: "Chai latte frappé", detail: "Chai, lait, glaçons", price: "6,00 €" },
  { name: "Chocolat frappé", detail: "Chocolat en poudre, lait, glaçons", price: "6,00 €" },
];

export const coffeeOther: MenuRow[] = [
  { name: "Kombucha", detail: "Boisson fermentée préparée à partir de thé", price: "6,00 €" },
  { name: "Supplément chantilly", price: "0,50 €" },
  { name: "Supplément lait végétal (avoine)", price: "0,50 €" },
];

export const sandwichSalads: MenuRow[] = [
  {
    name: "Pulled pork",
    detail: "Iceberg, effiloché de porc aux épices, sauce barbecue, pickles, graines",
    price: "13 €",
  },
  {
    name: "César",
    detail: "Iceberg, tenders de poulet, œuf, bacon, grana padano, mayo aux herbes, graines",
    price: "13 €",
  },
  {
    name: "César végé",
    detail: "Iceberg, stick d’halloumi, œuf, grana padano, mayo aux herbes, graines",
    price: "15 €",
  },
  {
    name: "Saumon",
    detail: "Iceberg, saumon fumé, crème d’artichauts, cream cheese, graines",
    price: "14 €",
  },
  {
    name: "Pastrami",
    detail: "Iceberg, pastrami de bœuf, moutarde au miel, oignons frits",
    price: "15 €",
  },
  {
    name: "Croque truffe",
    detail: "Jambon, comté, tapenade truffée, graines",
    price: "16 €",
  },
  { name: "Hot dog", detail: "Saucisse Strasbourg, emmental, cheddar, ketchup, moutarde miel, oignons frits", price: "9 €" },
  { name: "Tuna", detail: "Iceberg, rillette de thon, pickles, graines", price: "9 €" },
  { name: "Poulet mayo", detail: "Iceberg, tenders poulet, grana padano, mayo, graines", price: "10 €" },
  { name: "Grilled cheese", detail: "Coppa, Taleggio, cornichons, oignons frits", price: "10 €" },
  {
    name: "Toast végé",
    detail: "Légumes du moment, burrata, crème balsamique, pickles, graines",
    price: "12 €",
  },
];

export const formulas: MenuRow[] = [
  { name: "Sandwich + potatoes ou dessert", price: "12 €" },
  { name: "Sandwich + potatoes & dessert", price: "15 €" },
  {
    name: "Au choix (formule)",
    detail: "Hot dog, poulet mayo, tuna ou grilled cheese",
  },
];

export const saladsBowl: MenuRow[] = [
  {
    name: "Salade César",
    detail: "Iceberg, tenders de poulet, œuf, grana padano, pickles, sauce césar, crème balsamique, oignons frits, graines",
    price: "16 €",
  },
  {
    name: "Salade végé",
    detail: "Iceberg, légumes du moment, burrata, pickles, vinaigrette, crème balsamique, graines",
    price: "16 €",
  },
];

export const sides: MenuRow[] = [
  {
    name: "Potatoes ou tenders poulet",
    detail:
      "Sauce au choix : mayo aux herbes, mayo spicy, deluxe, moutarde au miel, cream cheese citron, mayo, ketchup, barbecue, moutarde",
    price: "6 €",
  },
  {
    name: "Coleslaw",
    detail: "Choux blanc, choux rouge, carotte, mayo, cream cheese, graines",
    price: "4,50 €",
  },
];

export const allergenNotice =
  "Peuvent contenir des allergènes majeurs (gluten, fruits à coque, arachides, œufs, lait, soja, moutarde, sésame, poissons, crustacés, sulfites, lupin, mollusques). Pour toute information, adressez-vous à notre équipe.";

export const drinkFootnote = "Toutes nos boissons sont disponibles en version chaude ou froide.";
