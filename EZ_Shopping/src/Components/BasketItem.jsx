import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { removeOrder } from "../store/basketSlice";
import styled from "styled-components"

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
        <CardBasket key={props.product.id}>
            <img src={props.product.image} />
            <div className='details'>
                <h2>{props.product.title}</h2>
                <span className='category'>{props.product.category}</span>
                <p>
                    {props.product.description}
                </p>
                <div className='price-quantity'>
                    <h2>${props.product.price}</h2>
                    <span>Quantity : {qty}</span>
                    <button variant="warning" id={props.product.id} onClick={removeItem}>Remove</button>
                </div>

            </div>
        </CardBasket>
    )
}

export default BasketItem


const CardBasket = styled.div`
border-top: solid grey;
padding-top: 2rem;
margin-top: 2rem;
height: 400px;
width: 50%;
display: flex;
justify-content: space-between;
align-items: center;
overflow: hidden;


img{
    height: 100%;
}

.details{
    padding: 2rem;
}
span.category{

    background-color: #c0c0c0;
    color: #8b8b8b
    padding: 0 1rem;
}

.price-quantity{
    display:flex;
    flex-direction: column;
}

button{
    background-color: #FFCA2C;
    font-size: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    outline: none;
    -webkit-user-select: none;
    text-decoration: none;
    cursor: pointer;
    border-style: none;
    width: 6rem;
    margin-top : 1rem;
}
`
