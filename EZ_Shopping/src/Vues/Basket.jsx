import React from 'react'
import { NavLink } from 'react-router-dom'

function Basket() {
  return (
    <div>
      <h1>Basket</h1>
      <NavLink to="/">
        Go to Home page
      </NavLink>
    </div>

  )
}

export default Basket