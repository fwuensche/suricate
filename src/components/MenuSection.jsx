import { MENU_ITEMS } from '../config'
import MenuItem from './MenuItem'

const MenuSection = ({ section, setOrderItems, orderItems }) => {
  const menuItems = MENU_ITEMS.filter((item) => item.section === section)

  const addToOrder = (item) => setOrderItems((order) => [...order, item])

  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='lg:w-1/4 flex items-center truncate'>
        <h3 className='uppercase text-ellipsis overflow-hidden'>{section}</h3>
      </div>

      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
        {menuItems.map((item, index) => (
          <MenuItem key={index} item={item} addToOrder={addToOrder} orderItems={orderItems} />
        ))}
      </div>
    </div>
  )
}

export default MenuSection
