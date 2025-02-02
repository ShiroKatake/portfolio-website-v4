"use client";
import { Heading } from "../Heading";
import { Link } from "../Link/Link";
import { StyledNavBar } from "./NavBar.styled";

export const NavBar = () => {
  return (
    <StyledNavBar>
      <Link href="/">
        <Heading as="div" size="lg">
          Khang Trinh
        </Heading>
      </Link>
      <ul>
        <li>
          <Link href="/">
            <Heading as="div" size="md">
              Projects
            </Heading>
          </Link>
        </li>
        <li>
          <Link href="/">
            <Heading as="div" size="md">
              Resume
            </Heading>
          </Link>
        </li>
        <li>
          <Link href="/">
            <Heading as="div" size="md">
              Contacts
            </Heading>
          </Link>
        </li>
      </ul>
      <Heading aria-hidden id="logo-balancer" as="div" size="lg">
        Khang Trinh
      </Heading>
    </StyledNavBar>
  );
};
