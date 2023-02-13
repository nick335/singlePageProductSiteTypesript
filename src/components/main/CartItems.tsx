import React from 'react'
import product1 from '../../images/image-product-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

interface Cartprops {
  qtn: number
  clear:() => void;
  checkout:() => void;
}

export default function CartItems({qtn, clear, checkout}: Cartprops ) {
  const price = 125.00
  const quantity = qtn

  const total = price * quantity

  return (
    <div className='px-4 pt-5 pb-6'>
      <div className='flex justify-between items-center'>
        <img src={product1} alt='product' className='
        w-14 h-14 rounded-lg'/>
        <div>
          <h4 className='text-primaryText font-normal text-base'>Fall Limited Edition Sneakers</h4>
          <p className='text-primaryText'>$125.00 x {qtn} <span className='text-secondaryText font-bold ml-1.5'>${total}</span></p>
        </div>
        <FontAwesomeIcon icon={faTrash} className="text-red-500 cursor-pointer lg:text-primaryText lg:hover:text-red-500" onClick={clear}/>
      </div>
      <button className='mt-5 text-white bg-secondaryHighlight w-full py-3 font-bold rounded-lg ' onClick={checkout}>Check Out</button>
    </div>
  )
}
