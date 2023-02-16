import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    orders: [
      {product: '1',
      quantity: 2}
    ],
  },
  reducers: {
    addOrder(state, action) {
      let order = action.payload;

      const products_ref = state.orders.map(e => e.product);

      if(products_ref.includes(order.product)){
        state.orders.map((e)=>{
          if(e.product == order.product){
            e.quantity += order.quantity;
          }
        })
      }else{
        state.orders.push({
          product: order.product,
          quantity: order.quantity
        })
      }
      
    },
  },
});

export const { addOrder } = basketSlice.actions;
