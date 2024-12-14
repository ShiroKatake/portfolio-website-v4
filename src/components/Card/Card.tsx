import React, { useRef } from "react";
import {
  StyledCard,
  StyledCardContent,
  StyledImage,
  StyledLink,
} from "./Card.styled";
import { Heading } from "../Heading";
import { Text } from "../Text";
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
        src="https://cdn.sanity.io/images/me5qn7sh/production/521aa3e84522e5da45949997582aac414cbe3b26-422x422.png?w=280"
        alt="Project P.O.D"
        sizes="100vw"
        width={0}
        height={0}
      />
      <StyledCardContent>
        <FaArrowUpRightFromSquare className="newTabIcon" />
        <StyledLink href="/project-pod" ref={linkRef}>
          <Heading as="h2" size="sm">
            {title}
          </Heading>
        </StyledLink>
        <Text size="sm">{description}</Text>
      </StyledCardContent>
    </StyledCard>
  );
};
