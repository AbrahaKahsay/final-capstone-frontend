import { configureStore } from '@reduxjs/toolkit';
import modelReducer from './models/models';

const store = configureStore({
  reducer: {
    models: modelReducer,
  },
});

export default store;
