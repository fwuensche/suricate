import Divider from "./components/Divider";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Order from "./components/Order";
import PaymentMethods from "./components/PaymentMethods";
import { useState } from "react";

function App() {
  const [orderItems, setOrderItems] = useState([]);

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
      </div>
    </div>
  );
}

export default App;
