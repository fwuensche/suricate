import { MENU_ITEMS } from '../config'
import MenuSection from './MenuSection'
import { uniq } from 'lodash-es'

const SECTIONS = uniq(MENU_ITEMS.map((item) => item.section))

const Menu = ({ setOrderItems, orderItems }) => {
  return (
    <div className='flex flex-col gap-4'>
      {SECTIONS.map((section, index) => (
        <MenuSection key={index} section={section} setOrderItems={setOrderItems} orderItems={orderItems} />
      ))}
    </div>
  )
}

export default Menu
