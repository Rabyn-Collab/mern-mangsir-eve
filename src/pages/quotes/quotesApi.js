import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




export const quoteApi = createApi({
  reducerPath: 'quoteApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com'
  }),

  endpoints: (builder) => ({

    getQoutes: builder.query({
      query: () => ({
        url: '/quotes',
        method: 'GET'
      })
    })

  })

});


export const { useGetQoutesQuery } = quoteApi;