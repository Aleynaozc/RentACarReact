import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../../utils/helpers/requestHelpers";


export const authCreateToken = createAsyncThunk(
  "Auth/login",
  async (loginModel, { dispatch }) => {
    const data = await Post("https://localhost:44352/api/Auth/Userlogin", loginModel);
    return data;
  }
);

