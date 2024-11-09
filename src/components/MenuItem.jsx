import ItemCount from './ItemCount'

const MenuItem = ({ item, addToOrder, orderItems }) => {
  const itemCount = orderItems.filter((orderItem) => orderItem.name === item.name).length

  return (
    <button onClick={() => addToOrder(item)} className='btn-lg'>
      <div>{item.name}</div>
      <ItemCount count={itemCount} />
    </button>
  )
}

export default MenuItem
