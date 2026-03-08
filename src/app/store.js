import { configureStore } from "@reduxjs/toolkit";
import { bookApi } from "../pages/books/bookApi.js";





export const store = configureStore({
  reducer: {
    [bookApi.reducerPath]: bookApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      bookApi.middleware
    ]),
});