import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    orders: [],
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
    removeOrder(state, action){
      let order = action.payload;
      const products_ref = state.orders.map(e => e.product);
      
      if(products_ref.includes(order.product)){
        state.orders = state.orders.filter(e => e.product !== order.product);
      }

    }
  },
});

export const { addOrder, removeOrder } = basketSlice.actions;