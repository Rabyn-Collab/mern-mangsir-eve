import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




export const languageApi = createApi({
  reducerPath: 'languageApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://translate-plus.p.rapidapi.com',
    headers: {
      'x-rapidapi-key': '89e53c72d7msh16aa8c041814a4cp1f3e79jsn333d7bcaf747'
    }

  },),
  endpoints: (builder) => ({


    translate: builder.mutation({
      query: (data) => ({
        url: '/translate',
        body: data,
        method: 'POST'
      })
    })





  }),
});


export const { useTranslateMutation } = languageApi;