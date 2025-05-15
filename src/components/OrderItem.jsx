import Ingredient from './Ingredient'
import PropTypes from 'prop-types'
import { formatEuros } from '../models/order'

const OrderItem = ({ item, index, removeItem, inFormula, orderItems, setOrderItems }) => {
  const handleRemoveItem = () => removeItem(index)

  return (
    <div>
      <div
        className={`card print:p-0 cursor-pointer print:border-none ${inFormula ? 'border-2 border-blue-500' : ''}`}
        onClick={handleRemoveItem}
      >
        <div className='flex justify-between'>
          <span>{item.name}</span>
          <span>{formatEuros(item.price)}</span>
        </div>
      </div>
      {item.ingredients &&
        item.ingredients.map((ingredient, index) => (
          <Ingredient key={index} ingredient={ingredient} orderItems={orderItems} setOrderItems={setOrderItems} />
        ))}
    </div>
  )
}

OrderItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  removeItem: PropTypes.func.isRequired,
  inFormula: PropTypes.bool.isRequired,
  orderItems: PropTypes.array.isRequired,
  setOrderItems: PropTypes.func.isRequired,
}

export default OrderItem
