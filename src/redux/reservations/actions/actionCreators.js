// acction types
export const CALL_API_REQUEST = 'CALL_API_REQUEST';
export const ADD_RESERVATION_SUCCESS = 'ADD_RESERVATION_SUCCESS';
export const ADD_RESERVATION_FAILURE = 'ADD_RESERVATION_FAILURE';
export const REMOVE_RESERVATION_SUCCESS = 'REMOVE_RESERVATION_SUCCESS';
export const REMOVE_RESERVATION_FAILURE = 'REMOVE_RESERVATION_FAILURE';

// action creators
export const addReservationsRequest = () => ({
  type: CALL_API_REQUEST,
});

export const addReservationsSuccess = (reservation) => ({
  type: ADD_RESERVATION_SUCCESS,
  payload: reservation,
});

export const addReservationsFailure = (error) => ({
  type: ADD_RESERVATION_FAILURE,
  payload: error,
});

export const removeReservationsSuccess = (reservation) => ({
  type: REMOVE_RESERVATION_SUCCESS,
  payload: reservation,
});

export const removeReservationsFailure = (error) => ({
  type: REMOVE_RESERVATION_FAILURE,
  payload: error,
});
