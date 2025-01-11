import Link from "next/link";
import styled from "styled-components";
import { colors } from "@/styles/colors";

interface StyledLinkProps {
  $iconPosition?: "top" | "center";
  $isHovered?: boolean;
}

export const StyledLink = styled(Link)<StyledLinkProps>`
  display: inline-flex;
  ${({ $iconPosition }) => {
    return $iconPosition === "top"
      ? "align-items: flex-start;"
      : "align-items: center;";
  }}
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  .newTabIcon {
    margin-left: 0.25rem;
  }

  ${({ $isHovered }) => {
    return (
      $isHovered &&
      `
      text-decoration: underline;
        color: ${colors.primary[10]};
      `
    );
  }}

  &:hover {
    text-decoration: underline;
    color: ${colors.primary[10]};
  }
`;
