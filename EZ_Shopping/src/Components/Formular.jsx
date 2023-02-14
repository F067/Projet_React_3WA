import React from 'react'
import { Button, Form } from 'react-bootstrap';
import formular from './Styles/formular.css'

function Formular() {
    return (
        <div className='form-content'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Firstname</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Lastname</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="warning" type="submit">
                    Save
                </Button>
            </Form>
        </div>
    )
}

export default Formular