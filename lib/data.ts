import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "SwiftUI/UIKit",
    "Node.js",
    "Git",
    "Flutter",
    "Jenkins",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "GraphQL",
    "Apollo",
    "PostgreSQL",
    "Framer Motion",
    "MySQL",
    "Laravel"
] as const;

export const projectsData = [
    {
        title: "PetConnect",
        description:
            "Projet en cours. En collaboration avec Graig Kolodziejczyk et Yann Le Coz. Ce projet à pour but de créer une application regroupant plusieurs services pour le bien être et la santé animale.",
        tags: ["Next.js", "GraphQL", "Tailwind", "NestJS", "Flutter"],
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
        title: "Développeur Web Full-Stack (Apprentissage)",
        location: "Kweezine, Bordeaux, France",
        description:
            "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "sept 2020 - sept 2022",
    },
    {
        title: "Développeur Mobile (Apprentissage)",
        location: "Niji, Bordeaux, France",
        description:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(LuGraduationCap),
        date: "sept 2022 - sept 2023",
    },
    {
        title: "Développeur Web",
        location: "Quietam Studio, Bordeaux, France",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(CgWorkAlt),
        date: "oct 2023 - janv 2024",
    },
] as const;

export const links = [
    {
      name: "Accueil",
      hash: "#home",
    },
    {
      name: "A propos",
      hash: "#about",
    },
    {
      name: "Projets",
      hash: "#projects",
    },
    {
      name: "Compétences",
      hash: "#skills",
    },
    {
      name: "Expérience",
      hash: "#experience",
    },
    {
      name: "Contact",
      hash: "#contact",
    },
  ] as const;