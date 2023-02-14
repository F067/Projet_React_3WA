import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./productsSlice";

// Export des actions
const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});

export default store;