import React from "react";
import * as S from "./Instructions.styles";

export default function Instructions() {
  return (
    <>
      <S.InstructionsContainer>
        Uh oh...the letters are all jumbled up. Press the Load button to call
        the api for the correct data. The string below should spell "incentivio"
        afterwards.
      </S.InstructionsContainer>
      <S.InstructionsContainer>
        Remember you must wait to render {"<Incentivio />"} until all of the api
        calls have completed.
      </S.InstructionsContainer>
    </>
  );
}
