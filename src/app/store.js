import { configureStore } from "@reduxjs/toolkit";
import { quoteApi } from "../pages/quotes/quotesApi.js";




export const store = configureStore({
  reducer: {

    [quoteApi.reducerPath]: quoteApi.reducer


  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([

      quoteApi.middleware

    ]),
});