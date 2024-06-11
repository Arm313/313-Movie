import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, BASE_URL } from "../../URL/URL";

export const fetchTVAiringToday = createAsyncThunk(
  "tvShow/fetchTVAiringToday",
  async (page = 1) => {
    const result = await fetch(
      `${BASE_URL}/tv/airing_today?language=en-US&page=${page}${API_KEY}`
    );
    const jsonRes = result.json();
    return jsonRes;
  }
);
export const fetchTVOnTheAir = createAsyncThunk(
  "tvShow/fetchTVOnTheAir",
  async (page = 1) => {
    const result = await fetch(
      `${BASE_URL}/tv/on_the_air?language=en-US&page=${page}${API_KEY}`
    );
    const jsonRes = result.json();
    return jsonRes;
  }
);
export const fetchTVPopular = createAsyncThunk(
  "tvShow/fetchTVPopular",
  async (page = 1) => {
    const result = await fetch(
      `${BASE_URL}/tv/popular?language=en-US&page=${page}${API_KEY}`
    );
    const jsonRes = result.json();
    return jsonRes;
  }
);
export const fetchTVTopRated = createAsyncThunk(
  "tvShow/fetchTVTopRated",
  async (page = 1) => {
    const result = await fetch(
      `${BASE_URL}/tv/top_rated?language=en-US&page=${page}${API_KEY}`
    );
    const jsonRes = result.json();
    return jsonRes;
  }
);
