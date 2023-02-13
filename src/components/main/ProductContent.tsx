import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

interface Qtnprops {
  add:() => void;
  remove:(qtn: number) => void;
  qtn: number;
}

export default function ProductContent({add, remove, qtn}: Qtnprops ) {

  return (
    <section className='w-[90%] mx-auto mt-4  lg:w-[45%] lg:mt-0'>
      <strong className=' text-secondaryHighlight uppercase text-xs  font-bold tracking-widest'>sneaker company</strong>
      <h2 className='font-bold pt-1.5 text-3xl text-secondaryText lg:text-4xl lg:pt-3'>Fall Limited Edition Sneakers</h2>
      <p className='font-normal text-primaryText mt-1.5 lg:mt-3'>These low profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole.they will withstand everything the weather can offer.</p>
      <div className='flex items-center justify-between mt-6 lg:flex-col lg:justify-start lg:items-start'>
        <div className='flex items-center gap-3'>
          <h3 className='font-bold text-secondaryText text-2xl'>$125.00</h3>
          <p className=' bg-primaryHighlight px-2 text-secondaryHighlight font-bold text-sm rounded-md py-[1px]'>50%</p>
        </div>
        <h4 className='text-cancel opacity-80 line-through'>$250.00</h4>
      </div>
      <div className='w-full lg:flex items-center justify-between'>
        <div className=' bg-boxbg flex justify-between items-center w-full font-bold px-8 py-2.5 pb-3 mt-4 rounded-lg  lg:max-w-[200px] lg:px-5' >
            <span className=' text-2xl font-bold text-secondaryHighlight lg:cursor-pointer' onClick={() => remove(qtn)} >-</span> {qtn} <span className=' text-2xl font-bold text-secondaryHighlight lg:cursor-pointer' onClick={add}>+</span>
          </div>
        <button className='mt-4 w-full bg-secondaryHighlight text-primaryBg py-3 pb-3.5 rounded-lg shadow-lg shadow-primaryHighlight lg:max-w-[200px]' onClick={add}><FontAwesomeIcon icon={faCartShopping} className="mr-4" /> Add to cart</button>
      </div>
      
    </section>
  )
}
