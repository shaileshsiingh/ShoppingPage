// cartReducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  isVisible: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    toggleCartVisibility(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
