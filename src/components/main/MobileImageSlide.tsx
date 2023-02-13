import React from 'react'
import SimpleImageSlider from 'react-simple-image-slider'
import product1 from '../../images/image-product-1.jpg'
import product2 from '../../images/image-product-2.jpg'
import product3 from '../../images/image-product-3.jpg'
import product4 from '../../images/image-product-4.jpg'

export default function MobileImageSlide() {
  const images: any = [
    {url: product1},
    {url: product2},
    {url: product3},
    {url: product4},
  ]

  

  return (
    <div className='w-screen'>
      <SimpleImageSlider 
          images={images}
          showBullets={false}
          showNavs = {true}
          width={'100%'}
          height={310}
          navStyle={2}
          navSize={35}
          navMargin={2}
          loop={false}
          autoPlay={true}   
      />
    </div>
  )
}

