import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, BASE_URL } from "../../URL/URL";


export const fetchAllSeries = createAsyncThunk(
  "movies/fetchAllSeries",
  async (mov) => {
    const { page, property } = mov;
    const result = await fetch(
      `${BASE_URL}/tv/${property}?language=en-US&page=${page}${API_KEY}`
    );
    const jsonRes = await result.json();
    return { data: jsonRes, property: property };
  } 
);

export const fetchGetSeries = createAsyncThunk(
  "movies/fetchGetSeries",
  async (mov) => {
    const { id, property, page } = mov;
    const result = await fetch(
      `${BASE_URL}/tv/${id}${property ? "/" + property : ""}?language=en-US${
        page ? "&page=" + page : ""
      }
      ${API_KEY}`
    );
    const jsonRes = await result.json();
    return { data: jsonRes, property: property };
  }
);

export const fetchSearchSeries = createAsyncThunk(
  "series/fetchSearchSeries",
  async ({ query, page = 1 }) => {
    let url = `${BASE_URL}/search/tv?query=${query}&include_adult=false&language=en-US&page=${page}${API_KEY}`;

    const result = await fetch(url);
    const jsonResult = await result.json();
    return jsonResult;
  }
);