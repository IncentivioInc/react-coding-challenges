import React from "react";
import { useSelector } from "react-redux";
import * as S from "./Character.styles";
import { useRenderAndValidate } from "./useRenderAndValidate";

export default function Character({ char }) {
  const character = useSelector((state) => state[char].character);
  const renderAndValidate = useRenderAndValidate(char, character);

  return <S.Char>{renderAndValidate()}</S.Char>;
}
