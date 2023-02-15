import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./productsSlice";
import { userSlice} from "./userSlice"


// Export des actions
const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    user: userSlice.reducer
  },
});

export default store;