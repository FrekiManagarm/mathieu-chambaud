import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { SiNextdotjs, SiNestjs, SiApple, SiAndroid, SiMongodb, SiGraphql, SiTailwindcss, SiFlutter, SiPostgresql, SiLaravel, SiMysql, SiGit, SiJenkins } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";

export const skillsData = [
    {
        name: "Next.js",
        icon: SiNextdotjs,
    },
    {
        name: "Nest.js",
        icon: SiNestjs,
    },
    {
        name: "Laravel",
        icon: SiLaravel,
    },
    {
        name: "Flutter",
        icon: SiFlutter,
    },
    {
        name: "SwiftUI/UIKit",
        icon: SiApple,
    },
    {
        name: 'PostgreSQL',
        icon: SiPostgresql,
    },
    {
        name: 'MongoDB',
        icon: SiMongodb,
    },
    {
        name: 'MySQL',
        icon: SiMysql,
    },
    {
        name: 'Git',
        icon: SiGit,
    },
    {
        name: 'Jenkins',
        icon: SiJenkins
    }
] as const;

export const projectsData = [
    {
        title: "PetConnect",
        wip: true,
        authors: [
            {
                name: "Yann Le Coz",
                avatarUrl: "https://avatars.githubusercontent.com/u/43410067?v=4",
                linkedin: "https://www.linkedin.com/in/ianlcz/",
            },
            {
                name: "Graig Kolodziejczyk",
                avatarUrl: "https://media.licdn.com/dms/image/C4E03AQFIz1CRoh5YSg/profile-displayphoto-shrink_400_400/0/1663779779956?e=1710374400&v=beta&t=Nzwn3dSfFMCcv51DU5zEDkO3YXe0eYbTWS0trMmRbGs",
                linkedin: "https://www.linkedin.com/in/graig-kolodziejczyk-1482241b8/",
            },
            {
                name: "Mathieu Chambaud",
                avatarUrl: "https://avatars.githubusercontent.com/u/43409975?v=4",
                linkedin: "https://www.linkedin.com/in/mathieu-chambaud-9b4106170/",
            },
        ],
        description:
            "Projet en cours. En collaboration avec Graig Kolodziejczyk et Yann Le Coz. Ce projet à pour but de créer une application regroupant plusieurs services pour le bien être et la santé animale.",
        tags: [SiNextdotjs, SiGraphql, SiTailwindcss, SiNestjs, SiFlutter, SiPostgresql, SiApple, SiAndroid],
        imageUrl: "https://i.imgur.com/ul79l8a.png",
    },
    {
        title: "Gestidogs",
        wip: false,
        authors: [
            {
                name: "Dorian Français",
                avatarUrl: "https://media.licdn.com/dms/image/C4D03AQFeC22s3EE-1g/profile-displayphoto-shrink_400_400/0/1634310710746?e=1710374400&v=beta&t=aD6sF57T7Rv6Of9DxtbcxkGM6ChYcoKWbly0XMoqUVU",
                linkedin: "https://www.linkedin.com/in/dorian-français-5894a8175/",
            },
            {
                name: "Yann Le Coz",
                avatarUrl: "https://avatars.githubusercontent.com/u/43410067?v=4",
                linkedin: "https://www.linkedin.com/in/ianlcz/",
            },
            {
                name: "Corentin Garnier",
                avatarUrl: "https://media.licdn.com/dms/image/D4E35AQGPGJKO3WxzaQ/profile-framedphoto-shrink_800_800/0/1657294901010?e=1705582800&v=beta&t=LnHd0m7-84-YTrHkIKGINIAOpSaHtxp5op_1BVyQKKk",
                linkedin: "https://www.linkedin.com/in/corentin-garnier-b91ba3199/",
            },
            {
                name: "Mathieu Chambaud",
                avatarUrl: "https://avatars.githubusercontent.com/u/43409975?v=4",
                linkedin: "https://www.linkedin.com/in/mathieu-chambaud-9b4106170/",
            },
        ],
        description:
            "Gestidogs est un projet de gestion de centre éducatif canin réalisé en collaboration avec Dorian Français, Yann Le Coz et Corentin Garnier",
        tags: [SiNextdotjs, SiNestjs, SiApple, SiMongodb],
        imageUrl: "https://i.imgur.com/LQovxRt.jpg",
    },
    {
        title: "Your PC Parts",
        wip: true,
        authors: [
            {
                name: "Mathieu Chambaud",
                avatarUrl: "https://avatars.githubusercontent.com/u/43410067?v=4",
                linkedin: "https://www.linkedin.com/in/mathieu-chambaud-9b4106170/",
            }
        ],
        description:
            "Projet en cours. Ce projet aura pour but de proposer une API REST ouverte à tous sur les composants informatiques ainsi qu'un configurateur de PC",
        tags: [SiNextdotjs, SiNestjs, SiPostgresql],
        imageUrl: "https://i.imgur.com/ifu6M56.png",
    },
] as const;

