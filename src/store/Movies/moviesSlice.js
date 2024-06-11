import { createSlice } from "@reduxjs/toolkit";
import { fetchMoviesNowPlaying, fetchMoviesPopular, fetchMoviesTopRated, fetchMoviesUpcoming } from "./API";

const initialState = {
  isLoading: false,
  popular: [],
  nowPlaying: [],
  topRated: [],
  upcoming: []
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
    builder.addCase(fetchMoviesTopRated.fulfilled, (state, { payload }) => {
      state.topRated = payload.results;
    });
    builder.addCase(fetchMoviesUpcoming.fulfilled, (state, { payload }) => {
      state.upcoming = payload.results;
    });
  },
});

export const selectMovies = (state) => state.movies;
export const moviesReducer = moviesSlice.reducer;
