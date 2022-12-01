// Actions
const RESERVATIONS_FETCHED = 'RESERVATIONS_FETCHED';
const RESERVATIONS_ADDED = 'RESERVATIONS_ADDED';
const RESERVATIONS_REMOVED = 'RESERVATIONS_REMOVED';

// Actions creators
const fetchReservations = (payload) => ({
  type: RESERVATIONS_FETCHED,
  payload,
});

const postReservations = (payload) => ({
  type: RESERVATIONS_ADDED,
  payload,
});

const removeReservation = (id) => ({
  type: RESERVATIONS_REMOVED,
  id,
});

// get resrvations from server
const url = '/api/v1/users/1/reservations';

// fetch reservations from the server
export const fetchReservationsFromServer = async (dispatch) => {
  const data = await fetch(url);
  const reservations = await data.json();
  dispatch(fetchReservations(reservations));
  console.log(reservations);
};

// add input/form data to reservation
export const addReservation = (formData) => async (dispatch) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  dispatch(postReservations(response));
  console.log(response);
};

// delete specific reservation
export const removeReservations = (id) => async (dispatch) => {
  await fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  dispatch(removeReservation(id));
};

const initialState = {
  reservations: [],
};

// Reducers
export const reservations = (state = initialState, action) => {
  switch (action.type) {
    case RESERVATIONS_FETCHED:
      return {
        ...state,
        reservations: [...state.reservations, action.payload],
      };

    case RESERVATIONS_ADDED:
      return {
        ...state,
        reservations: [...state.reservations, action.payload],
      };
    case RESERVATIONS_REMOVED:
      return {
        ...state,
        reservations: state.reservations.filter(
          (reservation) => reservation.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
};
