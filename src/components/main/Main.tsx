import React from 'react'
import MobileImageSlide from './MobileImageSlide'
import ProductContent from './ProductContent'
import DesktopImageSlider from './DesktopImageSlider'

interface Qtnprops {
  add:() => void;
  remove:(qtn: number) => void;
  qtn: number;
}

export default function Main({add, remove, qtn}: Qtnprops) {
  const [screenSize, getDimension] = React.useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });

  function setDimension(){
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }
  
  React.useEffect(() => {
    window.addEventListener('resize', setDimension);
    return(() => {
      window.removeEventListener('resize', setDimension);
     })
  }, [screenSize])

  return (
    <main className='lg:w-[72%] lg:mx-auto lg:flex items-center gap-[10%] lg:mt-6'>
      {screenSize.dynamicWidth > 768 ? <DesktopImageSlider /> : <MobileImageSlide />}
      <ProductContent 
        add = {add}
        remove = {remove}
        qtn = {qtn}
      
      />
    </main>
  )
}
