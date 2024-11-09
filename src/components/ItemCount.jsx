const ItemCount = ({ count }) => {
  return (
    <div className='flex mt-2'>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className='w-4 h-4 bg-black mr-1'></div>
      ))}
    </div>
  )
}

export default ItemCount
