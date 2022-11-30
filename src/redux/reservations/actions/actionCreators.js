// acction types
const CALL_API_REQUEST = 'CALL_API_REQUEST';
const ADD_RESERVATION_SUCCESS = 'ADD_RESERVATION_SUCCESS';
const ADD_RESERVATION_FAILURE = 'ADD_RESERVATION_FAILURE';
const REMOVE_RESERVATION_SUCCESS = 'REMOVE_RESERVATION_SUCCESS';
const REMOVE_RESERVATION_FAILURE = 'REMOVE_RESERVATION_FAILURE';

// action creators
const addReservationsRequest = () => ({
  type: CALL_API_REQUEST,
});

const addReservationsSuccess = (reservation) => ({
  type: ADD_RESERVATION_SUCCESS,
  payload: reservation,
});

const addReservationsFailure = (error) => ({
  type: ADD_RESERVATION_FAILURE,
  payload: error,
});


const removeReservationsSuccess = (reservation) => ({
  type: REMOVE_RESERVATION_SUCCESS,
  payload: reservation,
});

const removeReservationsFailure = (error) => ({
  type: REMOVE_RESERVATION_FAILURE,
  payload: error,
});
