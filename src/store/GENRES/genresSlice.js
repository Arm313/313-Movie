import { createSlice, current } from "@reduxjs/toolkit";
import {
  fetchGetMoviesGenres,
  fetchGetTVGenres,
  fetchMoviesInGenres,
  fetchSeriesInGenres,
} from "./API";

const initialState = {
  isLoading: false,
  moviesGenres: [],
  tvGenres: [],
  moviesInGenre: [],
  seriesInGenre: [],
};

export const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetMoviesGenres.fulfilled, (state, { payload }) => {
      state.moviesGenres = payload;
    });
    builder.addCase(fetchGetTVGenres.fulfilled, (state, { payload }) => {
      state.tvGenres = payload;
    });
    builder.addCase(fetchMoviesInGenres.fulfilled, (state, { payload }) => {
      state.moviesInGenre = payload;
    });
    builder.addCase(fetchSeriesInGenres.fulfilled, (state, { payload }) => {
      state.seriesInGenre = payload;
    });
  },
});

export const { addMoviesGenres } = genresSlice.actions;
export const genresReducer = genresSlice.reducer;
export const selectGenres = (state) => state.genres;
