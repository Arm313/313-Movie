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
