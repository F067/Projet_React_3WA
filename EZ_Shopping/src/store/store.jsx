import { configureStore } from "@reduxjs/toolkit";
import { basketSlice } from "./basketSlice";
import { productsSlice } from "./productsSlice";
import { userSlice} from "./userSlice"
import {localStorageMiddleware} from "./Middlewares/localStorageMiddleware";

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    user: userSlice.reducer,
    basket: basketSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: JSON.parse(localStorage.getItem("store")) ? JSON.parse(localStorage.getItem("store")) : {},
});

export default store;