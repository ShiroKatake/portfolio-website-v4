import { CSSObject } from "styled-components";

export type FlexProps = StyledFlexProps & {
  as?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
};

export type StyledFlexProps = {
  alignContent?: CSSObject["alignContent"];
  alignItems?: CSSObject["alignItems"];
  alignSelf?: CSSObject["alignSelf"];
  flex?: CSSObject["flex"];
  flexBasis?: CSSObject["flexBasis"];
  flexDirection?: CSSObject["flexDirection"];
  flexGrow?: CSSObject["flexGrow"];
  flexShrink?: CSSObject["flexShrink"];
  flexWrap?: CSSObject["flexWrap"];
  fullHeight?: boolean;
  fullWidth?: boolean;
  gap?: CSSObject["gap"];
  isInline?: boolean;
  justifyContent?: CSSObject["justifyContent"];
  justifyItems?: CSSObject["justifyItems"];
  justifySelf?: CSSObject["justifySelf"];
  margin?: CSSObject["margin"];
  marginBottom?: CSSObject["marginBottom"];
  marginLeft?: CSSObject["marginLeft"];
  marginRight?: CSSObject["marginRight"];
  marginTop?: CSSObject["marginTop"];
  order?: CSSObject["order"];
  padding?: CSSObject["padding"];
  paddingBottom?: CSSObject["paddingBottom"];
  paddingLeft?: CSSObject["paddingLeft"];
  paddingRight?: CSSObject["paddingRight"];
  paddingTop?: CSSObject["paddingTop"];
};
