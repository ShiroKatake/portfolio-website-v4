import { fontSize, lineHeight } from "@/styles/typography";
import styled, { css } from "styled-components";
import { HeadingStyle } from "./Heading.type";

export const StyledHeading = styled.h2<{ $size: HeadingStyle }>`
  font-family: var(--font-eczar);
  font-weight: 500;
  ${({ $size: $headingStyle }) => headingStyle[$headingStyle]}
`;

export const headingStyle = {
  xl: css`
    font-size: ${fontSize.title.xl};
    line-height: ${lineHeight.title.xl};
  `,
  lg: css`
    font-size: ${fontSize.title.lg};
    line-height: ${lineHeight.title.lg};
  `,
  md: css`
    font-size: ${fontSize.title.md};
    line-height: ${lineHeight.title.md};
  `,
  sm: css`
    font-size: ${fontSize.title.sm};
    line-height: ${lineHeight.title.sm};
  `,
};
