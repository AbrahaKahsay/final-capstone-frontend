import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Actions
const FETCH_BIKE_DETAILS = 'final_capstone_frontend/models/FETCH_BIKE_DETAILS';

// Async function (Function Action Creator)
const fetchDetailsAsync = createAsyncThunk(
  FETCH_BIKE_DETAILS,
  async (id) => {
    const modelURL = `https://bikes-db.onrender.com/api/v1/bikes/${id}`;
    const response = await fetch(modelURL);
    const output = await response.json();
    return output;
  },
);

// Reducer
const initialState = {};

const detailSlice = createSlice({
  name: 'details',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDetailsAsync.fulfilled, (state, action) => (
      { ...action.payload }
    ));
  },
});

export { fetchDetailsAsync };

export default detailSlice.reducer;
