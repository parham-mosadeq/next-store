import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/getData';
import { cartSlice } from './slices/cartSlice';
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cartState: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
