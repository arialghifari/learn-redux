import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const colorsApi = createApi({
  reducerPath: "colorsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/api/",
  }),
  endpoints: (builder) => ({
    colors: builder.query({
      query: () => "/colors",
    }),
    colorById: builder.query({
      query: (id) => `/colors/${id}`,
    }),
    addColor: builder.mutation({
      query: (color) => ({
        url: "/colors",
        method: "POST",
        body: color,
      }),
    }),
    updateColor: builder.mutation({
      query: ({ id, ...color }) => ({
        url: `/colors/${id}`,
        method: "PUT",
        body: color,
      }),
    }),
    deleteColor: builder.mutation({
      query: (id) => ({
        url: `/colors/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useColorsQuery,
  useColorByIdQuery,
  useAddColorMutation,
  useUpdateColorMutation,
  useDeleteColorMutation,
} = colorsApi;
