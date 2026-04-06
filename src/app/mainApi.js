import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'





export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.100.6:5000/api' }),
  endpoints: (builder) => ({}),
})