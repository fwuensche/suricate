export const PAYMENT_METHODS = ['CB', 'Carte Restaurant', 'Espèces']

export const MENU_ITEMS = [
  {
    section: 'Burgers',
    name: "L'Original",
    price: 9.5,
    ingredients: [
      { name: 'Sauce Burger', checked: true },
      { name: 'Haché de Boeuf', checked: true },
      { name: 'Bacon fumé', checked: true },
      { name: 'Tomates confites', checked: true },
      { name: 'Cheddar AOP', checked: true },
      { name: 'Ciboulette', checked: true },
    ],
  },
  {
    section: 'Burgers',
    name: 'Le Suricate',
    price: 9.5,
    ingredients: [
      { name: 'Sauce Mayo-Ail', checked: true },
      { name: 'Haché de Boeuf', checked: true },
      { name: 'Poitrine de Porc', checked: true },
      { name: 'Oignons confits', checked: true },
      { name: 'Cantal jeune AOP', checked: true },
    ],
  },
  {
    section: 'Burgers',
    name: 'Le Suprême poulet',
    price: 9.5,
    ingredients: [
      { name: 'Pain Maison', checked: true },
      { name: 'Sauce Mayo-Curry', checked: true },
      { name: 'Filet de poulet', checked: true },
      { name: 'Oignons confits', checked: true },
      { name: 'Cheddar AOP', checked: true },
    ],
  },
  {
    section: 'Burgers',
    name: 'Le Burger du Moment',
    price: 9.5,
    ingredients: [
      { name: 'Pain Maison', checked: true },
      { name: 'Sauce Mayo-Miel', checked: true },
      { name: 'Haché de Boeuf', checked: true },
      { name: 'Tomates confites', checked: true },
      { name: 'Oignons confits', checked: true },
      { name: 'Fromage de chèvre', checked: true },
    ],
  },
  { section: 'Accompagnements', name: 'Frites Fraîches', price: 3.5 },
  { section: 'Boissons', name: 'Eau minérale 50 CL', price: 1.5 },
  { section: 'Boissons', name: 'Eau Perrier 33 CL', price: 1.5 },
  { section: 'Boissons', name: 'Coca Cola 33 CL', price: 2 },
  { section: 'Boissons', name: 'Coca Zéro 33 CL', price: 2 },
  { section: 'Boissons', name: 'Ice tea 33 CL saveur pêche', price: 2 },
  { section: 'Boissons', name: 'Jus de fruits 33 CL', price: 2 },
  { section: 'Café', name: 'Café en grain', price: 1.5 },
  { section: 'Desserts', name: 'Dessert du jour', price: 3.5 },
]

export const FORMULAS = [
  {
    name: 'Formule : Burger – Frites – Boisson',
    price: 13,
    sections: ['Burgers', 'Accompagnements', 'Boissons'],
  },
]
