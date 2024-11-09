const Divider = ({ margin } = { margin: false }) => {
  return <hr className={`border-b-2 border-gray-200 ${margin ? 'my-4' : ''}`} />
}

export default Divider
