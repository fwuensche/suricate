export const PAYMENT_METHODS = ['CB', 'TR', 'Espèces']
export const MAX_CHARS = 16

export const MENU_ITEMS = [
  {
    section: 'Burgers',
    name: 'Le Suricate',
    price: 10.5,
    ingredients: [
      { name: 'Sauce Suricate', checked: true },
      { name: 'Haché de bœuf', checked: true },
      { name: 'Poitrine fumée', checked: true },
      { name: 'Oignons confits', checked: true },
      { name: 'Saint Nectaire', checked: true },
      { name: 'Mesclun', checked: true },
    ],
  },
  {
    section: 'Burgers',
    name: 'Suprême poulet',
    price: 10.5,
    ingredients: [
      { name: 'Sauce Curry', checked: true },
      { name: 'Filet de poulet', checked: true },
      { name: 'Oignons confits', checked: true },
      { name: 'Saint Nectaire', checked: true },
      { name: 'Mesclun', checked: true },
    ],
  },
  {
    section: 'Burgers',
    name: 'Burger du Moment',
    price: 10.5,
    ingredients: [
      { name: 'Sauce Suricate', checked: true },
      { name: 'Haché de Boeuf', checked: true },
      { name: 'Poitrine fumée', checked: true },
      { name: 'PDT', checked: true },
      { name: 'Reblochon', checked: true },
      { name: 'Mesclun', checked: true },
    ],
  },
  { section: 'Accompagnements', name: 'Frites Fraîches', price: 3.5 },
  { section: 'Boissons', name: 'Cristaline', price: 1.5 },
  { section: 'Boissons', name: 'Eau Perrier', price: 1.5 },
  { section: 'Boissons', name: 'Coca Cola', price: 2 },
  { section: 'Boissons', name: 'Coca Zéro', price: 2 },
  { section: 'Boissons', name: 'Ice tea', price: 2 },
  { section: 'Boissons', name: 'Oasis', price: 2 },
  { section: 'Desserts', name: 'Cookie Nutella', price: 3.5 },
  { section: 'Café', name: 'Café', price: 1.5 },
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
