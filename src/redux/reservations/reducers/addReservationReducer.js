// import all action types

const initialstate = {
  loading: false,
  bikes: [],
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
        bikes: [...state.bikes, action.payload],
        error: '',
      };

    case ADD_RESERVATION_FAILURE:
      return {
        loading: false,
        ...state,
        error: action.payload,
      };
  }
};

export default reservations;
