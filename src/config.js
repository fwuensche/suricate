export const PAYMENT_METHODS = ['CB', 'TR', 'Espèces']

export const MENU_ITEMS = [
  {
    section: 'Burgers',
    name: "L'Original",
    price: 10.5,
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
    price: 10.5,
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
    price: 10.5,
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
    price: 10.5,
    ingredients: [
      { name: 'Pain Maison', checked: true },
      { name: 'Sauce Mayo-Miel', checked: true },
      { name: 'Haché de Boeuf', checked: true },
      { name: 'Tomates confites', checked: true },
      { name: 'Oignons confits', checked: true },
      { name: 'Fromage de chèvre', checked: true },
      { name: 'Salade Roquette', checked: true },
    ],
  },
  { section: 'Accompagnements', name: 'Frites', price: 3.5 },
  { section: 'Boissons', name: 'Eau', price: 1.5 },
  { section: 'Boissons', name: 'Perrier', price: 1.5 },
  { section: 'Boissons', name: 'Coca Cola', price: 2 },
  { section: 'Boissons', name: 'Coca Zéro', price: 2 },
  { section: 'Boissons', name: 'Oasis', price: 2 },
  { section: 'Boissons', name: 'Jus de fruits', price: 2 },
  { section: 'Desserts', name: 'Dessert', price: 3.5 },
  { section: 'Café', name: 'Café', price: 1.5 },
]

export const FORMULAS = [
  {
    name: 'Formule : Burger – Frites – Boisson',
    price: 14,
    sections: ['Burgers', 'Accompagnements', 'Boissons'],
  },
]
