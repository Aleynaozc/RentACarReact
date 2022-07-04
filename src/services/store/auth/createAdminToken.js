

import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../../utils/helpers/requestHelpers";


export const authAdminCreateToken = createAsyncThunk(
  "Auth/AdminLogin",
  async (loginAdminModel) => {
    const {data}= await Post("https://localhost:44352/api/Auth/Adminlogin", loginAdminModel);
    console.log("data =: ,, " + JSON.stringify(data));
    return data;
   
  }
);