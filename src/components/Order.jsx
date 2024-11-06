import { sum } from "lodash-es";

const Order = ({ orderItems }) => {
  const totalAmount = sum(orderItems.map((item) => item.price));

  return (
    <div id="order">
      <h1>Récapitulatif de la commande</h1>
      <ul>
        {orderItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price} €
          </li>
        ))}
      </ul>
      <h2>Total : {totalAmount} €</h2>
    </div>
  );
};

export default Order;
