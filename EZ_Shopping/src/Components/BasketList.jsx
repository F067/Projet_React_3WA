import React from 'react';
import BasketItem from "./BasketItem";
import styled from 'styled-components';


function BasketList(props) {
  
  return (
    <ItemsContent>
      {props.list.map((product, i) => {
        return <BasketItem product={product} key={i}/>
      })}
    </ItemsContent>
  )
}

export default BasketList

const ItemsContent = styled.div`
display: flex;
flex-direction:column;
align-items: center;
margin: 10px;
padding: 10px;
`