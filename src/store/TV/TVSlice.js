import { createSlice } from "@reduxjs/toolkit";
import { fetchAllSeries, fetchGetSeries, fetchSearchSeries } from "./API";

const initialState = {
  isLoading: false,
  airing_today: [],
  on_the_air: [],
  popular: [],
  top_rated: [],
  watch_tv: {},
  pages: [],
  searchSeriesData: []
};

export const TVSlice = createSlice({
  name: "tvShow",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllSeries.pending, (state) => {});
    builder.addCase(fetchAllSeries.fulfilled, (state, { payload }) => {
      const { data, property } = payload;
      if (data.page > 1) {
        state.pages = payload;
      }
      if (data.page == 1) {
        state[property] = data;
        state.pages = payload;
      }
    });

    builder.addCase(fetchGetSeries.fulfilled, (state, { payload }) => {
      const { data, property } = payload;
      property ? (state.watch_tv[property] = data) : (state.watch_tv = data);
    });
    builder.addCase(fetchSearchSeries.fulfilled, (state, { payload }) => {
      state.searchSeriesData = payload;
    });
  },
});

export const selectTv = (state) => state.tvShow;
export const tvShowReduer = TVSlice.reducer;
export const { setLoading } = TVSlice.actions;
