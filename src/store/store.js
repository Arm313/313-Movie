import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { genresReducer } from "./GENRES/genresSlice";
import { moviesReducer } from "./Movies/moviesSlice";
import { tvShowReduer } from "./TV/TVSlice";

const store = configureStore(
  {
    reducer: {
      genres: genresReducer,
      movies: moviesReducer,
      tvShow: tvShowReduer,
    },
  }

  // applyMiddleware(thunk)
);

export default store;
