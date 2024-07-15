import React, { useState } from "react";
import { Button } from "../Button";

type ProjectType = "game" | "web";

interface Props {
  children: React.ReactNode;
  projectType: ProjectType;
}

export const Toggle: React.FC<Props> = ({ children }) => {
  const [projectType, setProjectType] = useState<ProjectType>("web");
  return (
    <>
      <Button
        variant={projectType === "web" ? "primary" : "secondary"}
        onClick={() => setProjectType("web")}
      >
        Web
      </Button>
      <Button
        variant={projectType === "game" ? "primary" : "secondary"}
        onClick={() => setProjectType("game")}
      >
        Game
      </Button>
    </>
  );
};
