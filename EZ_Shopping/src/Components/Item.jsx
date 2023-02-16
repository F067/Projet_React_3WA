import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { Card, Button, Form } from 'react-bootstrap';
import { addOrder } from "../store/basketSlice";

function Item(props) {

    const dispatch = useDispatch();
    const [number, setNumber] = useState(0);
    
    function addToBasket(event){

        let id = event.target.id;

        dispatch(addOrder({product: id, quantity: parseInt(number)}))
    }

    function handleChange(event){
        
        setNumber(event.target.value);
    }

    return (
        <Col xs={6}>
            <Card style={{ width: '25rem' }} key={props.product.id}>
                <Card.Img variant="top" src={props.product.image} />
                <Card.Body>
                <Card.Title>{props.product.title}</Card.Title>
                <Card.Text className='category'>{props.product.category}</Card.Text>
                <Card.Text>
                    {props.product.description}
                </Card.Text>
                <Card.Text className='price'>${props.product.price}</Card.Text>
                <div><p>Quantity :</p><Form.Control type="number" onChange={handleChange} value={number} /></div>
                <Button variant="warning" id={props.product.id} onClick={addToBasket}>Add to basket</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Item