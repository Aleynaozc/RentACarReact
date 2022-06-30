import { createSlice } from "@reduxjs/toolkit";

import { authCreateToken } from "./createToken";
import { authAdminCreateToken } from "./createAdminToken";


const _authLogout = (state, action) => {
  state.token = undefined;
  state.role = undefined;

};

const authStore = createSlice({
  name: "auth",
  initialState: {
    token: undefined,
    role: undefined,
    userId:undefined,
  },
  reducers: {
    authLogout: _authLogout,
  },
  extraReducers: {
    [authCreateToken.fulfilled]: (state, action) => {
      state.token = action.payload;
      state.role=action.payload;
      state.userId=action.payload;
    },
    [authCreateToken.rejected]: (state) => {
      state.token = undefined;
      state.role = undefined;
      state.userId=undefined;

    },
    [authAdminCreateToken.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      state.role = action.payload.role;
    },
    [authAdminCreateToken.rejected]: (state) => {
      state.token = undefined;
      state.role = undefined;
    },
  },
});

export const { authLogout } = authStore.actions;

export default authStore.reducer;