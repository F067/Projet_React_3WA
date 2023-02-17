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
            <div className='image'>
                <img src={props.product.image}  />
            </div>
            <div className='details'>
                <h2>{props.product.title}</h2>
                <span className='category'>{props.product.category}</span>
                <p>
                    {props.product.description}
                </p>
                <div className='price-quantity'>
                    <h2>${props.product.price}</h2>
                    <span>Quantity : <input type="number" onChange={handleChange} min={1} value={number}></input></span>
                    <button id={props.product.id} onClick={addToBasket}>Add to basket</button>
                </div>

            </div>
        </CardItem>
    )
}

export default Item




const CardItem = styled.div`

padding: 2rem 1rem;
margin-top: 2rem;
width: 50%;
display: flex;
overflow: hidden;


.image{
    width:30%;
    height:30rem;
    overflow:hidden
}

.image>img{
    width:100%;
}

.details{
    display: flex;
    flex-direction: column;
    flex-basis: fit-content;
    align-items: flex-start;
    padding: 2rem;
    max-height: 100%;
    flex-basis: 
    overflow: scroll;
   
}
.details>p{
    text-align: left; 
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

input{
    width: 3rem;
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
    &:hover{
        background-color: #F2CD5C;
    }
}
`



