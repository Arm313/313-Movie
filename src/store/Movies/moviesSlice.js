import { createSlice } from "@reduxjs/toolkit";
import { fetchMoviesNowPlaying, fetchMoviesPopular } from "./API";

const initialState = {
  isLoading: false,
  popular: [],
  nowPlaying: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMoviesPopular.fulfilled, (state, { payload }) => {
      state.popular = payload.results;
    });
    builder.addCase(fetchMoviesNowPlaying.fulfilled, (state, { payload }) => {
      state.nowPlaying = payload.results;
    });
  },
});

export const selectMovies = (state) => state.movies;
export const moviesReducer = moviesSlice.reducer;
