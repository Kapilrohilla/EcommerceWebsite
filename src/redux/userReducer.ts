import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    populateUser: function (_state, action) {
      return action.payload;
    },
  },
});

// const {userSlice}
export const { populateUser } = userSlice.actions;
export default userSlice.reducer;
