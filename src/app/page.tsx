"use client";

import { ProjectToggle } from "@/components/ProjectToggle";
import { Heading } from "@/components/Heading";
import { Card } from "@/components/Card/Card";
import { Experience } from "@/components/Experience/Experience";

export default function Home() {
  return (
    <main>
      <Heading as="h2" size="lg">
        Portfolio
      </Heading>
      <ProjectToggle projectType="web">Button</ProjectToggle>
      <Experience
        date="Oct 2023 - Nov 2023"
        place="@Movember"
        placeLink="https://movember.com/"
        role="Software Engineer"
        techs="React, TypeScript, Node.js, Express, MongoDB"
      />
      <Card
        title="Project P.O.D"
        description="An RTS featuring resources and building management, and wave based combat"
      />
    </main>
  );
}
