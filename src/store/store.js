import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { genresReducer } from "./GENRES/genresSlice";
import { moviesReducer } from "./Movies/moviesSlice";

const store = configureStore(
  {
    reducer: {
      genres: genresReducer,
      // moviesPopular: moviespopularReducer,
      movies: moviesReducer,
    },
  },

  applyMiddleware(thunk)
);

export default store;
