import React from "react";
import { useSelector } from "react-redux";
import * as S from "./Results.styles";

export default function Results() {
  const loadingError = useSelector((state) => state.results.loadingError);
  const matchErrorEntries = useSelector((state) =>
    Object.entries(state.results.matchError)
  );

  return (
    <S.Container>
      <div>
        Loading: {loadingError ? "X You should only display " : "&#10003;"}
      </div>
      <div>
        Match:{" "}
        {matchErrorEntries.length
          ? matchErrorEntries.map(([expected, actual], i) => (
              <span key={expected}>
                Expected {actual} to be {expected}
                {i < matchErrorEntries.length - 1 && ", "}
              </span>
            ))
          : "&#10003;"}
      </div>
    </S.Container>
  );
}
