import PropTypes from 'prop-types'
import { useState } from 'react'

const Ingredient = ({ ingredient, orderItems, setOrderItems }) => {
  const [isChecked, setIsChecked] = useState(ingredient.checked)

  const handleCheckboxChange = (e) => {
    e.stopPropagation()
    const newIsChecked = !isChecked
    setIsChecked(newIsChecked)

    // Find the order item that contains this ingredient
    setOrderItems(
      orderItems.map((item) => {
        if (item.ingredients && item.ingredients.includes(ingredient)) {
          // Update the ingredients array
          const newIngredients = item.ingredients.map((i) =>
            i.name === ingredient.name
              ? {
                  name: ingredient.name,
                  checked: newIsChecked,
                }
              : i
          )
          return {
            ...item,
            ingredients: newIngredients,
          }
        }
        return item
      })
    )
  }

  return (
    <div className='ml-6 flex items-center'>
      <label className='flex items-center cursor-pointer'>
        <input type='checkbox' className='mr-2' checked={isChecked} onChange={handleCheckboxChange} />
        <span className={!isChecked ? 'line-through' : ''}>{ingredient.name}</span>
      </label>
    </div>
  )
}

Ingredient.propTypes = {
  ingredient: PropTypes.shape({
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
  }).isRequired,
  orderItems: PropTypes.array.isRequired,
  setOrderItems: PropTypes.func.isRequired,
}

export default Ingredient
