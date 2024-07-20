"use client";

import { createGlobalStyle } from "styled-components";
import { fontSize, lineHeight } from "./typography";
import { colors } from "./colors";

export const GlobalStyles = createGlobalStyle`
  html,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: unset;
    padding: unset;
  }

  body {
    background-color: ${colors.background[30]};
    font-family: var(--font-dm-sans);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-eczar);
  }

  h2 {
    font-size: ${fontSize.heading.md};
    line-height: ${lineHeight.heading.md};
    color: ${colors.primary[10]};
  }
`;