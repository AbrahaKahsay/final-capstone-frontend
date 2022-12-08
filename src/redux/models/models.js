import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Actions
const FETCH_BIKES_MODELS = 'final_capstone_frontend/models/FETCH_BIKES_MODELS';
const ADD_BIKE_MODEL = 'final_capstone_frontend/models/ADD_BIKE_MODEL';
const DELETE_BIKE_MODEL = 'final_capstone_frontend/models/DELETE_BIKE_MODEL';

// URL
const modelsURL = 'https://bikes-db.onrender.com/api/v1/bikes';

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
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return { ...bike };
  },
);

const deleteBikeAsync = createAsyncThunk(
  DELETE_BIKE_MODEL,
  async (id) => {
    await fetch(`${modelsURL}/${id}`, {
      method: 'DELETE',
    });
    return id;
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
      ))
      .addCase(deleteBikeAsync.fulfilled, (state, action) => {
        const id = action.payload;
        return state.filter((bike) => bike.id !== id);
      });
  },
});

export {
  fetchModelsAsync, addBikeAsync, deleteBikeAsync,
};

export default modelSlice.reducer;
