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
const url = (id) => `https://bikes-db.onrender.com/api/v1/users/${id}/reservations`;

// fetch reservations from the server
export const fetchReservationsFromServer = (id) => async (dispatch) => {
  const data = await fetch(`https://bikes-db.onrender.com/api/v1/users/${id}/reservations`);
  const reservations = await data.json();
  dispatch(fetchReservations(reservations));
};

// add input/form data to reservation
export const addReservation = (formData) => async (dispatch) => {
  await fetch(url(formData.user_id), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  dispatch(postReservations(formData));
};

// delete specific reservation
export const removeReservations = (data) => async (dispatch) => {
  await fetch(`${url(data.user_id)}/${data.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: data.id }),
  });
  dispatch(removeReservation(data.id));
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
        reservations: action.payload,
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
          (reservation) => reservation.id !== action.id,
        ),
      };
    default:
      return state;
  }
};
