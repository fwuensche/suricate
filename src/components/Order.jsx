import Discounts from './Discounts'
import Divider from './Divider'
import OrderItem from './OrderItem'
import OrderLine from './OrderLine'
import { getAmounts } from '../models/order'

const Order = ({ orderItems, setOrderItems, customerName, paymentMethod }) => {
  const { total } = getAmounts(orderItems)

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
        <OrderItem key={index} item={item} index={index} removeItem={removeItem} />
      ))}
      <Divider />
      <Discounts orderItems={orderItems} />
      <OrderLine label='Total' value={total} variant='h3' />
      {paymentMethod && <h2>Paiement : {paymentMethod}</h2>}
      <div className='print:hidden'>
        <button onClick={onPrint} className='btn-primary w-full'>
          Imprimer
        </button>
      </div>
    </div>
  )
}

export default Order
