import { combineReducers } from 'redux';
import reservations from './reservations';

const rootReducer = combineReducers({
  reservations,
  // bikes: bikesReducer
});

export default rootReducer;
