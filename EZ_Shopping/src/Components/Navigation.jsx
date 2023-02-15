import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

function Navigation() {


    const profile = useSelector((state) => state.user.profile)
    const navigate = useNavigate();



    return (
        <div>
            <Navbar bg="warning" expand="lg">
                <Container>
                <span onClick={() => navigate("/")}>EZ Shopping</span>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <span onClick={() => navigate("/User")}>{profile ==null ? "User" : profile.firstName}</span>
                            <span onClick={() => navigate("/Basket")}>Basket</span>
                            <NavDropdown title="Theme" id="basic-nav-dropdown">
                                <NavDropdown.Item>Dark</NavDropdown.Item>
                                <NavDropdown.Item>Light</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    )
}

export default Navigation