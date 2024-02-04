import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: [],
  name: "category",
  reducers: {
    populateCart: function (_state, action) {
      return action.payload;
    },
    // @ts-ignore
    add2cart: function (state, action) {
      console.log(state);
      return [...state, { product: action.payload, quantity: 1 }];
    },
    //@ts-ignore
    updateCart: function (state, action) {},
  },
});

export const { populateCart, add2cart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
