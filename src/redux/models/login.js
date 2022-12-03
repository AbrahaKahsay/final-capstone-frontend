import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Actions
const FIND_USER = 'final_capstone_frontend/models/FIND_USER';

// URL
const userURL = 'http://localhost:4000/api/v1/login';
// normal reducers
// const userLogout = () => LOG_OUT
// Async function (Function Action Creator)
const findUserAsync = createAsyncThunk(
  FIND_USER,
  async (data) => {
    const response = await fetch(userURL, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: data }),
    });
    const text = response.text();
    if (text) return text;
    return { user: response.json(), login: true };
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
      if (action.payload === 'This user is not in database') {
        return { ...state, error: action.payload };
      }
      return { ...state, ...action.payload };
    },
  },
});
const { actions, reducer } = userSlice;
export { findUserAsync };
export const { userLogout } = actions;
export default reducer;
