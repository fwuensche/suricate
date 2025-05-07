import Ingredient from './Ingredient'
import PropTypes from 'prop-types'
import { formatEuros } from '../models/order'

const OrderItem = ({ item, index, removeItem, inFormula }) => {
  const handleRemoveItem = (e) => {
    removeItem(index)
  }

  return (
    <div>
      <div className={`card cursor-pointer ${inFormula ? 'border-2 border-blue-500' : ''}`} onClick={handleRemoveItem}>
        <div className='flex justify-between'>
          <span>{item.name}</span>
          <span>{formatEuros(item.price)}</span>
        </div>
      </div>
      {item.ingredients &&
        item.ingredients.map((ingredient, index) => <Ingredient key={index} ingredient={ingredient} />)}
    </div>
  )
}

OrderItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  removeItem: PropTypes.func.isRequired,
  inFormula: PropTypes.bool.isRequired,
}

export default OrderItem
