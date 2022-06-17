import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCars = createAsyncThunk(
    'allCars/getAllCars',
    async () => {
        const response = await axios("https://localhost:44352/api/RentaCar/Listcar")
        const formattedResponce = await response.data;
        return formattedResponce;
    }

)

export const getAllOfficies = createAsyncThunk(
    'allOfficies/getAllOfficies',
    async () => {
        const response = await axios("https://localhost:44352/api/RentaCar")
        const formattedResponce = await response.data;
        return formattedResponce;
    }

)

export const carStore = createSlice({
    name: 'cars',
    initialState: {
        allCars: [],
        allOfficies: [],
    },
    extraReducers: {
        [getAllCars.fulfilled]: (state, action) => {
            state.allCars = action.payload;
        },
        [getAllOfficies.fulfilled]: (state, action) => {
            state.allOfficies = action.payload;
        }
    }
})
export default carStore.reducer;