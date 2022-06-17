import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";
import carStore from "../car/index";
import authStore from "../auth/index"

const createReducer = combineReducers({
    auth: authStore,
    car: carStore,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'car']
};

const rootReducer = persistReducer(persistConfig, createReducer);

export default rootReducer;