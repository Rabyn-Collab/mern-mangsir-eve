import { createSlice } from "@reduxjs/toolkit";



export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    users: []
  },

  reducers: {


    setUser: (state, action) => {
      state.users.push(action.payload);
    }




  }
});


export const { setUser } = userSlice.actions;