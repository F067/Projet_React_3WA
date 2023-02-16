import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap';
import { updateProfile } from '../store/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap'

function Formular() {

    const dispatch = useDispatch()
    const profile = useSelector((state) => state.user.profile)

    //garder la valeur des inputs
    const [firstName, setFirstName] = useState(!profile ? "" : profile.firstName)
    const [lastName, setLastName] = useState(!profile ? "" : profile.lastName)
    const [email, setEmail] = useState(!profile ? "" : profile.email)

    // à chaque changement d'etat du redux (profile) on attribue la bonne value
    useEffect(() => {
        if (profile != null) {
            setFirstName(profile.firstName)
            setLastName(profile.lastName)
            setEmail(profile.email)
        }
    }, [profile])


    const handleProfile = (e) => {
        e.preventDefault()
        //construction de l'objet => nouvel etat de redux (profile) et qui s'enregistrera dans le local storage
        let user = {
            firstName: firstName,
            lastName: lastName,
            email: email
        }
        localStorage.setItem("user", JSON.stringify(user))
        dispatch(updateProfile(user))
    }

    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1>Hi {profile == null ? "User" : profile.firstName}</h1>
                    <h2>Customize your profile here</h2>
                </Col>

            </Row>
            <Row>
                <Col>
                    <Form onSubmit={handleProfile}>
                        <Form.Group className="mb-3">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Firstname ..." />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Your Lastname</Form.Label>
                            <Form.Control type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Lastname ..." />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Your Email</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email ..." />
                        </Form.Group>

                        <Button variant="warning" type="submit">
                            Save
                        </Button>
                    </Form>
                </Col>
            </Row>

        </Container>
    )
}

export default Formular