import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocal, setUserToLocal } from "../../local/local.js";



export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    users: getUserFromLocal()
  },

  reducers: {


    setUser: (state, action) => {
      state.users.push(action.payload);
      setUserToLocal(state.users);
    },


    updateUser: (state, action) => {
      state.users = state.users.map((user) => user.id === action.payload.id ? action.payload : user);
      setUserToLocal(state.users);
    },

    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
      setUserToLocal(state.users);
    },




  }
});


export const { setUser, removeUser, updateUser } = userSlice.actions;