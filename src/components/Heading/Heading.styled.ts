import { colors } from "@/styles/colors";
import { fontSize, lineHeight } from "@/styles/typography";
import styled, { css } from "styled-components";
import { HeadingStyle } from "./Heading.type";

export const StyledHeading = styled.h2<{ $headingStyle: HeadingStyle }>`
  font-family: var(--font-eczar);
  font-weight: 500;
  ${({ $headingStyle }) => headingStyle[$headingStyle]}
`;

export const headingStyle = {
  h2: css`
    font-size: ${fontSize.heading.lg};
    line-height: ${lineHeight.heading.lg};
    color: ${colors.primary[10]};
  `,
  h3: css`
    font-size: ${fontSize.heading.md};
    line-height: ${lineHeight.heading.md};
    color: ${colors.white};
  `,
  h4: css`
    font-size: ${fontSize.heading.sm};
    line-height: ${lineHeight.heading.sm};
    color: ${colors.white};
  `,
}