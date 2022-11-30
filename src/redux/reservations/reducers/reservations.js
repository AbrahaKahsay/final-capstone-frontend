// import all action types
import {
  CALL_API_REQUEST,
  ADD_RESERVATION_SUCCESS,
  ADD_RESERVATION_FAILURE,
  REMOVE_RESERVATION_SUCCESS,
  REMOVE_RESERVATION_FAILURE,
} from '../actions/actionCreators';

const initialstate = {
  loading: false,
  reservations: [],
  error: '',
};

const reservations = (state = initialstate, action) => {
  switch (action.type) {
    case CALL_API_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };

    case ADD_RESERVATION_SUCCESS:
      return {
        loading: false,
        ...state,
        reservations: [...state.reservations, action.payload],
        error: '',
      };

    case ADD_RESERVATION_FAILURE:
      return {
        loading: false,
        ...state,
        error: action.payload,
      };

    case REMOVE_RESERVATION_SUCCESS:
      return {
        ...state,
        reservations: state.reservations.filter(
          (reservation) => reservation.id !== action.payload.id,
        ),
        loading: false,
        error: '',
      };

    case REMOVE_RESERVATION_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
  }
};

export default reservations;
