import { createSlice, current } from '@reduxjs/toolkit';

const { log } = console;
const initialState = {
  itemsID: [],
  items: [],
  quantity: 0,
};

export const cartSlice = createSlice({
  name: 'cart-buttons',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {
        payload: { id, product },
      } = action;
      state.itemsID.push(id);
      state.quantity++;
      state.items.push(product);
    },

    removeItem: (state, action) => {
      const { payload } = action;
      const newItems = state.items.filter((item) => item.id !== payload);
      const newItemsID = state.itemsID.filter((item) => item !== payload);
      state.items = newItems;
      state.itemsID = newItemsID;
      state.quantity-- <= 0 ? (state.quantity = 0) : 0;
    },
  },
});

export const { addToCart, removeItem } = cartSlice.actions;
