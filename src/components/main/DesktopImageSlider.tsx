import React from 'react'
import product1 from '../../images/image-product-1.jpg'
import product2 from '../../images/image-product-2.jpg'
import product3 from '../../images/image-product-3.jpg'
import product4 from '../../images/image-product-4.jpg'
import product1thumbnail from '../../images/image-product-1-thumbnail.jpg'
import product2thumbnail from '../../images/image-product-2-thumbnail.jpg'
import product3thumbnail from '../../images/image-product-3-thumbnail.jpg'
import product4thumbnail from '../../images/image-product-4-thumbnail.jpg'
import { LightgalleryItem } from "react-lightgallery";
import LightGallery from './LightGallery'





export default function DesktopImageSlider() {
   const [index, setIndex] = React.useState(0)
   const [lightgallery, setLightgallery] = React.useState(false)

   const images = [
    product1,
    product2,
    product3,
    product4
   ] 
   console.log(index)
   const imgurl = images.map((each) => {
     return <div className=' inline-block w-[100%] rounded-xl'>
                <img src={each} alt={each} className='h-[400px] w-[100%] rounded-xl object-fill inline-block' onClick={toggleGallery} />
            </div>
   })


  function SetIndex(idx:number) {
    setIndex(idx)
  }
  function toggleGallery(){
    setLightgallery(prevstate => !prevstate)
  }

  return (
    <div className=' w-[45%]'>
      <div className={`overflow-hidden max-w-[100%] rounded-xl `}>
        <div className='whitespace-nowrap transition-all ease-linear duration-500 roounded-xl'
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
            {imgurl}
        </div>
      </div>
      <div className='flex items-center justify-between mt-3'>
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
      <LightGallery 
          idx = {index}
          toggle = {toggleGallery}
          gallery = {lightgallery} 
      />
    </div>
    
  )
}
