import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'





export const bookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://69ad5193b50a169ec87f232e.mockapi.io' }),

  endpoints: (builder) => ({


    getBooks: builder.query({
      query: () => ({
        url: '/books',
        method: 'GET'
      })

    })





  })
});


export const { useGetBooksQuery, useLazyGetBooksQuery } = bookApi;