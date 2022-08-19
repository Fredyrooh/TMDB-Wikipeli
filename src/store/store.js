import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import moviesReducer from "./movies";
import userReducer from "./user";
import watchListReducer from "./watchList";
import favReducer from "./favoritesState"

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    favorites: watchListReducer,
  },
});

export default store;
