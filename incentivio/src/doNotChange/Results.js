import React from "react";
import { useSelector } from "react-redux";
import * as S from "./Results.styles";

const letters = ["i", "n", "c", "e", "t", "v", "o"];
export default function Results() {
  const anyLoaded = useSelector((state) =>
    letters.some((letter) => state[letter].loading !== null)
  );
  const loadingError = useSelector((state) => state.results.loadingError);
  const matchErrorEntries = useSelector((state) =>
    Object.entries(state.results.matchError)
  );

  return anyLoaded ? (
    <S.Container>
      <h1>Results</h1>
      <div>
        Preload all of the data:{" "}
        {loadingError ? (
          <>
            <S.X />
            "You should only render the letters from the api one all of them
            have been loaded"
          </>
        ) : (
          <S.Checkmark />
        )}
      </div>
      <div>
        Get the correct data:
        {matchErrorEntries.length ? (
          <>
            <S.X />
            {matchErrorEntries.map(([expected, actual], i) => (
              <span key={expected}>
                Expected {actual} to be {expected}
                {i < matchErrorEntries.length - 1 && ", "}
              </span>
            ))}
          </>
        ) : (
          <S.Checkmark />
        )}
      </div>
    </S.Container>
  ) : null;
}
