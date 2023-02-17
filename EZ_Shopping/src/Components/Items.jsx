import React from 'react';
import { useSelector } from "react-redux";
import Item from "./Item";
import styled from "styled-components"

function Items(props) {

  let user = (localStorage.getItem('user') == null) ? [{ firstName: "firstName" }] : localStorage.getItem('user');

  const basket = useSelector((state) => state.basket.orders);

  return (
    <ItemsContent>
      {props.list.map((product, i) => {
        return<Item product={product} key={i} />
      })}
    </ItemsContent>
  )
}

export default Items



const ItemsContent = styled.div`
text-align:center;
`