export const PAYMENT_METHODS = ['CB', 'TR', 'Espèces']
export const MAX_CHARS = 16

export const MENU_ITEMS = [
  {
    section: 'Burgers',
    name: 'Le Suricate',
    price: 10.5,
    ingredients: [
      { name: 'Sauce Suricate', checked: true },
      { name: 'Haché de Boeuf', checked: true },
      { name: 'Oignons confits', checked: true },
      { name: 'Poitrine fumée', checked: true },
      { name: 'Cantal AOP', checked: true },
      { name: 'Salade', checked: true },
    ],
  },
  {
    section: 'Burgers',
    name: 'L Original',
    price: 10.5,
    ingredients: [
      { name: 'Sauce Suricate', checked: true },
      { name: 'Haché de Boeuf', checked: true },
      { name: 'Tomates séchées', checked: true },
      { name: 'Oignons frits', checked: true },
      { name: 'Cheddar', checked: true },
      { name: 'Salade', checked: true },
    ],
  },
  {
    section: 'Burgers',
    name: 'Suprême poulet',
    price: 10.5,
    ingredients: [
      { name: 'Sauce Suricate', checked: true },
      { name: 'Filet de Poulet', checked: true },
      { name: 'Oignons confits', checked: true },
      { name: 'Cantal AOP', checked: true },
      { name: 'Salade', checked: true },
    ],
  },
  {
    section: 'Burgers',
    name: 'Burger du Moment',
    price: 10.5,
    ingredients: [
      { name: 'Sauce Suricate', checked: true },
      { name: 'Haché de Boeuf', checked: true },
      { name: 'Emmental', checked: true },
      { name: 'Saucisse fumée', checked: true },
      { name: 'Oignons frits', checked: true },
      { name: 'Salade', checked: true },
    ],
  },
  {
    section: 'Burgers',
    name: 'Salade Poulet',
    price: 8.5,
    ingredients: [
      { name: 'Salade', checked: true },
      { name: 'tomates cerises', checked: true },
      { name: 'Copeaux Parm.', checked: true },
      { name: 'Tomates séchées', checked: true },
      { name: 'Oignons frits', checked: true },
      { name: 'Poulet Crousti.', checked: true },
    ],
  },
  {
    section: 'Burgers',
    name: 'Formule Sympa',
    price: 10,
    ingredients: [
      { name: 'Burger Malin', checked: true },
      { name: 'Sauce Suricate', checked: true },
      { name: 'Boeuf', checked: true },
      { name: 'Poulet', checked: true },
      { name: 'Cheddar', checked: true },
      { name: 'Oignons frits', checked: true },
      { name: 'Frites', checked: true },
    ],
  },
  { section: 'Accompagnements', name: 'Frites Fraîches', price: 3.5 },
  { section: 'Boissons', name: 'Cristaline', price: 1.5 },
  { section: 'Boissons', name: 'Eau Pétillante', price: 1.5 },
  { section: 'Boissons', name: 'Coca Cola', price: 2 },
  { section: 'Boissons', name: 'Coca Zéro', price: 2 },
  { section: 'Boissons', name: 'Ice tea', price: 2 },
  { section: 'Boissons', name: 'Oasis', price: 2 },
  { section: 'Desserts', name: 'Cookies Chocolat', price: 2 },
  { section: 'Desserts', name: 'Cookies Vanille', price: 2 },
  { section: 'Desserts', name: 'Mousse choco', price: 2 },
  { section: 'Desserts', name: 'Flan Vanille', price: 2 },
  { section: 'Supplement', name: 'Sup. viande ', price: 3 },
  { section: 'Supplement', name: 'Sup. Ingredient ', price: 1 },
  { section: 'Note de frais', name: '1 Repas', price: 16.5 },
  { section: 'Note de frais', name: '1 Repas complet', price: 33 },
]

const tooLongLabels = MENU_ITEMS.flatMap((item) => {
  const itemIssues = item.name.length > MAX_CHARS ? [`Menu item "${item.name}"`] : []

  const ingredientIssues =
    item.ingredients
      ?.filter((ingredient) => ingredient.name.length > MAX_CHARS)
      .map((ingredient) => `Ingredient "${ingredient.name}" in "${item.name}"`) ?? []

  return [...itemIssues, ...ingredientIssues]
})

if (tooLongLabels.length) {
  const message = [`Names must be under ${MAX_CHARS} characters:`, ...tooLongLabels].join('\n')
  if (typeof window !== 'undefined' && typeof window.alert === 'function') {
    window.alert(message)
  } else {
    console.warn(message)
  }
}

export const FORMULAS = [
  {
    name: 'Formule : Burger – Frites – Boisson',
    price: 14.5,
    sections: ['Burgers', 'Accompagnements', 'Boissons'],
  },
]
