import { FORMULAS } from '../config'
import { sum } from 'lodash-es'

export const getDiscounts = (orderItems) => {
  let discounts = []

  FORMULAS.forEach((formula) => {
    // Count how many items in the order match each required section
    let sectionCounts = formula.item_combination.map((section) => {
      return orderItems.filter((item) => item.section === section).length
    })

    // Determine how many times the formula can be applied
    let timesApplicable = Math.min(...sectionCounts)

    if (timesApplicable > 0) {
      // Push the discount into the array as many times as it's applicable
      for (let i = 0; i < timesApplicable; i++) {
        discounts.push({
          name: formula.name,
          value: formula.discount,
        })
      }
    }
  })

  return discounts
}

export const getTotalAmount = (orderItems) => {
  let fullAmount = sum(orderItems.map((item) => item.price))
  let discounts = getDiscounts(orderItems)
  let totalDiscount = sum(discounts.map((discount) => discount.value))

  return fullAmount - totalDiscount
}
