import React from 'react'
import { Col } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { Card, Button, Form } from 'react-bootstrap';
import { removeOrder } from "../store/basketSlice";
import Click from './Click';

function BasketItem(props) {

    const dispatch = useDispatch();
    const basket = useSelector((state) => state.basket.orders);
    const qty = basket.find(e => e.product == props.product.id).quantity;
    console.log (qty)
    function removeItem(event){
        let id = event.target.id;
        dispatch(removeOrder({product: id}));
        console.log("on remove");
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
                <p>Quantity : {qty}</p>
                <Button variant="warning" id={props.product.id} onClick={removeItem}>Remove</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default BasketItem