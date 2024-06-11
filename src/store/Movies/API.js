import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, BASE_URL } from "../../URL/URL";

export const fetchMoviesPopular = createAsyncThunk(
  "movies/fetchMoviesPopular",
  async (page = 1) => {
    const result = await fetch(
      `${BASE_URL}/movie/popular?language=en-US&page=${page}${API_KEY}`
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
export const fetchMoviesTopRated = createAsyncThunk(
  "movies/fetchMoviesTopRated",
  async (page = 1) => {
    const result = await fetch(
      `${BASE_URL}/movie/top_rated?language=en-US&page=${page}${API_KEY}`
    );
    const jsonRes = result.json();
    return jsonRes;
  }
);
export const fetchMoviesUpcoming = createAsyncThunk(
  "movies/fetchMoviesUpcoming",
  async (page = 1) => {
    const result = await fetch(
      `${BASE_URL}/movie/upcoming?language=en-US&page=${page}${API_KEY}`
    );
    const jsonRes = result.json();
    return jsonRes;
  }
);
