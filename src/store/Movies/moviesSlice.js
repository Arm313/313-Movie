import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllMovies,
  fetchGetMovie,
} from "./API";

const initialState = {
  isLoading: false,
  popular: [],
  now_playing: [],
  top_rated: [],
  upcoming: [],
  watch: {},
  error: null
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllMovies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllMovies.fulfilled, (state, { payload }) => {
      const { data, property } = payload;
      state[property] = data.results;
      state.isLoading = false;
    });
    builder.addCase(fetchAllMovies.rejected, (state, action) => {
      state.isLoading = false;
        state.error = action.error.message;
    });
    builder.addCase(fetchGetMovie.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGetMovie.fulfilled, (state, { payload }) => {
      const { data, property } = payload;
      property ? state.watch[property] = data : (state.watch = data);
      state.isLoading = false;
    });
    
    builder.addCase(fetchGetMovie.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    
  },
});

export const selectMovies = (state) => state.movies;
export const moviesReducer = moviesSlice.reducer;
