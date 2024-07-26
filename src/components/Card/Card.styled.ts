import { colors } from "@/styles/colors";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { StyledHeading } from "../Heading/Heading.styled";

export const StyledCard = styled.article`
  background-color: ${colors.background[20]};
  aspect-ratio: 1 / 1;
  width: 280px;
  display: grid;
  grid-auto-rows: 1fr;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 2px 4px 4px 0 #000;
  cursor: pointer;

  &:hover {
    svg, ${StyledHeading} {
      color: ${colors.primary[10]};
    }
  }
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const StyledCardContent = styled.div`
  position: relative;
  background-color: ${colors.primary[40]};
  color: ${colors.white};
  padding: 1rem;

  svg {
    position: absolute;
    right: 1rem;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  width: fit-content;
  color: ${colors.white};
  text-decoration: none;
`;
