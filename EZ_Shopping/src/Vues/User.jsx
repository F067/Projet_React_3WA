import React from 'react'
import Formular from '../Components/Formular'
import Navigation from '../Components/Navigation'
import { Row, Col, Container } from 'react-bootstrap'


function User() {
  return (
    <Container >
      <Row>
        <Col>
          <Navigation />
        </Col>
      </Row>
      <Row>
        <Col>
          <Formular />
        </Col>
      </Row>
    </Container>
  )
}

export default User