import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "results",
  initialState: {
    loadingError: null,
    matchError: {},
  },
  reducers: {
    setLoadingError(state) {
      state.loadingError = true;
    },
    setMatchError(state, action) {
      state.matchError[action.payload.expected] = action.payload.actual;
    },
    removeMatchError(state, action) {
      delete state.matchError[action.payload];
    },
    clearErrors(state) {
      state.loadingError = null;
      state.matchError = {};
    },
  },
});

export const {
  setLoadingError,
  setMatchError,
  removeMatchError,
  clearErrors,
} = slice.actions;
export default slice.reducer;
