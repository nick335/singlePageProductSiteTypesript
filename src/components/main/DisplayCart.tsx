import React from 'react'
import close from '../../images/icon-close.svg'
import EmptyCart from './EmptyCart';
import CartItems from './CartItems';
interface Cartprops {
  toggle:() => void;
  cart: boolean;
  qtn: number;
  clear:() => void;
  checkout:() => void;
}

export default function DisplayCart({toggle, cart, qtn, clear, checkout}: Cartprops) {
  return (
    <div className={`absolute top-[80px] left-[4%] z-[15] w-[92%] bg-white rounded-xl shadow-2xl pt-3 lg:max-w-[345px] lg:left-[65%] lg:top-[70px]  ${ cart  ? 'block' : 'hidden'}`}>
      <div className=' px-5 border-b-2 border-boxbg pb-4 flex justify-between items-center'>
        <h3 className='font-bold text-secondaryText text-lg'>Cart</h3>
        <img src={close} alt="close-cart" onClick={toggle} className="lg:cursor-pointer"/>
      </div>
      {qtn > 0 ? <CartItems qtn = {qtn} clear = {clear} checkout = {checkout} /> : <EmptyCart /> }
    </div>
  )
}
