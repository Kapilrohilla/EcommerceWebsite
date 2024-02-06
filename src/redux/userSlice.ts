import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    populateUser: function (_state, action) {
      return action.payload;
    },
    //@ts-ignore
    add2cart: function (state, action) {
      const product = action.payload;
      //@ts-ignore
      const updatedCart = state.user.cart.concat({
        product,
        quantity: 1,
      });
      const updatedUser = {
        user: {
          // @ts-ignore
          ...state.user,
          cart: updatedCart,
        },
        // @ts-ignore
        token: state.token,
      };
      console.log(updatedUser);
      //@ts-ignore
      updatedUser;
      localStorage.setItem("user", JSON.stringify(updatedUser));
      return updatedUser;
    },
    incrementCartProduct: function (state, action) {
      const productId: string = action.payload;
      console.log(productId, "< producid");
      //@ts-ignore
      const updatedCart = state.user.cart.map((cartItem) => {
        if (cartItem.product._id === productId) {
          // console.log()
          cartItem.quantity = cartItem.quantity + 1;
        }
        return cartItem;
      });

      state.user.cart = updatedCart;
      localStorage.setItem("user", JSON.stringify(state));
      return state;
    },
    decrementCartProduct: function (state, action) {
      const productId: string = action.payload;

      //@ts-ignore
      const updatedCart = state.user.cart
        .map((cartItem: { product: { _id: string }; quantity: number }) => {
          if (cartItem.product._id === productId) {
            // console.log()
            cartItem.quantity = cartItem.quantity - 1;
          }
          return cartItem;
        })
        .filter((cartItem: any) => {
          return cartItem.quantity > 0;
        });

      state.user.cart = updatedCart;
      localStorage.setItem("user", JSON.stringify(state));
      return state;
    },
  },
});

// const {userSlice}
export const {
  populateUser,
  add2cart,
  incrementCartProduct,
  decrementCartProduct,
} = userSlice.actions;
export default userSlice.reducer;
