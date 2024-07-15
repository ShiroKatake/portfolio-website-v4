"use client";
import { colors } from "@/styles/colors";
import styled from "styled-components";

interface StyledButtonProps {
  variant?: "primary" | "secondary";
}

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.625em;
  padding: .625em 1em;
  line-height: 0;
  font-size: 1rem;
  font-family: var(--font-dm-sans);
  border-radius: 0.4375em;
  cursor: pointer;

  svg {
    width: 1.5em;
    height: 1.5em;
  }
`;

export const PrimaryButton = styled(StyledButton)`
  background-color: ${colors.primary[20]};
  color: ${colors.white};
  border: none;
`;

export const SecondaryButton = styled(StyledButton)`
  background: none;
  color: ${colors.primary[20]};
  border: 2px solid ${colors.primary[20]};
  
  &:hover {
    background-color: ${colors.primary[30]};
    color: ${colors.primary[10]};
  }
`;
