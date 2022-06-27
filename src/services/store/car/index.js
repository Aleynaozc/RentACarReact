import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getAllCars = createAsyncThunk(
    'allCars/getAllCars',
    async () => {
        const response = await axios("https://localhost:44352/api/RentaCar/Listcar")
        const formattedResponce = await response;
        return formattedResponce.data;
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

export const getAllCarModals = createAsyncThunk(
    'allCarModals/getAllCarModals',
    async () => {
        const response = await axios("https://localhost:44352/api/CarModal/CarModalList")
        const formattedResponce = await response.data;
        return formattedResponce;
    }

)

export const getALLTransmissionType = createAsyncThunk(
    'allTransmissionTypes/getALLTransmissionType',
    async () => {
        const response = await axios("https://localhost:44352/api/Transmission/TransmissionTypeList")
        const formattedResponce = await response.data;
        return formattedResponce;
    }

)

export const getALLFuelType = createAsyncThunk(
    'allFuelTypes/getALLFuelType',
    async () => {
        const response = await axios("https://localhost:44352/api/FuelType/FuelTypeList")
        const formattedResponce = await response.data;
        return formattedResponce;
    }

)

export const getALLClassification = createAsyncThunk(
    'allClassifications/getALLClassification',
    async () => {
        const response = await axios("https://localhost:44352/api/Classification/ClassificationList")
        const formattedResponce = await response.data;
        return formattedResponce;
    }

)

export const carStore = createSlice({
    name: 'cars',
    initialState: {
        allCars: [],
        allOfficies: [],
        allCarModals: [],
        allTransmissionTypes: [],
        allFuelTypes: [],
        allClassifications: [],
    },
    extraReducers: {
        [getAllCars.fulfilled]: (state, action) => {
            state.allCars = action.payload;
        },
        [getAllOfficies.fulfilled]: (state, action) => {
            state.allOfficies = action.payload;
        },
        [getAllCarModals.fulfilled]: (state, action) => {
            state.allCarModals = action.payload;
        },
        [getALLTransmissionType.fulfilled]: (state, action) => {
            state.allTransmissionTypes = action.payload;
        },
        [getALLFuelType.fulfilled]: (state, action) => {
            state.allFuelTypes = action.payload;
        },
        [getALLClassification.fulfilled]: (state, action) => {
            state.allClassifications = action.payload;
        }
    }
})
export default carStore.reducer;