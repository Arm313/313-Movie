import { createSlice } from "@reduxjs/toolkit";
import { fetchAllMovies, fetchGetMovie } from "./API";

const initialState = {
  isLoading: false,
  popular: [],
  now_playing: [],
  top_rated: [],
  upcoming: [],
  watch: {},
  pages: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllMovies.pending, (state) => {});
    builder.addCase(fetchAllMovies.fulfilled, (state, { payload }) => {
      const { data, property } = payload;
      if (data.page > 1) {
        state.pages = payload;
      }
      if (data.page == 1) {
        state[property] = data;
        state.pages = payload;
      }
    });
    builder.addCase(fetchAllMovies.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(fetchGetMovie.pending, (state) => {});
    builder.addCase(fetchGetMovie.fulfilled, (state, { payload }) => {
      const { data, property } = payload;
      property ? (state.watch[property] = data) : (state.watch = data);
    });

    builder.addCase(fetchGetMovie.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export const selectMovies = (state) => state.movies;
export const moviesReducer = moviesSlice.reducer;
export const { setLoading } = moviesSlice.actions;
