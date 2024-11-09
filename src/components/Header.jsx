import Logo from '../assets/suricate.png'

const Header = () => {
  return (
    <div className='mb-8 flex items-center'>
      <a href={Logo} target='_blank' rel='noopener noreferrer'>
        <img src={Logo} alt='Suricate logo' className='w-20 h-20 mr-4 rounded-full' />
      </a>
      <h1>SURICATE</h1>
    </div>
  )
}

export default Header
