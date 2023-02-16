import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap'


function Navigation() {
    const [isDark, setIsDark] = useState(false)
    const profile = useSelector((state) => state.user.profile)
    const navigate = useNavigate();

    const handleMode = () => {
        setIsDark(true)
    }



    return (
        <Container fluid>
            <Row className='NavBar-container'>
                <Col className='nav-left'>
                    <span onClick={() => navigate("/")}>EZ Shopping</span>
                </Col>
                <Col className='nav-right'>
                    <span onClick={() => navigate("/User")}>👱🏼‍♂️ {profile == null ? "User" : profile.firstName}</span>
                    <span onClick={() => navigate("/Basket")}>🛒 Basket</span>
                    <span onClick={handleMode}> {isDark ? "⚫️ Dark" : "⚪️ Light"}  </span>
                </Col>
            </Row>
        </Container>

    )
}

export default Navigation