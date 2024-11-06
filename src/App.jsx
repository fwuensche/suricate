import Divider from "./components/Divider";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Order from "./components/Order";
import PaymentMethods from "./components/PaymentMethods";
import { useState } from "react";

function App() {
  const [orderItems, setOrderItems] = useState([]);

  const printOrder = () => {
    let specific_element = document.getElementById("order").innerHTML;
    let original_elements = document.body.innerHTML;

    document.body.innerHTML = specific_element;
    window.print();
    document.body.innerHTML = original_elements;
  };

  return (
    <div className="flex">
      <div className="w-3/4 p-8">
        <Header />
        <Menu setOrderItems={setOrderItems} />
        <Divider />
        <PaymentMethods />
      </div>
      <div className="w-1/4 p-8">
        <Order orderItems={orderItems} />
        <Divider />
        <button onClick={printOrder} className="btn-primary w-full">
          Imprimer
        </button>
      </div>
    </div>
  );
}

export default App;
