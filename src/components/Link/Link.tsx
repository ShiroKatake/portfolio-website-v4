import React from "react";
import { StyledLink } from "./Link.styled";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

interface LinkProps extends React.ComponentProps<"a"> {
  iconSize?: number;
  iconPosition?: "top" | "center";
  isHovered?: boolean;
}

export const Link = ({
  ref,
  iconSize = 12,
  iconPosition = "center",
  isHovered,
  href,
  target,
  children,
}: LinkProps) => {
  const LinkWrapper = href ? StyledLink : "span";

  return (
    <LinkWrapper
      ref={ref as any}
      href={href ?? "#"}
      target={target}
      $iconPosition={iconPosition}
      $isHovered={isHovered}
    >
      {children}
      {target === "_blank" ? (
        <FaArrowUpRightFromSquare
          className="newTabIcon"
          size={iconSize ?? 12}
        />
      ) : null}
    </LinkWrapper>
  );
};
