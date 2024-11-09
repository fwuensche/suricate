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
    <div className='flex'>
      <div className='w-3/4 p-8 print:hidden'>
        <Header customerName={customerName} setCustomerName={setCustomerName} />
        <Divider margin />
        <Menu setOrderItems={setOrderItems} />
        <Divider margin />
        <PaymentMethods paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
      </div>
      <div className='w-1/4 p-8 print:w-full'>
        <Order orderItems={orderItems} paymentMethod={paymentMethod} customerName={customerName} />
      </div>
    </div>
  )
}

export default App
