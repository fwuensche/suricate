import Divider from './Divider'
import Ingredient from './Ingredient'
import { sum } from 'lodash-es'

const Order = ({ orderItems, paymentMethod }) => {
  const totalAmount = sum(orderItems.map((item) => item.price))

  return (
    <div id='order'>
      <h1>Récapitulatif de la commande</h1>
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
      {paymentMethod && <h2>Moyen de paiement : {paymentMethod}</h2>}
    </div>
  )
}

export default Order
