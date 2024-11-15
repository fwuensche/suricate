import { formatEuros } from '../models/order'

const OrderLine = ({ label, value, variant }) => {
  return (
    <div className={`flex justify-between ${variant}`}>
      <span>{label}</span>
      <span>{formatEuros(value)}</span>
    </div>
  )
}

export default OrderLine
