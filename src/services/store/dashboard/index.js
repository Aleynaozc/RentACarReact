import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUsers = createAsyncThunk(
    'allUsers/getAllUsers',
    async () => {
        const response = await axios("https://localhost:44352/api/Admin/UserList")
        const formattedResponce = await response.data;
        return formattedResponce;
    }

)
// export const deleteUser = createAsyncThunk(
//     'allUsers/getAllUsers',
//     async () => {
//         const response = await axios("https://localhost:44352/api/Admin/DeleteUser?id=")
//         const formattedResponce = await response.data;
//         return formattedResponce;
//     }

// )



export const dashboardStore = createSlice({
    name:'dashboard',
    initialState: {
        allUsers: [],
        
    },
    extraReducers: {
        [getAllUsers.fulfilled]: (state, action) => {
            state.allUsers = action.payload;
        }
    }
})
export default dashboardStore.reducer;