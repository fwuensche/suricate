import Divider from './Divider'
import OrderItem from './OrderItem'
import OrderLine from './OrderLine'
import PropTypes from 'prop-types'
import { getAmounts } from '../models/order'

const Order = ({ orderItems, setOrderItems, customerName, paymentMethod }) => {
  const { subtotal, total, formulas } = getAmounts(orderItems)

  console.log('Formulas applied:', formulas)

  const onPrint = () => window.print()

  const removeItem = (index) => setOrderItems((prevItems) => prevItems.filter((_, i) => i !== index))

  return (
    <div id='order' className='flex flex-col gap-4'>
      <h1>Commande</h1>
      {customerName && (
        <h2>
          Client: <span className='uppercase'>{customerName}</span>
        </h2>
      )}
      {orderItems.map((item, index) => (
        <OrderItem
          key={index}
          item={item}
          index={index}
          removeItem={removeItem}
          inFormula={formulas.some((f) => f.items.includes(item))}
        />
      ))}
      <Divider />
      <OrderLine label='Sous-total' value={subtotal} variant='h3' />
      <OrderLine label='Total' value={total} variant='h3' />
      {paymentMethod && <h2>Paiement : {paymentMethod}</h2>}
      <div className='print:hidden'>
        <button onClick={onPrint} className='btn-primary w-full'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='w-4'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z'
            />
          </svg>
          Imprimer
        </button>
      </div>
    </div>
  )
}

Order.propTypes = {
  orderItems: PropTypes.array.isRequired,
  setOrderItems: PropTypes.func.isRequired,
  customerName: PropTypes.string,
  paymentMethod: PropTypes.string,
}

export default Order
