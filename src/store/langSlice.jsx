import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  defaultlanguage: "AZE",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setlanguage: (state, action) => {
      state.defaultlanguage = action.payload;
    },
  },
});

export const { setlanguage } = languageSlice.actions;
export default languageSlice.reducer;
