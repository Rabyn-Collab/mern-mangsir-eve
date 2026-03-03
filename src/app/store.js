import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../pages/form/userSlice.js";





export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer
  }
});