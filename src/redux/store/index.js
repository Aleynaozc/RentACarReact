
import { configureStore } from '@reduxjs/toolkit';
import carReducer from "../slice/carSlice"

const store = configureStore({
    reducer:{
        cars : carReducer
    }

});

export default store;