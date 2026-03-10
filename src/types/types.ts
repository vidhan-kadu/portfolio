import { type ReactNode } from "react";

type links = {
  name: string;
  link: string;
};

export const NavLinks: links[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Projects",
    link: "/project",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export type Skills = {
  name: string;
  link: string;
};

export type Project = {
  title: string;
  subTitle: string;
  github: string;
  live: string;
  description: ReactNode;
  badge: string;
  image: string;
  stack: string[];
};

export type OtherProject = {
  name: string;
  url: string;
};
