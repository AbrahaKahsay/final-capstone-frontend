import { configureStore } from '@reduxjs/toolkit';
import modelReducer from './models/models';
import userReducer from './models/login';

const store = configureStore({
  reducer: {
    models: modelReducer,
    current_user: userReducer,
  },
});

export default store;
