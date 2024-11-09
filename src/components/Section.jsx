import { MENU_ITEMS } from '../config'

const Section = ({ section, setOrderItems }) => {
  const menuItems = MENU_ITEMS.filter((item) => item.section === section)

  const addToOrder = (item) => setOrderItems((order) => [...order, item])

  return (
    <div className='flex'>
      <div className='w-1/4 flex items-center truncate'>
        <h3 className='uppercase text-ellipsis overflow-hidden'>{section}</h3>
      </div>

      <div className='grid grid-cols-4 gap-4 w-full'>
        {menuItems.map((item, index) => (
          <button onClick={() => addToOrder(item)} className='btn-lg' key={index}>
            {item.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Section
