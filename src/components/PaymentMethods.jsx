import ItemCount from './ItemCount'
import { PAYMENT_METHODS } from '../config'
import PropTypes from 'prop-types'

const PaymentMethods = ({ paymentMethod, setPaymentMethod }) => {
  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='lg:w-1/4 flex items-center'>
        <h3>PAIEMENT</h3>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 w-full rounded-md shadow-sm' role='group'>
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

PaymentMethods.propTypes = {
  paymentMethod: PropTypes.string,
  setPaymentMethod: PropTypes.func.isRequired,
}

export default PaymentMethods
