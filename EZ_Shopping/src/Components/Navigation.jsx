import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function Navigation() {
    return (
        <div>
            <Navbar bg="warning" expand="lg">
                <Container>
                    <Navbar.Brand href="/">EZ Shopping</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/User">User</Nav.Link>
                            <Nav.Link href="/Basket">Basket</Nav.Link>
                            <NavDropdown title="Theme" id="basic-nav-dropdown">
                                <NavDropdown.Item>Dark</NavDropdown.Item>
                                <NavDropdown.Item>Light</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
{/* 

            <h1>Navigation</h1>
            <NavLink to="/User">
                Go to User page
            </NavLink>
            <br />
            <NavLink to="/Basket">
                Go to Basket page
            </NavLink>
            <br />
            <NavLink to="/">
                Go to Home page
            </NavLink> */}
        </div>

    )
}

export default Navigation