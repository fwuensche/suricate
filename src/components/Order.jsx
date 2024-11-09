import Divider from './Divider'
import Ingredient from './Ingredient'
import { sum } from 'lodash-es'

const Order = ({ orderItems, paymentMethod, customerName }) => {
  const totalAmount = sum(orderItems.map((item) => item.price))

  const onPrint = () => {
    window.print()
  }

  return (
    <div id='order' className='flex flex-col gap-4'>
      <h1>Commande</h1>
      {customerName && (
        <h2>
          Client: <span className='uppercase'>{customerName}</span>
        </h2>
      )}
      {orderItems.map((item, index) => (
        <ul className='mt-3' key={index}>
          <li>
            {item.name} - {item.price} €
          </li>
          {item.ingredients && (
            <>
              {item.ingredients.map((ingredient, index) => (
                <Ingredient key={index} ingredient={ingredient} />
              ))}
            </>
          )}
        </ul>
      ))}
      <Divider />
      <h2>Total : {totalAmount} €</h2>
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
