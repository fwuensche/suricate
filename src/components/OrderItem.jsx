import Ingredient from './Ingredient'
import PropTypes from 'prop-types'
import { formatEuros } from '../models/order'

const OrderItem = ({ item, index, removeItem, inFormula }) => {
  const handleRemoveItem = () => removeItem(index)

  return (
    <div className={`card ${inFormula ? 'border-2 border-blue-500' : ''}`}>
      <div className='flex justify-between'>
        <div className='font-bold'>
          {item.name} - {formatEuros(item.price)}
        </div>
        <button onClick={handleRemoveItem}>✕</button>
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
