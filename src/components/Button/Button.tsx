import React from "react";
import { SecondaryButton, PrimaryButton } from "./Button.styled";
import { IoIosSend } from "react-icons/io";

interface Props {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export const Button: React.FC<Props> = ({ children }) => {
  return (
    <SecondaryButton>
      <span className="icon">
        <IoIosSend />
      </span>
      {children}
    </SecondaryButton>
  );
};
