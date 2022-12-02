import { configureStore } from '@reduxjs/toolkit';
import modelReducer from './models/models';
import { reservations } from './reservations/reservations';

const store = configureStore({
  reducer: {
    models: modelReducer,
    reservations,
  },
});

export default store;
