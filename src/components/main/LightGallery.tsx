import React from 'react'
import product1 from '../../images/image-product-1.jpg'
import product2 from '../../images/image-product-2.jpg'
import product3 from '../../images/image-product-3.jpg'
import product4 from '../../images/image-product-4.jpg'
import product1thumbnail from '../../images/image-product-1-thumbnail.jpg'
import product2thumbnail from '../../images/image-product-2-thumbnail.jpg'
import product3thumbnail from '../../images/image-product-3-thumbnail.jpg'
import product4thumbnail from '../../images/image-product-4-thumbnail.jpg'
import previous from '../../images/icon-previous.svg'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import next from '../../images/icon-next.svg'

interface Galleryporps {
  idx: number
  toggle: () => void;
  gallery: boolean
 }


export default function LightGallery({idx, toggle, gallery}: Galleryporps) {
  const [index, setIndex] = React.useState(idx)
  const images = [
    product1,
    product2,
    product3,
    product4
   ] 

   console.log(index)
   function SlideRight(){
    if(index < 3){
      setIndex(prevstate => {
        return prevstate + 1
      })
    }
   }
   function slideLeft(){
    if(index > 0){
      setIndex(prevstate => {
        return prevstate -1
      })
    }
   }
   function SetIndex(idx:number) {
    setIndex(idx)
  }
   const imgurl = images.map((each) => {
      return <div className=' inline-block w-[100%] rounded-xl'>
                <img src={each} alt={each} className='h-[400px] w-[100%]  object-fill inline-block' />
            </div>
    })
  return (
    <div className={`absolute top-0 left-0 w-screen h-screen overflow-hidden bg-black z-40 bg-opacity-70  ${ gallery ? 'block': 'hidden'}`}>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className=''>
        <div className={`overflow-hidden max-w-[450px] rounded-xl `}>
          <div className='whitespace-nowrap transition-all ease-linear duration-500 roounded-xl'
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
              {imgurl}
          </div>
          <div className=''>
            <FontAwesomeIcon icon={faXmark} className='absolute z-50 -top-[30px] right-0 text-2xl text-white cursor-pointer' onClick={toggle} />
            <div className='absolute top-[40%] -left-4 w-8 h-8 bg-boxbg flex justify-center cursor-pointer items-center rounded-full -translate-y-1/2' onClick={slideLeft}>
              <img src={previous}  alt='previous'/>
            </div>
            <div className='absolute top-[40%] -right-4 w-8 h-8 bg-boxbg flex justify-center items-center rounded-full -translate-y-1/2 cursor-pointer' onClick={SlideRight}>
             <img src={next}  alt='next' className='' /> 
            </div> 
          </div>
        </div>
          <div className='flex mt-4 justify-between px-4'>
            <div className={`${index === 0 ? 'selected' : ''}`}>
              <img className='thumbnail' src={product1thumbnail} alt="thumbnail" onClick={() => SetIndex(0)}/>
            </div>
            <div className={`${index === 1 ? 'selected' : ''}`}>
              <img className='thumbnail' src={product2thumbnail} alt="thumbnail" onClick={() => SetIndex(1)}/>
            </div>
            <div className={`${index === 2 ? 'selected' : ''}`}>
              <img className='thumbnail' src={product3thumbnail} alt="thumbnail" onClick={() => SetIndex(2)}/>
            </div>
            <div className={`${index === 3 ? 'selected' : ''}`}>
              <img className='thumbnail' src={product4thumbnail} alt="thumbnail" onClick={() => SetIndex(3)}/>
            </div> 
          </div>
        </div>
        
      </div>
    </div>
  )
}
