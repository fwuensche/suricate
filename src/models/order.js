import { FORMULAS } from '../config'
import { sum } from 'lodash-es'

export const getDiscounts = (orderItems) => {
  // Expand the order items into individual items
  let unusedItems = []
  orderItems.forEach((item) => {
    unusedItems.push({ ...item }) // Clone the item
  })

  // Cache for memoization
  const memo = new Map()

  // Helper function to create a unique key for memoization
  const createKey = (items) => {
    return items
      .map((item) => item.name + item.section)
      .sort()
      .join(',')
  }

  // Recursive function to find the optimal discounts
  const findOptimalDiscounts = (remainingItems) => {
    const key = createKey(remainingItems)
    if (memo.has(key)) {
      return memo.get(key)
    }

    let bestDiscounts = []
    let maxTotalDiscount = 0

    for (let formula of FORMULAS) {
      // Try to apply the formula to the remaining items
      let tempItems = [...remainingItems]
      let usedItems = []

      let canApplyFormula = formula.item_combination.every((section) => {
        let index = tempItems.findIndex((item) => item.section === section)
        if (index !== -1) {
          usedItems.push(tempItems.splice(index, 1)[0])
          return true
        }
        return false
      })

      if (canApplyFormula) {
        // Recursively find the best discounts with the remaining items
        let { discounts: nextDiscounts, totalDiscount: nextTotalDiscount } = findOptimalDiscounts(tempItems)

        let currentDiscounts = [{ name: formula.name, value: formula.discount }, ...nextDiscounts]
        let currentTotalDiscount = formula.discount + nextTotalDiscount

        // Update the best discounts if current total discount is higher
        if (currentTotalDiscount > maxTotalDiscount) {
          bestDiscounts = currentDiscounts
          maxTotalDiscount = currentTotalDiscount
        }
      }
    }

    // Also consider the case where no more formulas can be applied
    const result = {
      discounts: bestDiscounts,
      totalDiscount: maxTotalDiscount,
    }

    memo.set(key, result)
    return result
  }

  // Start the recursion with all unused items
  const { discounts } = findOptimalDiscounts(unusedItems)

  return discounts
}

export const getTotalAmount = (orderItems) => {
  let fullAmount = sum(orderItems.map((item) => item.price))
  let discounts = getDiscounts(orderItems)
  let totalDiscount = sum(discounts.map((discount) => discount.value))

  return fullAmount - totalDiscount
}
