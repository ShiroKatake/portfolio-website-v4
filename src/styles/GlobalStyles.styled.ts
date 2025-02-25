"use client";

import { createGlobalStyle } from "styled-components";
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
  dd,
  ul {
    margin: unset;
    padding: unset;
  }

  ul {
    list-style-type: none;
  }

  body {
    background-color: ${colors.background[30]};
    font-family: var(--font-dm-sans);
    color: ${colors.white};
  }
`;