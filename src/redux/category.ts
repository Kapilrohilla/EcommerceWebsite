import { createSlice } from "@reduxjs/toolkit";

const category = createSlice({
  initialState: [],
  name: "category",
  reducers: {
    populateCategory: function (_state, action) {
      return action.payload;
    },
  },
});

export const { populateCategory } = category.actions;
export default category.reducer;
