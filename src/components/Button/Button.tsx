import React from "react";
import { StyledButton } from "./Button.styled";
import { IoIosSend } from "react-icons/io";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export const Button: React.FC<Props> = ({ children, variant, ...props }) => {
  return (
    <StyledButton $variant={variant} {...props}>
      <span className="icon">
        <IoIosSend />
      </span>
      {children}
    </StyledButton>
  );
};
