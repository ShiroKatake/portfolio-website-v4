import styled from "styled-components";
import Image from "next/image";
import { colors } from "@/styles/colors";
import { StyledLink } from "../Link/Link.styled";

export const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  width: 280px;
  aspect-ratio: 1 / 1;
  border-radius: 1rem;
  overflow: hidden;
  background-color: ${colors.background[20]};
  box-shadow: 2px 4px 4px 0 #000;
  cursor: pointer;
`;

export const StyledImage = styled(Image)`
  width: auto;
  height: 100%;
  object-fit: cover;
`;

export const StyledCardContent = styled.div`
  background-color: ${colors.primary[40]};
  color: ${colors.white};
  padding: 1rem;

  ${StyledLink} {
    display: flex;
    justify-content: space-between;
  }
`;
