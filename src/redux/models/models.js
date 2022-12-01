import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Actions
const FETCH_BIKES_MODELS = 'final_capstone_frontend/models/FETCH_BIKES_MODELS';

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

const initialState = [];

// Reducer
const modelSlice = createSlice({
  name: 'models',
  initialState,
  extraReducers: {
    [fetchModelsAsync.fulfilled]: (state, action) => (
      [...action.payload]
    ),
  },
});

export { fetchModelsAsync };

export default modelSlice.reducer;
