import Logo from '../assets/suricate.png'

const Header = ({ customerName, setCustomerName }) => {
  const handleAddCustomer = () => {
    const name = prompt('Enter customer name:')
    if (name) setCustomerName(name)
  }

  const reloadPage = () => window.location.reload()

  return (
    <div className='mb-8 flex items-center gap-4'>
      <button onClick={reloadPage}>
        <img src={Logo} alt='Suricate logo' className='w-20 h-20 rounded-full' />
      </button>
      <h1>SURICATE</h1>
      <div className=''>
        {!customerName && (
          <button onClick={handleAddCustomer} className='btn-primary'>
            + Client
          </button>
        )}
      </div>
    </div>
  )
}

export default Header
