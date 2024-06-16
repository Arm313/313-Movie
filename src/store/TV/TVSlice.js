import { createSlice } from "@reduxjs/toolkit";
import { fetchAllSeries, fetchGetSeries } from "./API";

const initialState = {
  isLoading: false,
  airing_today: [],
  on_the_air: [],
  popular: [],
  top_rated: [],
  watch_tv: {}
};

export const TVSlice = createSlice({
  name: "tvShow",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllSeries.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllSeries.fulfilled, (state, { payload }) => {
      const { data, property } = payload;
      state[property] = data.results;
      state.isLoading = false;
    });


    builder.addCase(fetchGetSeries.fulfilled, (state, { payload }) => {
      const { data, property } = payload;
      property ? state.watch_tv[property] = data : (state.watch_tv = data);
      state.isLoading = false;
    });
  },
});

export const selectTv = (state) => state.tvShow;
export const tvShowReduer = TVSlice.reducer;
