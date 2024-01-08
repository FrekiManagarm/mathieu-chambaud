import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const skillsData = [
    "React/Next.js",
    "Node.js/NestJS",
    "Laravel",
    "Prisma",
    "GraphQL",
    "Flutter",
    "SwiftUI/UIKit",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Git",
    "Jenkins"
] as const;

export const projectsData = [
    {
        title: "PetConnect",
        description:
            "Projet en cours. En collaboration avec Graig Kolodziejczyk et Yann Le Coz. Ce projet à pour but de créer une application regroupant plusieurs services pour le bien être et la santé animale.",
        tags: ["Next.js", "GraphQL", "Tailwind", "NestJS", "Flutter", "PostgreSQL"],
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
        title: "Développeur Web",
        location: "Quietam Studio, Bordeaux, France",
        description:
            "Intégration Front-end en Flutter. \nAutomatisation de mise en production avec Jenkins. Rédaction d'analyses pour une transition en Clean Architecture sur le projet Shifoomi. Réalisation d'un catalogue de produit sur Flutter Flow et liaison avec une base de données. Refonte graphique et fonctionnelle d'un outil de génération de QCM assisté par IA.",
        icon: React.createElement(CgWorkAlt),
        date: "oct 2023 - janv 2024",
    },
    {
        title: "Développeur Mobile (Apprentissage)",
        location: "Niji, Bordeaux, France",
        description:
            "Développement d'une application de chat en direct avec ChatGPT et d'un module d'interprétation vocal. Mise à jour des dépendances d'une application Android pour le Paris Dakar. Ajout d'un module de mise à jour forcée sur le socle Android de Niji. Édition de POCs de Flutter Mobile vers Flutter Web",
        icon: React.createElement(LuGraduationCap),
        date: "sept 2022 - sept 2023",
    },
    {
        title: "Développeur Web Full-Stack (Apprentissage)",
        location: "Kweezine, Bordeaux, France",
        description:
            "Back-end : Conception de base de données. Conception et développement d'une API REST avec Laravel. Frontend : Conception et développement Frontend avec les technologies React/NextJS. Mise en place du moteur de recherche Algolia. Optimisation SEO avec les outils de NextJS",
        icon: React.createElement(LuGraduationCap),
        date: "sept 2020 - sept 2022",
    }
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