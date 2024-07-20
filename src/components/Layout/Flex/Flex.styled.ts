import styled from "styled-components";
import { StyledFlexProps } from "./Flex.type";

const flexPropsKeys = [
  "alignContent",
  "alignItems",
  "alignSelf",
  "flex",
  "flexBasis",
  "flexDirection",
  "flexGrow",
  "flexShrink",
  "flexWrap",
  "fullHeight",
  "fullWidth",
  "gap",
  "isInline",
  "justifyContent",
  "justifyItems",
  "justifySelf",
  "margin",
  "marginBottom",
  "marginLeft",
  "marginRight",
  "marginTop",
  "order",
  "padding",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
];

export const StyledFlexContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !flexPropsKeys.includes(prop)
}) <StyledFlexProps>`
  display: ${({ isInline }) => isInline ? "inline-flex" : "flex"};
  align-content: ${({ alignContent }) => alignContent};
  align-items: ${({ alignItems }) => alignItems};
  align-self: ${({ alignSelf }) => alignSelf};
  flex: ${({ flex }) => flex};
  flex-basis: ${({ flexBasis }) => flexBasis};
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-shrink: ${({ flexShrink }) => flexShrink};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  gap: ${({ gap }) => gap};
  height: ${({ fullHeight }) => fullHeight && "100%"};
  width: ${({ fullWidth }) => fullWidth && "100%"};
  justify-content: ${({ justifyContent }) => justifyContent};
  justify-items: ${({ justifyItems }) => justifyItems};
  justify-self: ${({ justifySelf }) => justifySelf};
  margin: ${({ margin }) => margin};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
  margin-top: ${({ marginTop }) => marginTop};
  order: ${({ order }) => order};
  padding: ${({ padding }) => padding};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  padding-left: ${({ paddingLeft }) => paddingLeft};
  padding-right: ${({ paddingRight }) => paddingRight};
  padding-top: ${({ paddingTop }) => paddingTop};
`;