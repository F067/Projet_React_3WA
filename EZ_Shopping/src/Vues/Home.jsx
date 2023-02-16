import React from 'react'
import Items from '../Components/Items'
import Navigation from "../Components/Navigation"
import { Row, Col, Container } from 'react-bootstrap'

function Home() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Navigation />
                </Col>
            </Row>
            <Row>
                <Items />
            </Row>
        </Container>
    )
}

export default Home