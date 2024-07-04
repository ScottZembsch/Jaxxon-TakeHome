import React from 'react'
import '../App.css'

function Card(props) {

  function shortenTitle(title){
    if (title.length > 45){
      return title.slice(0,40) + '...'
    } else {
      return title;
    }
  }

  return (
    <div className="mb-4 w-96 border rounded-md flex flex-col items-center hover:shadow-lg transition duration-100 ease-in-out">
      <img className='h-80' src={props.pImage} alt="" />
      <div className='text-center'>{shortenTitle(props.pName)}</div>
      <div>${props.pPrice}</div>
      <div className='truncate w-11/12 mb-4'>{props.pDesc}</div>
      <button className=' border rounded-lg text-sm  w-32 h-8 justify-center mb-2'>View Details</button>
    </div>
  )
}

export default Card