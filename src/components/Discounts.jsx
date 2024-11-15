import { getAmounts, getDiscounts } from '../models/order'

import Divider from './Divider'
import OrderLine from './OrderLine'
import PropTypes from 'prop-types'

const Discounts = ({ orderItems }) => {
  const discounts = getDiscounts(orderItems)
  const { subtotal, discount } = getAmounts(orderItems)

  if (discounts.length === 0) {
    return null
  }

  return (
    <>
      <OrderLine variant='h3' label='Sous-total' value={subtotal} />
      <Divider />
      {discounts.map((discount, index) => (
        <div key={index}>
          <OrderLine label={discount.name} value={-discount.value} />
        </div>
      ))}
      <OrderLine variant='h3' label='Total des réductions' value={-discount} />
      <Divider />
    </>
  )
}

Discounts.propTypes = {
  orderItems: PropTypes.array.isRequired,
}

export default Discounts
