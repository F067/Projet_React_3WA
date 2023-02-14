import React from 'react'
import { NavLink } from 'react-router-dom'
import Form from '../Components/Form'
import Navigation from '../Components/Navigation'

function User() {
  return (
    <div>
      <h1>User</h1>
      <Navigation />
      <Form />
    </div>
  )
}

export default User