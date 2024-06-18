import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, BASE_URL } from "../../URL/URL";

export const fetchAllMovies = createAsyncThunk(
  "movies/fetchAllMovies",
  async (mov) => {
    const { page = 1, property } = mov;
    const result = await fetch(
      `${BASE_URL}/movie/${property}?language=en-US&page=${page}${API_KEY}`
    );
    const jsonRes = await result.json();
    return { data: jsonRes, property: property };
  } 
);

export const fetchGetMovie = createAsyncThunk(
  "movies/fetchGetMovie",
  async (mov) => {
    const { id, property, page } = mov;
    const result = await fetch(
      `${BASE_URL}/movie/${id}${property ? "/" + property : ""}?language=en-US${
        page ? "&page=" + page : ""
      }
      ${API_KEY}`
    );
    const jsonRes = await result.json();
    return { data: jsonRes, property: property };
  }
);
