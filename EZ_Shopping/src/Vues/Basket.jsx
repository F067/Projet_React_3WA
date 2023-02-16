import React from 'react'
import Click from '../Components/Click'
import Navigation from '../Components/Navigation'
import Items from '../Components/Items'
import { useSelector } from 'react-redux'
import { Row, Col, Container } from 'react-bootstrap'

function Basket() {
  const profile = useSelector((state) => state.user.profile)

  return (
    <Container fluid>
      <Row>
        <Col>
          <Navigation />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Hi {profile == null ? "User" : profile.firstName} !</h1>
          <p>There are 0 items in your basket</p>
          <Click />
        </Col>
      </Row>
      <Row>
        <Col>
          <Items />
        </Col>
      </Row>
    </Container>

  )
}

export default Basket