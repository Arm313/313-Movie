import { createSlice } from "@reduxjs/toolkit";
import { fetchTVAiringToday, fetchTVOnTheAir, fetchTVPopular, fetchTVTopRated } from "./API";

const initialState = {
  isLoading: false,
  airingToday: [],
  onTheAir: [],
  popularTV: [],
  topRatedTV: []
};

export const TVSlice = createSlice({
  name: "tvShow",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTVAiringToday.fulfilled, (state, { payload }) => {
      state.airingToday = payload.results;
    });
    builder.addCase(fetchTVOnTheAir.fulfilled, (state, { payload }) => {
      state.onTheAir = payload.results;
    });
    builder.addCase(fetchTVPopular.fulfilled, (state, { payload }) => {
      state.popularTV = payload.results;
    });
    builder.addCase(fetchTVTopRated.fulfilled, (state, { payload }) => {
      state.topRatedTV = payload.results;
    });
  },
});

export const selectTv = (state) => state.tvShow;
export const tvShowReduer = TVSlice.reducer;
