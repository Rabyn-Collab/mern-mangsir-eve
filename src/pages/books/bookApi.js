import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'





export const bookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://69ad5193b50a169ec87f232e.mockapi.io' }),

  endpoints: (builder) => ({


    getBook: builder.query({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'GET'
      }),
      providesTags: ['Book']

    }),



    getBooks: builder.query({
      query: () => ({
        url: '/books',
        method: 'GET'
      }),
      providesTags: ['Book']

    }),

    addBook: builder.mutation({
      query: (data) => ({
        url: '/books',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Book']
    }),


    updateBook: builder.mutation({
      query: (q) => ({
        url: `/books/${q.id}`,
        method: 'PUT',
        body: q.data
      }),
      invalidatesTags: ['Book']
    }),


    removeBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Book']
    }),





  })
});


export const { useGetBooksQuery, useLazyGetBooksQuery, useAddBookMutation, useRemoveBookMutation, useGetBookQuery, useUpdateBookMutation } = bookApi;