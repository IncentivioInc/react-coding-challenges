import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoadingError,
  setMatchError,
  removeMatchError,
  clearErrors,
} from "./results.slice";

export const useRenderAndValidate = (char, stateChar) => {
  const renderCount = useRef(0);
  const dispatch = useDispatch();
  const allCharactersLoaded = useSelector((state) => {
    const characters = ["i", "n", "c", "e", "t", "v", "o"];
    return characters.every((character) => state[character].loading === false);
  });

  return function renderAndValidate() {
    if (renderCount.current++ > 0) {
      if (!allCharactersLoaded) {
        dispatch(setLoadingError());
      }

      if (char !== stateChar) {
        dispatch(setMatchError({ expected: char, actual: stateChar }));
      } else {
        dispatch(removeMatchError(char));
      }
    } else {
      dispatch(clearErrors());
    }

    return stateChar;
  };
};
