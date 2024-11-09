const Divider = ({ margin } = { margin: false }) => {
  return <hr className={`border-b-2 border-gray-200 ${margin ? 'my-8' : ''}`} />
}

export default Divider
