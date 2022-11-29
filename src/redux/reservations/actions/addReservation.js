// acction types
const CALL_API_REQUEST = 'CALL_API_REQUEST';
const ADD_RESERVATION_SUCCESS = 'ADD_RESERVATION_SUCCESS';
const ADD_RESERVATION_FAILURE = 'ADD_RESERVATION_FAILURE';

// action creators
const addReservationsRequest = () => ({
  type: CALL_API_REQUEST,
});

const addReservationsSuccess = (bike) => ({
  type: ADD_RESERVATION_SUCCESS,
  payload: bike,
});

const addReservationsFailure = (error) => ({
  type: ADD_RESERVATION_FAILURE,
  payload: error,
});
