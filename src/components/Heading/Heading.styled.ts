import { colors } from "@/styles/colors";
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
    font-size: ${fontSize.heading.xl};
    line-height: ${lineHeight.heading.xl};
    color: ${colors.primary[10]};
  `,
  lg: css`
    font-size: ${fontSize.heading.lg};
    line-height: ${lineHeight.heading.lg};
    color: ${colors.primary[10]};
  `,
  md: css`
    font-size: ${fontSize.heading.md};
    line-height: ${lineHeight.heading.md};
    color: ${colors.white};
  `,
  sm: css`
    font-size: ${fontSize.heading.sm};
    line-height: ${lineHeight.heading.sm};
    color: ${colors.white};
  `,
}