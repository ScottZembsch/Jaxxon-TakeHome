import React from 'react'

function Header(props) {

  const items = props.cart.length

  // LOG ITEMS FUNCTION // 
  const logItems = () => {
    console.log('Items In Cart: ', props.cart)
  }

  return (
    <>
      <div className='flex justify-between items-center ml-2 mr-2 mb-4 border-b-2'>
        <div className="text-6xl font-bold">Mock Store</div>
        <button className='border rounded-lg text-sm  w-32 h-9 justify-center mb-2  hover:bg-slate-50' onClick={logItems}>Cart: {items}</button>
      </div>
    </>
  )
}

export default Header