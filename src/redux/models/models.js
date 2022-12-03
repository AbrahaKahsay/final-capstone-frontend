import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Actions
const FETCH_BIKES_MODELS = 'final_capstone_frontend/models/FETCH_BIKES_MODELS';
const ADD_BIKE_MODEL = 'final_capstone_frontend/models/ADD_BIKE_MODEL';

// URL
const modelsURL = 'http://localhost:3001/api/v1/bikes';

// Async function (Function Action Creator)
const fetchModelsAsync = createAsyncThunk(
  FETCH_BIKES_MODELS,
  async () => {
    const response = await fetch(modelsURL);
    const output = await response.json();
    return output;
  },
);

const addBikeAsync = createAsyncThunk(
  ADD_BIKE_MODEL,
  async (bike) => {
    await fetch(modelsURL, {
      method: 'POST',
      body: JSON.stringify(bike),
      headers: {
        'Content-type': 'application/json',
      },
    });
    return bike;
  },
);

// Reducer
const initialState = [];

const modelSlice = createSlice({
  name: 'models',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchModelsAsync.fulfilled, (state, action) => (
        [...action.payload]
      ))
      .addCase(addBikeAsync.fulfilled, (state, action) => (
        [...state, { ...action.payload }]
      ));
  },
});

export { fetchModelsAsync, addBikeAsync };

export default modelSlice.reducer;
