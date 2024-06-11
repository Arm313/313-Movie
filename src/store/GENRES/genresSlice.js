import { createSlice, current } from "@reduxjs/toolkit";
import { fetchGetMoviesGenres, fetchGetTVGenres } from "./API";

const initialState = {
  isLoading: false,
  moviesGenres: [],
  tvGenres: [],
};

export const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    // addMoviesGenres(state, action) {
    //   state.data = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetMoviesGenres.fulfilled, (state, { payload }) => {
      state.moviesGenres = payload;
    });
    builder.addCase(fetchGetTVGenres.fulfilled, (state, { payload }) => {
      state.tvGenres = payload;
    });
  },
});

export const { addMoviesGenres } = genresSlice.actions;
export const genresReducer = genresSlice.reducer;
export const selectGenres = (state) => state.genres;
