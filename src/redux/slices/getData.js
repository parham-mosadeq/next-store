import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `https://fakestoreapi.com/` }),

  endpoints: (builder) => ({
    getProducts: builder.query({ query: () => 'products' }),
  }),
});

export const { useGetProducts } = apiSlice;
