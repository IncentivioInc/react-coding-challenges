import React from "react";
import { useIncentivio } from "./Incentivio.hooks";
import * as S from "./Incentivio.styles";

export default function Incentivio({ buttonPushed }) {
  const { incentivioString, error, success } = useIncentivio(buttonPushed);

  return (
    <>
      <S.IncentivioString>{incentivioString}</S.IncentivioString>
      <S.Error>{error}</S.Error>
      {success && <S.Success>Success</S.Success>}
    </>
  );
}
