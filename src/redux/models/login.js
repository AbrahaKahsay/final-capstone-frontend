import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Actions
const FIND_USER = 'final_capstone_frontend/models/FIND_USER';

// URL
const userURL = 'http://localhost:4000/api/v1/login';

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
    return response.json();
  },
);

const initialState = [];

// Reducer
const userSlice = createSlice({
  name: 'current_user',
  initialState,
  extraReducers: {
    [findUserAsync.fulfilled]: (state, action) => (

      action.payload
    ),
  },
});

export { findUserAsync };

export default userSlice.reducer;
