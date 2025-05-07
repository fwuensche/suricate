import { useState } from 'react'

const Ingredient = ({ ingredient }) => {
  const [isChecked, setIsChecked] = useState(true)

  const handleCheckboxChange = (e) => {
    e.stopPropagation()
    setIsChecked(!isChecked)
  }

  return (
    <div className='ml-6 flex items-center'>
      <label className='flex items-center cursor-pointer'>
        <input type='checkbox' className='mr-2' checked={isChecked} onChange={handleCheckboxChange} />
        <span className={!isChecked ? 'line-through' : ''}>{ingredient}</span>
      </label>
    </div>
  )
}

export default Ingredient
