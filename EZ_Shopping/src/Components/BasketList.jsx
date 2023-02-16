import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from "react-redux";
import BasketItem from "./BasketItem";


function BasketList(props) {
  
  let user = (localStorage.getItem('user') == null) ? [{firstName:"firstName"}] : localStorage.getItem('user');
  
  const basket = useSelector((state) => state.basket.orders);
  
  return (
    <Container fluid>
      {props.list.map((product, i) => {
        return <BasketItem product={product} key={i}/>
      })}
    </Container>
  )
}

export default BasketList