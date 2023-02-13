import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import logo from '../../images/logo.svg'
import user from '../../images/image-avatar.png'

interface Menuprops {
  toggle:() => void;
  show:() => void;
  menu: boolean
  qtn: number

}

export default function Nav({toggle,show, menu, qtn}: Menuprops ) {
  return (
    <header className=' w-[90%] mx-auto py-3 lg:py-0 lg:pt-6 lg:pb-6 lg:w-[82%] lg:border-b-2 lg:border-boxbg'>
      <nav className='flex items-center'>
        <div className={`lg:hidden mr-4 cursor-pointer ${menu ? 'fixed z-50 ' : ''}`}onClick={toggle}>
          <div className= {`h-[3px] w-7 bg-primaryText mb-1 transition-all ease-in-out duration-300 ${menu ? 'translate-y-[7px] rotate-45' : ''}`}  ></div>
          <div className={`h-[3px] w-7 bg-primaryText mb-1 transition-all ease-in-out duration-300 ${menu ? 'opacity-0' : ''}`}></div>
          <div className={`h-[3px] w-7 bg-primaryText transition-all ease-in-out duration-300 ${menu ? '-translate-y-[7px] -rotate-45' : '' }`}></div>
        </div>
        <img src={logo} alt="logo" className='object-contain'/>
        <div className={`lg:static lg:block lg:w-fit lg:h-fit absolute top-0 left-0 w-screen h-screen bg-secondaryText z-40 bg-opacity-75 ${menu ? 'block' : 'hidden'}`}>
          <ul className={`h-full w-[70%] lg:w-fit lg:pt-0 transition-all duration-300 delay-100 ease-in-out bg-primaryBg pt-36 pl-8 lg:flex lg:gap-6 lg:pl-16 ${menu ? 'animate-[comeout_0.5s_ease-in-out_0.1s_both]' : 'animate-[goout_0.5s_ease-in-out_both]'}`}>
            <li className='li-style'>Collections</li>
            <li className='li-style'>Men</li>
            <li className='li-style'>Women</li>
            <li className='li-style'>About</li>
            <li className='li-style'>Contact</li>
          </ul>
        </div>
        <div className='ml-auto mr-5 lg:mr-8 relative' onClick={show}>
          <FontAwesomeIcon icon={faCartShopping} className=" text-primaryText lg:cursor-pointer lg:hover:text-secondaryText"/>
          <div className=' absolute -top-1 -right-2 text-primaryBg px-2 z-10 py-[1px] text-[8px] rounded-l-full rounded-r-full bg-secondaryHighlight'>{qtn}</div>
        </div> 
        <div className='lg:cursor-pointer border-2 lg:hover:border-secondaryHighlight rounded-full transition-all ease-out duration-150 '>
          <img  src={user} alt="user-img" className='h-10 w-10'/>
        </div>
      </nav>
    </header>
  )
}