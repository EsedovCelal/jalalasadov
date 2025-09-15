import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  islang: "AZE", // default language
};

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setlang: (state, action) => {
      state.islang = action.payload;
    },
  },
});

export const { setLang } = langSlice.actions;
export default langSlice.reducer;
