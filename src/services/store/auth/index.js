import { createSlice } from "@reduxjs/toolkit";

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
      state.token = action.payload;
      // window.history.pushState({}, "", "/");
    },
    [authCreateToken.rejected]: (state, action) => {
      state.token = undefined;
      state.role = undefined;
    },
  },
});

export const { authLogout } = authStore.actions;

export default authStore.reducer;