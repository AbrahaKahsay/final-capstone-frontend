// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reservations/reducers/configureStore';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reservations } from './reservations/reservations';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const store = createStore(reservations, applyMiddleware(thunk));
export default store;
