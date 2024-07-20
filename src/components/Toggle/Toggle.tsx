import React, { useState } from "react";
import { Button } from "../Button";
import { HiGlobeAlt } from "react-icons/hi2";
import { IoGameController } from "react-icons/io5";
import { Flex } from "../Layout";
import { spacing } from "@/styles/spacing";

type ProjectType = "game" | "web";

interface Props {
  children: React.ReactNode;
  projectType: ProjectType;
}

export const Toggle: React.FC<Props> = ({ children }) => {
  const [projectType, setProjectType] = useState<ProjectType>("web");
  return (
    <Flex gap={spacing.sm}>
      <Button
        variant={projectType === "web" ? "primary" : "secondary"}
        onClick={() => setProjectType("web")}
        icon={<HiGlobeAlt />}
      >
        <span>Web</span>
      </Button>
      <Button
        variant={projectType === "game" ? "primary" : "secondary"}
        onClick={() => setProjectType("game")}
        icon={<IoGameController />}
      >
        <span>Game</span>
      </Button>
    </Flex>
  );
};
