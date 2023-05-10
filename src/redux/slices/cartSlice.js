import { createSlice, current } from '@reduxjs/toolkit';

const { log } = console;
const initialState = {};

export const cartSlice = createSlice({
  name: 'cart-buttons',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      log(current(state));
    },
  },
});

export const { addToCart } = cartSlice.reducer;
