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
      return [...state, { product: action.payload, quantity: 1 }];
    },
  },
});

export const { populateCart, add2cart } = cartSlice.actions;
export default cartSlice.reducer;
