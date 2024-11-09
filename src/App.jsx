import Divider from './components/Divider'
import Header from './components/Header'
import Menu from './components/Menu'
import Order from './components/Order'
import PaymentMethods from './components/PaymentMethods'
import { useState } from 'react'

function App() {
  const [orderItems, setOrderItems] = useState([])
  const [paymentMethod, setPaymentMethod] = useState(null)

  const onPrint = () => window.print()

  return (
    <div className='flex'>
      <div className='w-3/4 p-8 print:hidden'>
        <Header />
        <Menu setOrderItems={setOrderItems} />
        <Divider />
        <PaymentMethods setPaymentMethod={setPaymentMethod} />
      </div>
      <div className='w-1/4 p-8'>
        <Order orderItems={orderItems} paymentMethod={paymentMethod} />
        <div className='print:hidden'>
          <Divider />
          <button onClick={onPrint} className='btn-primary w-full'>
            Imprimer
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
