import React from "react";
import { StyledHeading } from "./Heading.styled";
import { HeadingStyle } from "./Heading.type";

type HeadingProps = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  headingStyle: HeadingStyle;
};

export const Heading: React.FC<HeadingProps> = ({
  as,
  headingStyle,
  children,
}) => {
  return (
    <StyledHeading as={as} $headingStyle={headingStyle}>
      {children}
    </StyledHeading>
  );
};
