import { configureStore } from "@reduxjs/toolkit";
import langReducer from "./langSlice"; // 👈 import your language reducer

export const store = configureStore({
  reducer: {
    lang: langReducer, // 👈 add it here
  },
});
