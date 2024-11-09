import Divider from './Divider'
import { sum } from 'lodash-es'

const Order = ({ orderItems, paymentMethod }) => {
  const totalAmount = sum(orderItems.map((item) => item.price))

  return (
    <div id='order'>
      <h1>Récapitulatif de la commande</h1>
      <ul>
        {orderItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price} €
          </li>
        ))}
      </ul>
      <Divider />
      <h2>Total : {totalAmount} €</h2>
      {paymentMethod && <h2>Moyen de paiement : {paymentMethod}</h2>}
    </div>
  )
}

export default Order
