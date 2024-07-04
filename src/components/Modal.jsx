import React from 'react'
import '../App.css'

function Modal(props) {

  

  return (
    <>
      <div className='modal-master'>
        <img className='modal-img' src={props.pImage} alt="" />
        <div className='modal-info-container'>
          <div className='modal-name'>{props.pName}</div>
          <div className='modal-price'>Price: ${props.pPrice}</div>
          <div className='modal-desc'>{props.pDesc}</div>
        </div>
        <button className='modal-btn' onClick={props.triggerModal}>X</button>
        <button onClick={()=> {props.addToCart(props.pName)}}>Add To Cart</button>
      </div>
    </>
  )
}

export default Modal