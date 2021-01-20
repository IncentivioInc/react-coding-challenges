import styled from "styled-components";

export const Container = styled.div`
  margin: 30px;
  text-align: center;
`;

export const Checkmark = styled.span`
  color: green;
  font-weight: bold;
  &:after {
    content: "\\2713";
  }
`;

export const X = styled.span`
  color: red;
  font-weight: bold;
  &:before {
    content: "x ";
  }
`;
