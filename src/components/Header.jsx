import Logo from '../assets/suricate.png'
import PropTypes from 'prop-types'

const Header = ({ customerName, setCustomerName }) => {
  const handleAddCustomer = () => {
    const name = prompt('Enter customer name:')
    if (name) setCustomerName(name)
  }

  const reloadPage = () => window.location.reload()

  return (
    <div className='mb-8 flex items-center gap-4'>
      <button onClick={reloadPage}>
        <img src={Logo} alt='Suricate logo' className='h-20 rounded-full' />
      </button>
      <div className='flex gap-3'>
        <button onClick={reloadPage} className='btn-light'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='w-4'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99'
            />
          </svg>
          Nouvelle commande
        </button>
        <button onClick={handleAddCustomer} className='btn-primary'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='w-4'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z'
            />
          </svg>
          Client
        </button>
      </div>
    </div>
  )
}

Header.propTypes = {
  customerName: PropTypes.string,
  setCustomerName: PropTypes.func.isRequired,
}

export default Header
