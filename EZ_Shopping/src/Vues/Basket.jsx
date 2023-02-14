import React from 'react'
import { NavLink } from 'react-router-dom'
import Navigation from '../Components/Navigation'

function Basket() {
  return (
    <div>
      <Navigation />
      <h1>Basket</h1>
      <NavLink to="/">
        Go to Home page
      </NavLink>
    </div>

  )
}

export default Basket