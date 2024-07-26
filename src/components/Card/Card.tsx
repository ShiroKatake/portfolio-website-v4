import React, { useRef } from "react";
import {
  StyledCard,
  StyledCardContent,
  StyledImage,
  StyledLink,
} from "./Card.styled";
import { Heading } from "../Heading";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

interface Props {
  title: string;
  description: string;
  image?: string;
  video?: string;
}

export const Card = ({ title, description, image, video }: Props) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  return (
    <StyledCard onClick={() => linkRef.current?.click()}>
      <StyledImage
        src="/images/project-pod.png"
        alt="Project P.O.D"
        width={280}
        height={140}
      />
      <StyledCardContent>
        <FaArrowUpRightFromSquare />
        <StyledLink href="/project-pod" ref={linkRef}>
          <Heading as="h2" headingStyle="h3">
            {title}
          </Heading>
        </StyledLink>
        <p>{description}</p>
      </StyledCardContent>
    </StyledCard>
  );
};
