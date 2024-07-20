"use client";

import Image from "next/image";
import { Button } from "@/components/Button";
import { ProjectToggle } from "@/components/ProjectToggle";

export default function Home() {
  return (
    <main>
      <ProjectToggle projectType="web">Button</ProjectToggle>
    </main>
  );
}
