import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `https://fakestoreapi.com` }),

  endpoints: (builder) => ({
    getProducts: builder.query({ query: () => '/products' }),
    getCategory: builder.query({ query: () => '/categories' }),
    getCategoryID: builder.query({ query: (cid) => `/categories/${cid}` }),
    getSortedProducts: builder.query({ query: () => '/categories' }),
    getProductsByID: builder.query({ query: (pid) => `/products/${pid}` }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoryQuery,
  useLazyGetProductsByIDQuery,
  useLazyGetSortedProductsQuery,
} = apiSlice;
