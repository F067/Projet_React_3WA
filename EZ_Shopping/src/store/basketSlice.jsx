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
    setQuantity(state, action){
      let order = action.payload;
      console.log(order)
      const products_ref = state.orders.map(e => e.product);
      console.log(products_ref)
      console.log('dans le slice order.product ',order.product);
      if(products_ref.includes(order.product)){
        state.orders.map((e)=>{
          if(e.product == order.product){
            e.quantity = order.quantity;
          }
        })
      }
    },
    removeOrder(state, action){
      let order = action.payload;
      const products_ref = state.orders.map(e => e.product);
      
      if(products_ref.includes(order.product)){
        state.orders = state.orders.filter(e => e.product !== order.product);
      }

    },
    removeBasket(state){
      state.orders = []
    }
  },
});

export const { addOrder, removeOrder, removeBasket, setQuantity } = basketSlice.actions;