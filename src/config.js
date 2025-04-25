export const PAYMENT_METHODS = ['CB', 'Carte Restaurant', 'Espèces', 'Visa', 'Mastercard']

export const MENU_ITEMS = [
  {
    section: 'Burgers',
    name: "L'Original",
    price: 9,
    ingredients: [
      'Pain Maison',
      'Sauce Burger',
      'Haché de Bœuf façon bouchère',
      'Bacon fumé',
      'Tomates séchées confites',
      'Cheddar AOP',
      'Salade (Mesclun)',
    ],
  },
  {
    section: 'Burgers',
    name: 'Le Suricate',
    price: 9,
    ingredients: [
      'Pain Maison',
      'Sauce Béarnaise',
      'Haché de Bœuf façon bouchère',
      'Poitrine de Porc fumée',
      'Oignons confits',
      'Cantal jeune AOP',
    ],
  },
  {
    section: 'Burgers',
    name: 'Le Suprême poulet',
    price: 9,
    ingredients: ['Pain Maison', 'Sauce Mayo-Curry', 'Filet de poulet croustillant', 'Oignons confits', 'Cheddar AOP'],
  },
  {
    section: 'Burgers',
    name: 'Le Burger du Moment',
    price: 10,
    ingredients: [
      'Pain Maison',
      'Sauce Fromagère',
      'Haché de Bœuf façon bouchère',
      'Lardons fumés',
      'Pommes de terre',
      'Reblochon AOP',
    ],
  },
  { section: 'Accompagnements', name: 'Frites Fraîches', price: 3 },
  { section: 'Desserts', name: 'Dessert du jour "Maison"', price: 3 },
  { section: 'Boissons', name: 'Eau minérale 50 CL', price: 1 },
  { section: 'Boissons', name: 'Eau Perrier 33 CL', price: 1.5 },
  { section: 'Boissons', name: 'Coca Cola 33 CL', price: 2 },
  { section: 'Boissons', name: 'Coca Zéro 33 CL', price: 2 },
  { section: 'Boissons', name: 'Fuzetea 33 CL saveur pêche', price: 2 },
  { section: 'Boissons', name: 'Jus de fruits 33 CL', price: 2 },
  { section: 'Café', name: 'Café en grain', price: 1.5 },
]

export const FORMULAS = [
  {
    name: 'Formule : Burger – Frites – Boisson',
    price: 13,
    item_combination: ['Burgers', 'Accompagnements', 'Boissons'],
  },
]
