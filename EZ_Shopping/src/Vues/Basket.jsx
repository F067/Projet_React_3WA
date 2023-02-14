import React from 'react'
import Click from '../Components/Click'
import Navigation from '../Components/Navigation'
import Items from '../Components/Items'
import basket from './Styles/basket.css'


function Basket() {
  return (
    <div>
      <Navigation />
      <div className='basket-title'>
        <h1>Hi USER !</h1>
        <p>Ther are 0 items in your basket</p>
        <Click />
      </div>
      <div className='article-basket-container'>
        <Items/>
      </div>

    </div>

  )
}

export default Basket