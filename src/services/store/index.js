
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './root/rootReducer';


const store = configureStore({
 reducer: rootReducer
});

export default store;