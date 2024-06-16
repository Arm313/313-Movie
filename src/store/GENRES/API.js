import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, BASE_URL } from "../../URL/URL";

export const fetchGetMoviesGenres = createAsyncThunk(
  "genres/fetchGetMoviesGenres",
  async () => {
    const result = await fetch(
      `${BASE_URL}/genre/movie/list?language=en${API_KEY}`
    );
    const jsonResult = await result.json();
    return jsonResult.genres;
  }
);

export const fetchGetTVGenres = createAsyncThunk(
  "genres/fetchGetTVGenres",
  async () => {
    const result = await fetch(
      `${BASE_URL}/genre/tv/list?language=en${API_KEY}`
    );
    const jsonResult = await result.json();
    return jsonResult.genres;
  }
);
export const fetchMoviesInGenres = createAsyncThunk(
  "genres/fetchMoviesInGenres",
  async (id) => {
    const result = await fetch(
      `${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}${API_KEY}`
    );
    const jsonResult = await result.json();
    return jsonResult;
  }
);
export const fetchSeriesInGenres = createAsyncThunk(
  "genres/fetchSeriesInGenres",
  async (id) => {
    const result = await fetch(
      `${BASE_URL}/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}${API_KEY}`
    );
    const jsonResult = await result.json();
    return jsonResult;
  }
);
