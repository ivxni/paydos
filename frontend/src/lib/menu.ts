// ============================================================
//  Menükarte — structured menu data (source: menuekarte.md).
//  Prices kept in German format with the € suffix.
// ============================================================

export type MenuItem = {
  name: string;
  price: string;
  desc?: string;
};

export type MenuGroup = {
  title: string;
  items: MenuItem[];
};

export type MenuCategory = {
  id: string;
  title: string;
  /** short German line shown under the category heading */
  blurb: string;
  groups: MenuGroup[];
};

export const MENU: MenuCategory[] = [
  {
    id: "shishas",
    title: "Shishas",
    blurb: "Handgepackt, langsam, rund. Moderne Kreationen und die Klassiker.",
    groups: [
      {
        title: "Moderne Shishas",
        items: [
          { name: "Snoop Dogg Purple Passion", price: "18,00 €", desc: "Traube, Beeren" },
          { name: "Snoop Dogg Doggy's Delight", price: "18,00 €", desc: "Mango, Passionsfrucht" },
          { name: "Snoop Dogg Cloud 92", price: "18,00 €", desc: "Melone, Maracuja" },
          { name: "African Queen", price: "16,00 €", desc: "Fruchtmix, Mango, Maracuja" },
          { name: "Bonnie 'n Clyde", price: "16,00 €", desc: "Beerenmix, Traube, süß" },
          { name: "Blaulicht", price: "16,00 €", desc: "Blaubeere, Menthol" },
          { name: "Bruderherz", price: "16,00 €", desc: "Beeren, Zitrus, frisch" },
          { name: "Sommer in Beirut", price: "16,00 €", desc: "Zitrone, Minze, frisch" },
          { name: "Löwenherz", price: "16,00 €", desc: "Beeren, Traube, kräftig" },
          { name: "Nightkiller", price: "16,00 €", desc: "Brombeere, Minze, kühl" },
          { name: "Massiv", price: "16,00 €", desc: "Beeren, Zitrus, intensiv" },
          { name: "Handgemacht & Illegal", price: "16,00 €", desc: "Beeren, Zitrone, frisch" },
          { name: "Black Box", price: "16,00 €", desc: "Trauben-Beerenmix" },
          { name: "Golden Anna", price: "16,00 €", desc: "Ananas, Mango" },
          { name: "Faney", price: "16,00 €", desc: "Beerenmix, Vanille" },
          { name: "Okolom", price: "16,00 €", desc: "Beerenmix, Zitrus" },
          { name: "Cinderella", price: "16,00 €", desc: "Pfirsich, Beerenmix" },
          { name: "Lemon Chill", price: "16,00 €", desc: "Zitrone, Menthol, kühl" },
          { name: "Quwi Punch", price: "16,00 €", desc: "Kiwi, Beerenmix" },
          { name: "Bloody Punch", price: "16,00 €", desc: "Kirsche, Beerenmix" },
          { name: "Peery Punch", price: "16,00 €", desc: "Birne, Apfel" },
          { name: "Wild Punch", price: "16,00 €", desc: "Beerenmix, Zitrus" },
          { name: "Watermill Punch", price: "16,00 €", desc: "Wassermelone, Minze" },
          { name: "Watermelon Chill", price: "16,00 €", desc: "Wassermelone, Menthol" },
          { name: "Cold Peach", price: "16,00 €", desc: "Ice, Pfirsich" },
          { name: "Mr John", price: "16,00 €", desc: "Traube, Minze" },
          { name: "Ice Kaktuz", price: "16,00 €", desc: "Kaktus, Limette" },
          { name: "FFM", price: "16,00 €", desc: "Traube, Minze" },
          { name: "Love66", price: "16,00 €", desc: "Maracuja, Honigmelone, Minze" },
          { name: "Rasporn", price: "16,00 €", desc: "Himbeere, Menthol" },
          { name: "Sexy Sheba", price: "16,00 €", desc: "Beerenmix, Mango" },
          { name: "Hidden Hacker", price: "16,00 €", desc: "Apfel, Minze" },
          { name: "040 Hamburg", price: "16,00 €", desc: "Minze, Menthol" },
          { name: "Pistachio Cream", price: "16,00 €", desc: "Pistazie, Vanille" },
          { name: "Green Mind Fresh", price: "16,00 €", desc: "Minze, Limette" },
        ],
      },
      {
        title: "Traditionelle Shishas",
        items: [
          { name: "Traube Minze", price: "16,00 €" },
          { name: "Falim Red", price: "16,00 €" },
          { name: "Falim", price: "16,00 €" },
          { name: "Doppelapfel", price: "16,00 €" },
          { name: "Persischer Apfel", price: "16,00 €" },
          { name: "Black Nana", price: "16,00 €" },
        ],
      },
    ],
  },
  {
    id: "getraenke",
    title: "Getränke",
    blurb: "Von eiskalt bis dampfend heiß – plus alkoholfreie Mocktails.",
    groups: [
      {
        title: "Softdrinks",
        items: [
          { name: "Alwa Wasser Naturelle", price: "3,10 €", desc: "0,25 L" },
          { name: "Alwa Wasser Classic", price: "3,10 €", desc: "0,25 L" },
          { name: "Red Bull", price: "4,50 €", desc: "0,25 L · Verschiedene Sorten" },
          { name: "Elephant Bay", price: "4,50 €", desc: "Verschiedene Sorten" },
          { name: "Coca-Cola", price: "3,30 €", desc: "0,2 L" },
          { name: "Coca-Cola Zero", price: "3,30 €", desc: "0,2 L" },
          { name: "Paulaner Spezi", price: "4,50 €", desc: "0,33 L" },
          { name: "Paulaner Spezi Zero", price: "4,50 €", desc: "0,33 L" },
          { name: "Moloko", price: "4,50 €", desc: "0,25 L" },
          { name: "Moloko Sugarfree", price: "4,50 €", desc: "0,25 L" },
          { name: "Moloko Blueberry Acai", price: "4,50 €", desc: "0,25 L" },
          { name: "Fanta", price: "3,30 €", desc: "0,2 L" },
          { name: "Sprite", price: "3,30 €", desc: "0,2 L" },
          { name: "Orangina", price: "3,80 €", desc: "0,25 L" },
          { name: "Churchill", price: "3,40 €" },
          { name: "Churchill Groß", price: "4,20 €" },
          { name: "Effect Energy Black Acai", price: "4,50 €", desc: "0,25 L" },
          { name: "Schweppes Bitter Lemon", price: "3,30 €", desc: "0,2 L" },
          { name: "Schweppes Ginger Ale", price: "3,30 €", desc: "0,2 L" },
        ],
      },
      {
        title: "Heißgetränke",
        items: [
          { name: "Kaffee", price: "3,50 €" },
          { name: "Espresso", price: "2,80 €" },
          { name: "Espresso Doppio", price: "3,80 €" },
          { name: "Espresso Macchiato", price: "3,20 €" },
          { name: "Cappuccino", price: "3,80 €" },
          { name: "Latte Macchiato", price: "4,20 €" },
          { name: "Çay klein", price: "1,80 €", desc: "Türkischer Schwarztee" },
          { name: "Çay groß", price: "2,50 €", desc: "Türkischer Schwarztee" },
          { name: "Türk Kahvesi", price: "3,20 €", desc: "Türkischer Kaffee" },
          { name: "Salep", price: "5,50 €" },
          { name: "Heiße Schokolade", price: "3,60 €" },
          { name: "Früchtetee", price: "6,40 €", desc: "Teekanne" },
          { name: "Kräutertee", price: "6,40 €", desc: "Teekanne" },
          {
            name: "Frischer Tee",
            price: "6,80 €",
            desc: "Ingwer/Minze, Ingwer/Zitrone oder Zitrone/Minze",
          },
        ],
      },
      {
        title: "Mocktails",
        items: [
          { name: "Paydos Spezial", price: "8,00 €", desc: "Black Acai, Limette, Minze" },
          { name: "Peach Tea Cup", price: "7,50 €" },
          { name: "Virgin Mojito", price: "7,50 €", desc: "Limette, Minze" },
          { name: "Virgin Mango Mojito", price: "8,00 €", desc: "Mango, Limette, Minze" },
          { name: "Virgin Raspberry Mojito", price: "8,00 €", desc: "Himbeere, Limette, Minze" },
          { name: "Virgin Pina", price: "7,50 €", desc: "Kokos, Ananas" },
          { name: "Coconut Kiss", price: "7,50 €", desc: "Kokos, Ananas, Orange" },
          { name: "Coco Choco", price: "7,50 €", desc: "Kokos, Schokolade" },
          { name: "Five Fruit", price: "7,50 €", desc: "Fruchtmix" },
        ],
      },
      {
        title: "Säfte",
        items: [
          { name: "Kiba", price: "4,20 €", desc: "0,3 L" },
          { name: "Apfelsaft", price: "4,20 €", desc: "0,3 L" },
          { name: "Orangensaft", price: "4,20 €", desc: "0,3 L" },
          { name: "Ananassaft", price: "4,20 €", desc: "0,3 L" },
          { name: "Maracujasaft", price: "4,20 €", desc: "0,3 L" },
          { name: "Bananennektar", price: "4,20 €", desc: "0,3 L" },
          { name: "Kirschsaft", price: "4,20 €", desc: "0,3 L" },
        ],
      },
      {
        title: "Coffee Fellows · Eiskaffee & Eismatcha",
        items: [
          { name: "Double Cappuccino", price: "4,50 €" },
          { name: "Caramel Latte", price: "4,50 €" },
          { name: "Caffè Latte", price: "4,50 €" },
          { name: "Mango Matcha Latte", price: "4,50 €" },
          { name: "Strawberry Matcha Latte", price: "4,50 €" },
          { name: "Vanille Matcha Latte", price: "4,50 €" },
        ],
      },
    ],
  },
  {
    id: "snacks",
    title: "Snacks",
    blurb: "Kleinigkeiten und herzhafte Baguettes für zwischendurch.",
    groups: [
      {
        title: "Snacks",
        items: [
          { name: "Small Tortillas", price: "3,90 €", desc: "Mit einem Dip nach Wahl" },
          { name: "Big Tortillas", price: "5,90 €", desc: "Mit zwei Dips nach Wahl" },
          { name: "Karışık Çerez", price: "4,20 €", desc: "Snackmix salzig (Nüsse u. a.)" },
          { name: "SnackMix Süß", price: "3,50 €", desc: "Gummibärchen" },
          { name: "Choco Peanuts", price: "3,50 €", desc: "Schoko, Nuss" },
          { name: "Salzstangen / Salzbrezel", price: "2,50 €" },
          { name: "Chips", price: "3,50 €" },
        ],
      },
      {
        title: "Baguettes",
        items: [
          {
            name: "Sucuk-Baguette",
            price: "7,90 €",
            desc: "Sesam, Sucuk von Egetürk, Gouda, Spezialsoße",
          },
          {
            name: "Putenbrust-Baguette",
            price: "7,90 €",
            desc: "Putenbrust, Mozzarella, Kräutersoße",
          },
          {
            name: "Kebab Style Cheese & Onion",
            price: "7,90 €",
            desc: "Hähnchen, Gouda, Knoblauchcreme, Zwiebel",
          },
          {
            name: "Käse-Baguette",
            price: "7,90 €",
            desc: "Emmentaler, Mozzarella, Tomaten-Kräutersoße",
          },
          { name: "Cocktailsoße", price: "0,50 €" },
          { name: "Knoblauchsoße", price: "0,50 €" },
        ],
      },
    ],
  },
];
