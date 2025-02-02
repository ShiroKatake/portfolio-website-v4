import React, { useRef, useState } from "react";
import { StyledCard, StyledCardContent, StyledImage } from "./Card.styled";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { Link } from "../Link/Link";

interface Props {
  title: string;
  description: string;
  image?: string;
  video?: string;
}

export const Card = ({ title, description, image, video }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  return (
    <StyledCard
      onClick={() => linkRef.current?.click()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <StyledImage
        src=""
        alt="Project P.O.D"
        sizes="100vw"
        width={0}
        height={0}
      />
      <StyledCardContent>
        <Link
          isHovered={isHovered}
          iconSize={16}
          iconPosition="top"
          href="/project-pod"
          ref={linkRef}
          target="_blank"
        >
          <Heading as="h2" size="sm">
            {title}
          </Heading>
        </Link>
        <Text size="sm">{description}</Text>
      </StyledCardContent>
    </StyledCard>
  );
};
