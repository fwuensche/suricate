import { PAYMENT_METHODS } from "../config";

const PaymentMethods = ({ setPaymentMethod }) => {
  return (
    <div className="flex">
      <div className="w-1/4 flex items-center">
        <h2>Moyen de paiement</h2>
      </div>
      <div className="grid grid-cols-4 gap-4 w-full">
        {PAYMENT_METHODS.map((method, index) => (
          <button
            className="btn-lg"
            key={index}
            onClick={() => setPaymentMethod(method)}
          >
            {method}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethods;
