import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post, Post2 } from "../../utils/helpers/requestHelpers";


export const authCreateToken = createAsyncThunk(
  "Auth/login",
  async (loginModel) => {
    const {data} = await Post("https://localhost:44352/api/Auth/Userlogin", loginModel);
    console.log(data)
    return data;
  }
);


