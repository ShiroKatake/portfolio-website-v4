import { Text } from "../Text";
import { Heading } from "../Heading";
import { BsBuildingsFill } from "react-icons/bs";
import { BiSolidBriefcase } from "react-icons/bi";
import { HiMiniWrench } from "react-icons/hi2";
import { StyledExperience } from "./Experience.styled";
import { Link } from "../Link/Link";
import { IconType } from "react-icons";

interface ExperienceProps {
  date: string;
  place: string;
  placeLink?: string;
  role: string;
  techs: string;
}

export const Experience = ({
  date,
  place,
  placeLink,
  role,
  techs,
}: ExperienceProps) => {
  return (
    <div>
      <Heading as="h3" size="sm">
        {date}
      </Heading>
      <ul>
        <ExperienceItem icon={BsBuildingsFill}>
          <Link href={placeLink} target="_blank">
            {place}
          </Link>
        </ExperienceItem>
        <ExperienceItem icon={BiSolidBriefcase}>{role}</ExperienceItem>
        <ExperienceItem icon={HiMiniWrench}>{techs}</ExperienceItem>
      </ul>
    </div>
  );
};

interface ExperienceItemProps extends React.PropsWithChildren {
  icon: IconType;
}

const ExperienceItem = ({ icon, children }: ExperienceItemProps) => {
  const Icon = icon;
  return (
    <StyledExperience>
      <Icon />
      <Text>{children}</Text>
    </StyledExperience>
  );
};
