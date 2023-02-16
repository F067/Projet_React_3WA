import React from 'react';
import { Container } from 'react-bootstrap';
import BasketItem from "./BasketItem";

function BasketList(props) {
  
  return (
    <Container fluid>
      {props.list.map((product, i) => {
        return <BasketItem product={product} key={i}/>
      })}
    </Container>
  )
}

export default BasketList