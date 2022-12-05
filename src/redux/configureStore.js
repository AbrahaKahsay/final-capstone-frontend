import { configureStore } from '@reduxjs/toolkit';
import modelReducer from './models/models';
import detailReducer from './models/model_details';
import { reservations } from './reservations/reservations';

const store = configureStore({
  reducer: {
    models: modelReducer,
    details: detailReducer,
    reservations,
  },
});

export default store;
