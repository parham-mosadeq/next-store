import { createSlice, current } from '@reduxjs/toolkit';

const { log } = console;
const initialState = {
  itemsID: [],
  quantity: 0,
};

export const cartSlice = createSlice({
  name: 'cart-buttons',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { payload } = action;
      state.itemsID.push(payload);
      state.quantity++;
    },

    removeItem: (state, action) => {
      const { payload } = action;
      const data = state.itemsID.filter((item) => item !== payload);
      log(data, 'data');
      state.itemsID = data;
      state.quantity-- <= 0 ? (state.quantity = 0) : 0;
    },
  },
});

export const { addToCart, removeItem } = cartSlice.actions;
