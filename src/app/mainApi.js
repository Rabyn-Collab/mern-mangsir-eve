import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//

//export const base = 'http://192.168.1.65:5000';
export const base = 'https://mern-mangsir-eve.onrender.com';

export const mainApi = createApi({
  reducerPath: 'mainApi',
  // baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.1.65:5000/api' }),
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mern-mangsir-eve.onrender.com/api' }),
  endpoints: (builder) => ({}),
})