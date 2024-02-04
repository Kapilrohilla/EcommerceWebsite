import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import categoryReducer from "./category";
import cartSlice from "./cart";
const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    cart: cartSlice,
  },
});
export default store;
