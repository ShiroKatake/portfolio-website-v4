import styled from "styled-components";
import { colors } from "@/styles/colors";
import { StyledLink } from "../Link/Link.styled";
import { StyledHeading } from "../Heading/Heading.styled";

export const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem 0.75rem 1.5rem;
  background-color: ${colors.primary[40]};

  ${StyledLink}:hover {
    text-decoration: none;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    @media screen and (max-width: 600px) {
      display: none;
    }

    ${StyledHeading} {
      font-weight: normal;
    }
  }

  #logo-balancer {
    visibility: hidden;
    @media screen and (max-width: 900px) {
      display: none;
    }
  }
`;
