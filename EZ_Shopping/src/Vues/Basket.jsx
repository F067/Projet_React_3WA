import React from 'react'
import Click from '../Components/Click'
import Navigation from '../Components/Navigation'
import Items from '../Components/Items'
import { useSelector } from 'react-redux'

function Basket() {
  const profile = useSelector((state) => state.user.profile)

  return (
    <div>
      <div>
          <Navigation />
      </div>
      <div>
          <h1>Hi {profile == null ? "User" : profile.firstName} !</h1>
          <p>There are 0 items in your basket</p>
          <Click />
      </div>
      <div>
          <Items />
      </div>
    </div>

  )
}

export default Basket