import { useDispatch, useSelector } from "react-redux";
import { setLoadingError, setMatchError } from "./results.slice";

export const useRenderAndValidate = (char, stateChar) => {
  const dispatch = useDispatch();
  const allCharactersLoaded = useSelector((state) => {
    const characters = ["i", "n", "c", "e", "t", "v", "o"];
    return characters.every((character) => state[character].loading === false);
  });

  return function renderAndValidate() {
    if (!allCharactersLoaded) {
      dispatch(setLoadingError());
    }

    if (char !== stateChar) {
      dispatch(setMatchError({ expected: char, actual: stateChar }));
    }

    return stateChar;
  };
};
