// acction types
const CALL_API_REQUEST = 'CALL_API_REQUEST';
const REMOVE_RESERVATION_SUCCESS = 'REMOVE_RESERVATION_SUCCESS';
const REMOVE_RESERVATION_FAILURE = 'REMOVE_RESERVATION_FAILURE';

// action creators
const removeReservationsRequest = () => ({
  type: CALL_API_REQUEST,
});

const removeReservationsSuccess = (bike) => ({
  type: REMOVE_RESERVATION_SUCCESS,
  payload: bike,
});

const removeReservationsFailure = (error) => ({
  type: REMOVE_RESERVATION_FAILURE,
  payload: error,
});
