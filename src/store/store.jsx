import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./langSlice";

export const store = configureStore({
  reducer: {
    language: languageReducer,
  },
});
