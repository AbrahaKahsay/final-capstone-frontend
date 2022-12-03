import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// functions
const handleError = (res) => {
  if (!res.ok) {
    throw Error(`${res.status}: Couldn't load URL.`);
  }
  return res;
};
const handleCreateError = async (res) => {
  if (!res.ok) {
    const error = await res.json().then((data) => data.name);
    throw Error(`${error}`);
  }
  return res;
};
// Actions
const FIND_USER = 'final_capstone_frontend/models/FIND_USER';
const CREATE_USER = 'final_capstone_frontend/models/CREATE_USER';

// URL
const URL = 'http://localhost:4000/api/v1';
// Async function (Function Action Creator)
const findUserAsync = createAsyncThunk(
  FIND_USER,
  async (data) => {
    try {
      const response = await fetch(`${URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: data }),
      }).then(handleError);
      const output = await response.json();
      return { user: output, login: true };
    } catch (err) {
      return 'user NOT found';
    }
  },
);

const createUserAsync = createAsyncThunk(
  CREATE_USER,
  async (data) => {
    try {
      const response = await fetch(`${URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: data }),
      }).then(handleCreateError);
      const output = await response.json();
      return { user: output, login: true };
    } catch (err) {
      return err.message;
    }
  },
);

const initialState = { user: null, login: false };

// Reducer
const userSlice = createSlice({
  name: 'current_user',
  initialState,
  reducers: {
    userLogout: () => ({ user: null, login: false }),
  },
  extraReducers: {
    [findUserAsync.fulfilled]: (state, action) => {
      if (action.payload === 'user NOT found') {
        return { ...state, error: action.payload };
      }
      return action.payload;
    },
    [createUserAsync.fulfilled]: (state, action) => {
      if (action.payload === 'Name is too short or is already used, please try again') {
        return { ...state, error: action.payload };
      }
      return action.payload;
    },
  },
});
const { actions, reducer } = userSlice;
export { findUserAsync, createUserAsync };
export const { userLogout } = actions;
export default reducer;
