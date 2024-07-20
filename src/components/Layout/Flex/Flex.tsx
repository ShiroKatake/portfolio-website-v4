import React from "react";
import { StyledFlexContainer } from "./Flex.styled";
import { FlexProps } from "./Flex.type";

export const Flex = ({ children, ...props }: FlexProps) => {
  return <StyledFlexContainer {...props}>{children}</StyledFlexContainer>;
};
