import React from "react";
import { StyledHeading } from "./Heading.styled";
import { HeadingStyle } from "./Heading.type";

type HeadingProps<T extends React.ElementType = "div"> =
  React.ComponentProps<T> & {
    as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div";
    children: React.ReactNode;
    size: HeadingStyle;
  };

export const Heading = <T extends React.ElementType = "div">({
  as,
  size,
  children,
  ...otherProps
}: HeadingProps<T>) => {
  return (
    <StyledHeading {...otherProps} as={as} $size={size}>
      {children}
    </StyledHeading>
  );
};
