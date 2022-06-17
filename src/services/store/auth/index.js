import { createSlice } from "@reduxjs/toolkit";
import { Navigate } from "react-router-dom";
import { authCreateToken } from "./createToken";


const _authLogout = (state, action) => {
  state.token = undefined;
  state.role = undefined;
  window.history.pushState({}, "", "/");
};

const authStore = createSlice({
  name: "auth",
  initialState: {
    token: undefined,
    role: undefined,
  },
  reducers: {
    authLogout: _authLogout,
  },
  extraReducers: {
    [authCreateToken.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      state.role = action.payload.role;
      
    },
    [authCreateToken.rejected]: (state, action) => {
      state.token = undefined;
      state.role = undefined;
    },
  },
});

export const { authLogout } = authStore.actions;

export default authStore.reducer;