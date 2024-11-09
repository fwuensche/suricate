import Divider from './Divider'
import { getDiscounts } from '../models/order'

const Discounts = ({ orderItems }) => {
  const discounts = getDiscounts(orderItems)

  if (discounts.length === 0) {
    return null
  }

  return (
    <div>
      <h2>Réductions</h2>
      {discounts.map((discount, index) => (
        <div key={index}>
          {discount.name} : -{discount.value} €
        </div>
      ))}
    </div>
  )
}

export default Discounts
