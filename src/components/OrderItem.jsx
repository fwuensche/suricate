import Ingredient from './Ingredient'
import PropTypes from 'prop-types'
import { formatEuros } from '../models/order'

const OrderItem = ({ item, index, removeItem }) => {
  const handleRemoveItem = () => {
    if (window.confirm(`Êtes-vous sûr de vouloir supprimer cet article : ${item.name} ?`)) {
      removeItem(index)
    }
  }

  return (
    <div className='card'>
      <div className='flex justify-between'>
        <div className='font-bold'>
          {item.name} - {formatEuros(item.price)}
        </div>
        <button onClick={handleRemoveItem}>Supprimer</button>
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
}

export default OrderItem
