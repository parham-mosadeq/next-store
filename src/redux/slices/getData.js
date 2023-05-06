import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `https://fakestoreapi.com` }),

  endpoints: (builder) => ({
    getProducts: builder.query({ query: () => '/products' }),
    getCategory: builder.query({ query: () => '/products/categories' }),
    getCategoryID: builder.query({
      query: (cid) => `/products/category/${cid}`,
    }),
    getProductsByID: builder.query({ query: (pid) => `/products/${pid}` }),
    getSortedProducts: builder.query({
      query: (limit = 0) => `/products?sort=asc${limit && `&limit=${limit}`}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoryQuery,
  useGetSortedProductsQuery,
  useGetCategoryIDQuery,
  useGetProductsByIDQuery,
} = apiSlice;
