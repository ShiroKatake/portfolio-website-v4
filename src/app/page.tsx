"use client";

import { ProjectToggle } from "@/components/ProjectToggle";
import { Heading } from "@/components/Heading";
import { Card } from "@/components/Card/Card";

export default function Home() {
  return (
    <main>
      <Heading as="h2" size="lg">
        Portfolio
      </Heading>
      <ProjectToggle projectType="web">Button</ProjectToggle>
      <Card
        title="Project P.O.D"
        description="An RTS featuring resources and building management, and wave based combat"
      />
    </main>
  );
}
