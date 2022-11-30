import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reservations/reducers/configureStore';

const store = createStore(rootReducer, applyMiddleware(thunk));
