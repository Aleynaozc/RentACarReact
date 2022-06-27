import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";
import carStore from "../car/index";
import authStore from "../auth/index"
import dashboardStore from "../dashboard";

const createReducer = combineReducers({
    auth: authStore,
    car: carStore,
    dashboard: dashboardStore,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'car','dashboard']
};

const rootReducer = persistReducer(persistConfig, createReducer);

export default rootReducer;