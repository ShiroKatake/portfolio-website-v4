"use client";

import Image from "next/image";
import { Button } from "@/components/Button";
import { ProjectToggle } from "@/components/ProjectToggle";
import { Heading } from "@/components/Heading";

export default function Home() {
  return (
    <main>
      <Heading as="h2" headingStyle="h2">
        Portfolio
      </Heading>
      <ProjectToggle projectType="web">Button</ProjectToggle>
    </main>
  );
}
