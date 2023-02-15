import React from 'react'
import user from './Styles/user.css'
import Formular from '../Components/Formular'
import Navigation from '../Components/Navigation'


function User() {
  return (
    <div >
      <Navigation />
      <div className='user-container'>
        <Formular />
      </div>
    </div>
  )
}

export default User