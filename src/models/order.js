import { FORMULAS } from '../config'
import { sum, sortBy } from 'lodash-es'

/**
 * Returns the lowest total plus the formulas used.
 * @param {Array<{id:string,name:string,section:string,price:number}>} orderItems
 */
function getBestPossiblePrice(orderItems = []) {
  let remainingItems = [...orderItems]
  const applied = []

  // Keep applying formulas as long as possible
  while (true) {
    let bestFormula = null
    let bestPicks = null
    let bestSavings = 0

    // Iterate over all formulas to find the best one to apply
    for (const f of FORMULAS) {
      const picks = f.sections.map(
        (sec) =>
          sortBy(
            remainingItems.filter((i) => i.section === sec),
            'price'
          )[0]
      )

      // Skip if any section is missing
      if (picks.some((p) => !p)) continue

      const fullPrice = sum(picks.map((p) => p.price))
      const savings = fullPrice - f.price

      if (savings > bestSavings) {
        bestSavings = savings
        bestFormula = f
        bestPicks = picks
      }
    }

    // If no formula can be applied, break the loop
    if (!bestFormula) break

    // Apply the best formula found
    applied.push({ name: bestFormula.name, items: bestPicks })
    remainingItems = remainingItems.filter((i) => !bestPicks.includes(i))
  }

  const bestPrice =
    sum(applied.map((a) => FORMULAS.find((f) => f.name === a.name).price)) + sum(remainingItems.map((i) => i.price))

  return { bestPrice, formulas: applied }
}

export function getAmounts(orderItems) {
  const subtotal = sum(orderItems.map((i) => i.price))
  const { bestPrice, formulas } = getBestPossiblePrice(orderItems)
  const total = Math.min(bestPrice, subtotal)
  return { subtotal, total, formulas }
}

export function formatEuros(amount) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount)
}
