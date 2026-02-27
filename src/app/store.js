import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../pages/form/add/userSlice.js";





export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer
  }
});