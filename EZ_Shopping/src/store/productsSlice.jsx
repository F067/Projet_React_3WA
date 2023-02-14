import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  
  name: "products",
  initialState: {
    loading: "idle",
    products: []
  },
  reducers: {
    productsLoading(state, action) {
        if (state.loading === "idle"){
            state.loading = "pending";
        }
        
        console.log('loading = pending');
    },
    productsReceived(state,action) {
        if(state.loading ==="pending"){
            state.loading ="idle";
            state.products = action.payload;
            console.log(state.products);
        }

    }
  },
});

export const { productsLoading, productsReceived } = productsSlice.actions;

export const fetchproducts = () => async (dispatch) => {
  dispatch(productsLoading());
  let rep = await fetch('https://fakestoreapi.com/products', { method: 'GET' });
  let response = await rep.json();
  dispatch(productsReceived(response.data));
};