import React from "react";
import { StyledButton } from "./Button.styled";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
}

export const Button: React.FC<Props> = ({
  children,
  icon,
  variant,
  ...props
}) => {
  return (
    <StyledButton $variant={variant} {...props}>
      <span className="icon">{icon}</span>
      {children}
    </StyledButton>
  );
};
