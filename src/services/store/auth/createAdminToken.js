

import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post2 } from "../../utils/helpers/requestHelpers";


export const authAdminCreateToken = createAsyncThunk(
    "Auth/AdminLogin",
    async (loginAdminModel) => {
      const {data} = await Post2("https://localhost:44352/api/Auth/Adminlogin", loginAdminModel);
      return data;
    }
  );