import React from "react";
import { LineVector, StyledPageBreak, SwirlVector } from "./PageBreak.styled";

export const PageBreak = () => {
  return (
    <StyledPageBreak>
      <LineVector $isReversed />
      <SwirlVector />
      <LineVector />
    </StyledPageBreak>
  );
};
