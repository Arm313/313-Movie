import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, BASE_URL } from "../../URL/URL";

export const fetchMoviesPopular = createAsyncThunk(
  "movies/fetchMoviesPopular",
  async () => {
    const result = await fetch(
      `${BASE_URL}/movie/popular?language=en-US&page=1${API_KEY}`
    );
    const jsonRes = result.json();
    return jsonRes;
  }
);

export const fetchMoviesNowPlaying = createAsyncThunk(
  "movies/fetchMoviesNowPlaying",
  async (page = 1) => {
    const result = await fetch(
      `${BASE_URL}/movie/now_playing?language=en-US&page=${page}${API_KEY}`
    );
    const jsonRes = result.json();
    return jsonRes;
  }
);
