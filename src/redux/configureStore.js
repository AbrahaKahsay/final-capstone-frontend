import { configureStore } from '@reduxjs/toolkit';
import modelReducer from './models/models';
import detailReducer from './models/model_details';

const store = configureStore({
  reducer: {
    models: modelReducer,
    details: detailReducer,
  },
});

export default store;
