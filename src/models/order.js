import { FORMULES } from '../config'
import { sum } from 'lodash-es'

export const getDiscounts = (orderItems) => {
  let discounts = []

  FORMULES.forEach((formule) => {
    const isFormuleApplicable = formule.item_combinations.every((section) =>
      orderItems.some((item) => item.section === section)
    )

    if (isFormuleApplicable) {
      discounts.push({ name: formule.name, value: formule.discount })
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
