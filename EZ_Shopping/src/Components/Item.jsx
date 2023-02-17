import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { addOrder } from "../store/basketSlice";
import styled from 'styled-components';


function Item(props) {

    const dispatch = useDispatch();
    const [number, setNumber] = useState(1);

    function addToBasket(event) {

        let id = event.target.id;

        dispatch(addOrder({ product: id, quantity: parseInt(number) }))
    }

    function handleChange(event) {

        setNumber(event.target.value);
    }

    return (

        <CardItem key={props.product.id}>
            <img src={props.product.image} />
            <div className='details'>
                <h2>{props.product.title}</h2>
                <span className='category'>{props.product.category}</span>
                <p>
                    {props.product.description}
                </p>
                <div className='price-quantity'>
                    <h2>${props.product.price}</h2>
                    <span>Quantity : </span>
                    <input type="number" onChange={handleChange} min={1} value={number}></input>
                    <button id={props.product.id} onClick={addToBasket}>Add to basket</button>
                </div>

            </div>
        </CardItem>
    )
}

export default Item




const CardItem = styled.div`
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



