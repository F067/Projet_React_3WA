import React from 'react';
import BasketItem from "./BasketItem";


function BasketList(props) {
  
  return (
    <div>
      {props.list.map((product, i) => {
        return <BasketItem product={product} key={i}/>
      })}
    </div>
  )
}

export default BasketList