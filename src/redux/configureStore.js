import { configureStore } from '@reduxjs/toolkit';
import modelReducer from './models/models';
import detailReducer from './models/model_details';
import userReducer from './models/login';

const store = configureStore({
  reducer: {
    models: modelReducer,
    details: detailReducer,
    current_user: userReducer,
  },
});

export default store;
