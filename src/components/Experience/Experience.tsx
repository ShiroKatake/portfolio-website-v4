import { Text } from "../Text";
import { Heading } from "../Heading";
import { BsBuildingsFill } from "react-icons/bs";
import { BiSolidBriefcase } from "react-icons/bi";
import { HiMiniWrench } from "react-icons/hi2";
import { StyledExperience } from "./Experience.styled";
import { IconType } from "react-icons";

interface ExperienceProps {
  date: string;
  place: string;
  role: string;
  techs: string;
}

export const Experience = ({ date, place, role, techs }: ExperienceProps) => {
  return (
    <div>
      <Heading as="h3" size="sm">
        {date}
      </Heading>
      <ul>
        <ExperienceItem text={place} icon={BsBuildingsFill} />
        <ExperienceItem text={role} icon={BiSolidBriefcase} />
        <ExperienceItem text={techs} icon={HiMiniWrench} />
      </ul>
    </div>
  );
};

interface ExperienceItemProps {
  text: string;
  icon: IconType;
}

const ExperienceItem = ({ text, icon }: ExperienceItemProps) => {
  const Icon = icon;
  return (
    <StyledExperience>
      <Icon />
      <Text>{text}</Text>
    </StyledExperience>
  );
};
