import ItemCount from './ItemCount'
import { PAYMENT_METHODS } from '../config'

const PaymentMethods = ({ paymentMethod, setPaymentMethod }) => {
  return (
    <div className='flex flex-col md:flex-row'>
      <div className='md:w-1/4 flex items-center'>
        <h3>PAIEMENT</h3>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-full rounded-md shadow-sm' role='group'>
        {PAYMENT_METHODS.map((method, index) => (
          <button key={index} type='button' className='btn-lg' onClick={() => setPaymentMethod(method)}>
            <div>{method}</div>
            <ItemCount count={paymentMethod === method ? 1 : 0} />
          </button>
        ))}
      </div>
    </div>
  )
}

export default PaymentMethods
