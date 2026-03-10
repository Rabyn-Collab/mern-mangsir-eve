import { configureStore } from "@reduxjs/toolkit";
import { languageApi } from "../pages/language/languageApi.js";




export const store = configureStore({
  reducer: {
    [languageApi.reducerPath]: languageApi.reducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      languageApi.middleware

    ]),
});