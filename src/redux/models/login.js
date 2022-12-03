import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// functions
const handleError = (res) => {
  if (!res.ok) {
    throw Error(`${res.status}: Couldn't load URL.`);
  }
  return res;
};
// Actions
const FIND_USER = 'final_capstone_frontend/models/FIND_USER';

// URL
const userURL = 'http://localhost:4000/api/v1/login';
// Async function (Function Action Creator)
const findUserAsync = createAsyncThunk(
  FIND_USER,
  async (data) => {
    try {
      const response = await fetch(userURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: data }),
      }).then(handleError);
      console.log(response);
      const output = await response.json();
      return { user: output, login: true };
    } catch (err) {
      console.log(err);
      return 'user NOT found';
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
  },
});
const { actions, reducer } = userSlice;
export { findUserAsync };
export const { userLogout } = actions;
export default reducer;
