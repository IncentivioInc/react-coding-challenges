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
  },
});

export const { setLoadingError, setMatchError } = slice.actions;
export default slice.reducer;
