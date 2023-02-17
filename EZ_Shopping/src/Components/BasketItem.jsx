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
            <img src={props.product.image}/>
            <div>
                <h2>{props.product.title}</h2>
                <span>{props.product.category}</span>
                <p>
                    {props.product.description}
                </p>
                <span>${props.product.price}</span>
                <span>Quantity : {qty}</span>
                <button variant="warning" id={props.product.id} onClick={removeItem}>Remove</button>
            </div>
        </CardBasket>
    )
}

export default BasketItem


const CardBasket = styled.div`

margin: 30px
display: flex;
justify-content: center;
height: 700px;
width: 100px;
box-shadow: 00 20px 8px #d0d0d0
border: medium solid black;

img{
    width: 300px
}

button{
    background-color: #FFCA2C;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    outline: none;
    -webkit-user-select: none;
    text-decoration: none;
    cursor: pointer;
    border-style: none;

}
`
