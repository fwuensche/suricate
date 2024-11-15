import PropTypes from 'prop-types'
import { formatEuros } from '../models/order'

const OrderLine = ({ label, value, variant }) => {
  return (
    <div className={`flex justify-between ${variant}`}>
      <span>{label}</span>
      <span>{formatEuros(value)}</span>
    </div>
  )
}

OrderLine.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  variant: PropTypes.string,
}

export default OrderLine
