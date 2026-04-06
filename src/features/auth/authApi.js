import { mainApi } from "../../app/mainApi.js";




const authApi = mainApi.injectEndpoints({

  endpoints: (builder) => ({



    login: builder.mutation({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        body: credentials,
      }),
    }),


    register: builder.mutation({
      query: (credentials) => ({
        url: "/users/register",
        method: "POST",
        body: credentials,
      }),
    }),


  }),


});

export const { useLoginMutation, useRegisterMutation } = authApi;