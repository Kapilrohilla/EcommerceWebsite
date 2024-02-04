import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: [],
  name: "category",
  reducers: {
    populateCart: function (_state, action) {
      return action.payload;
    },
  },
});

export const { populateCart } = cartSlice.actions;
export default cartSlice.reducer;
