import Divider from './components/Divider'
import Header from './components/Header'
import Menu from './components/Menu'
import Order from './components/Order'
import PaymentMethods from './components/PaymentMethods'
import { useState } from 'react'

function App() {
  const [orderItems, setOrderItems] = useState([])
  const [paymentMethod, setPaymentMethod] = useState(null)
  const [customerName, setCustomerName] = useState('')

  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='w-full lg:w-3/4 p-8 print:hidden'>
        <Header setCustomerName={setCustomerName} />
        <Divider margin />
        <Menu setOrderItems={setOrderItems} orderItems={orderItems} />
        <Divider margin />
        <PaymentMethods paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
      </div>
      <div className='w-full lg:w-1/4 p-8 print:w-full'>
        <Order
          orderItems={orderItems}
          paymentMethod={paymentMethod}
          customerName={customerName}
          setOrderItems={setOrderItems}
        />
      </div>
    </div>
  )
}

export default App
