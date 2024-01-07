import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Jenkins",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "PostgreSQL",
    "Framer Motion",
    "Laravel"
] as const;

export const projectsData = [
    {
        title: "PetConnect",
        description:
            "Projet en cours en collaboration avec Graig Kolodziejczyk et Yann Le Coz. Ce projet à pour but de créer une application regroupant plusieurs services pour le bien être et la santé animale.",
        tags: ["Next.js", "GraphQL", "Tailwind", "Prisma", "NestJS", "SwiftUI", "Flutter", "Android", "Jetpack Compose"],
        imageUrl: "https://i.imgur.com/ul79l8a.png",
    },
    {
        title: "Gestidogs",
        description:
            "Gestidogs est un projet de gestion de centre éducatif canin réalisé en collaboration avec Dorian Français, Yann Le Coz et Corentin Garnier",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "NestJS", "SwiftUI"],
        imageUrl: "https://i.imgur.com/LQovxRt.jpg",
    },
    {
        title: "Your PC Parts",
        description:
            "Projet en cours. Ce projet aura pour but de proposer une API REST ouverte à tous sur les composants informatiques ainsi qu'un configurateur de PC",
        tags: ["Next.js", "NestJS", "Tailwind", "Framer", "Prisma", "PostgreSQL"],
        imageUrl: "https://i.imgur.com/ifu6M56.png",
    },
] as const;

export const experiencesData = [
    {
        title: "Graduated bootcamp",
        location: "Miami, FL",
        description:
            "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
    },
    {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
] as const;

export const links = [
    {
      name: "Home",
      hash: "#home",
    },
    {
      name: "About",
      hash: "#about",
    },
    {
      name: "Projects",
      hash: "#projects",
    },
    {
      name: "Skills",
      hash: "#skills",
    },
    {
      name: "Experience",
      hash: "#experience",
    },
    {
      name: "Contact",
      hash: "#contact",
    },
  ] as const;