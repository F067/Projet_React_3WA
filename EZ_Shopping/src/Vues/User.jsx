import React from 'react'
import Formular from '../Components/Formular'
import Navigation from '../Components/Navigation'
import user from './Styles/user.css'

function User() {
  return (
    <div >
      <Navigation />
      <h1>User</h1>
      <div className='user-container'>
        <Formular />
      </div>
    </div>
  )
}

export default User