export const experiencesData = [
    {
        title: "Développeur Web",
        location: "Quietam Studio, Bordeaux, France",
        logo: "https://www.magellandigitalgroup.com/wp-content/uploads/2021/11/logo_quietamstudio_bleu.png",
        tasks: [
            "Intégration Front-end en Flutter",
            "Automatisation de mise en production avec Jenkins",
            "Rédaction d'analyses pour une transition en Clean Architecture sur le projet Shifoomi",
            "Réalisation d'un catalogue de produit sur Flutter Flow et liaison avec une base de données",
            "Refont graphique et fonctionnelle d'un outil de génération de QCM assisté par IA"
        ],
        skills: [
            "Flutter",
            "Flutter Flow",
            "Jenkins",
        ],
        description: "Quietam Studio est une entreprise de R&D (Recherche et Développement) sur Bordeaux. Elle fait parti du groupe Magellan. L'entreprise développe un projet pour nom de code 'Shifoomi' qui permet le travail collaboratif dans des classes de type collèges et lycées.",
        icon: React.createElement(CgWorkAlt),
        date: "oct 2023 - janv 2024",
    },
    {
        title: "Développeur Mobile (Apprentissage)",
        location: "Niji, Bordeaux, France",
        logo: "https://www.niji.fr/images/logo-niji-access.svg",
        tasks: [
            "Développement d'une application de chat en direct avec ChatGPT et d'un module d'interprétation vocal",
            "Mise à jour des dépendances d'une application Android pour le Paris Dakar",
            "Ajout d'un module de mise à jour forcée sur le socle Android de Niji",
            "Edition de POCs de Flutter Mobile vers Flutter Web"
        ],
        skills: [
            "Flutter",
            "SwiftUI/UIKit",
            "Android",
            "CI/CD"
        ],
        description: "Niji est une ESN (Entreprise au Services Numériques, anciennement SSII) sur Bordeaux. Elle compte parmis elle plus de 1600 employée et interviens auprès de différents grand comptes (Carrefour, Edenred, Enedis, Sodexo, etc ...).",
        icon: React.createElement(LuGraduationCap),
        date: "sept 2022 - sept 2023",
    },
    {
        title: "Développeur Web Full-Stack (Apprentissage)",
        location: "Kweezine, Bordeaux, France",
        logo: "https://www.frenchtechbordeaux.com/wp-content/uploads/2021/01/6736-2017-05-15-logo-candidaturestartup.png",
        tasks: [
            "Conception de base de données",
            "Conception et développement d'une API REST avec Laravel",
            "Conception et développement Front-end avec les technologies React.js/Next.js",
            "Mise en place du moteur de recherche Algolia",
            "Optimisation SEO avec les outils de Next.js"
        ],
        skills: [
            "React.js/Next.js",
            "Laravel",
            "MySQL",
            "AWS"
        ],
        description: "Kweezine est une start-up Bordelaise qui promouvois les expériences culinaires en tout genre au sein de l'Hexagone et pour tout type d'évènement",
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
        name: "Expérience",
        hash: "#experience",
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
        name: "Contact",
        hash: "#contact",
    },
] as const;