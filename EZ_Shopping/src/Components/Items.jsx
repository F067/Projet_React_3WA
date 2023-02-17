import React from 'react';
import Item from "./Item";
import styled from "styled-components"

function Items(props) {
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
display:flex;
justify-content: space-between;
flex-wrap: wrap;

`