import React from 'react'
import Nav from './header/Nav'
import DisplayCart from './main/DisplayCart'
import Main from './main/Main'
export default function PageTemplate() {

  const [menu, setMenu] = React.useState<boolean>(false)
  const [quantity, setQuantity] = React.useState<number>(0) 
  const [showCart, setShowCart] = React.useState<boolean>(false)
  function AddCart(): void {
    setQuantity(prevstate => {
      return prevstate + 1
    })
  }

  function ToggleShowCart(): void{
    setShowCart(prevstate => {
      return !prevstate
    })
  }

  function RemoveCart(qtn: number): void {
    if(qtn > 0){
      setQuantity(prevstate => {
          return prevstate - 1
      })
    }
    
  }

  function Togglemenu(): void{
    setMenu(prevState => !prevState)
  }

  function Clearcart(): void {
    setQuantity(0)
  }

  function Checkout(): void {
    setQuantity(0)
    setShowCart(false)
  }
  return (
    <div className={`${menu ? ' max-h-screen overflow-hidden': ''}`}>
      <Nav 
        toggle = {Togglemenu}
        show = {ToggleShowCart}
        menu = {menu}
        qtn = {quantity}
      />
      <DisplayCart 
        toggle = {ToggleShowCart}
        cart = {showCart}
        qtn = {quantity}
        clear = {Clearcart}
        checkout = {Checkout}
      />
      <Main 
        add = {AddCart}
        remove = {RemoveCart}
        qtn = {quantity}
      />
    </div>
  )
}
