import React from 'react'
import Formular from '../Components/Formular'
import Navigation from '../Components/Navigation'
import { Row, Col, Container } from 'react-bootstrap'


function User() {
  return (
    <div >
      <div>
        <Navigation />
      </div>
      <div>
        <Formular />
      </div>
    </div>
  )
}

export default User