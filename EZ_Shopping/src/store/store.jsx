import { configureStore } from "@reduxjs/toolkit";
import { basketSlice } from "./basketSlice";
import { productsSlice } from "./productsSlice";
import { userSlice} from "./userSlice"


// Export des actions
const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    user: userSlice.reducer,
    basket: basketSlice.reducer
  },
});

export default store;