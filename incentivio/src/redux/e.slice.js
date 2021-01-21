import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialState } from "../doNotChange/utils";
import fakeApi from "../doNotChange/fakeApi";

/**
 * Instead of vanilla redux, we are using redux-toolkit to create state 'slices'.
 * In addition to that, we are using the createAsyncThunk method to retrieve our 'api' data.
 *
 * Redux-tookit docs: https://redux-toolkit.js.org/usage/usage-guide
 * Section on async data: https://redux-toolkit.js.org/usage/usage-guide#asynchronous-logic-and-data-fetching
 * Section specifically on createAsyncThunk: https://redux-toolkit.js.org/usage/usage-guide#async-requests-with-createasyncthunk
 */

const sliceName = "e";

export const fetchCharacter = createAsyncThunk(
  `${sliceName}/fetchCharacter`,
  async (thunkAPI) => {
    // use fakeApi to retrieve the letter
  }
);

const slice = createSlice({
  name: sliceName,
  initialState: initialState.e,
  reducers: {
    reset: () => initialState.e,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacter.pending, (state, action) => {
      // handle pending action
      // loading should be true
    });
    builder.addCase(fetchCharacter.fulfilled, (state, action) => {
      // handle fulfilled action
      // loading should be false
      // character data should be set in the state
    });
  },
});

export const { reset } = slice.actions;
export default slice.reducer;
