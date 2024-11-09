import { FORMULES } from '../config'
import { sum } from 'lodash-es'

export const getDiscounts = (orderItems) => {
  let discounts = 0

  FORMULES.forEach((formule) => {
    const isFormuleApplicable = formule.item_combinations.every((section) =>
      orderItems.some((item) => item.section === section)
    )

    if (isFormuleApplicable) {
      discounts += formule.discount
    }
  })

  return discounts
}

export const getTotalAmount = (orderItems) => {
  let fullAmount = sum(orderItems.map((item) => item.price))
  let totalDiscount = getDiscounts(orderItems)

  return fullAmount - totalDiscount
}
