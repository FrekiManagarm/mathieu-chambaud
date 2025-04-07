import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Link } from "@remix-run/react";

// Importation des icônes
import Reactjs from "~/icons/react";
import TypeScript from "~/icons/typescript";
import Nextjs from "~/icons/next";
import TailwindCSS from "~/icons/tailwindcss";
import PostgreSQL from "~/icons/postgresql";
import ReactRouter from "~/icons/react-router";
import ReactQuery from "~/icons/react-query";
import Motion from "~/icons/motion";

// Type pour les technologies avec icônes
type Technology = {
  name: string;
  icon: React.ReactNode;
};

// Mappage des noms de technologies vers leurs composants d'icônes
const techIcons: Record<string, React.ReactNode> = {
  React: <Reactjs className="w-5 h-5 text-[#087EA4]" />,
  TypeScript: <TypeScript className="w-5 h-5" />,
  "Next.js": <Nextjs className="w-5 h-5" />,
  "Tailwind CSS": <TailwindCSS className="w-5 h-5" />,
  PostgreSQL: <PostgreSQL className="w-5 h-5" />,
  "React Router": <ReactRouter className="w-5 h-5 text-[#f44250]" />,
  "React Query": <ReactQuery className="w-5 h-5 text-[#ff4154]" />,
  "Framer Motion": <Motion className="w-5 h-5 text-[#8855ff]" />,
  "Node.js": <Reactjs className="w-5 h-5 text-[#539e43]" />, // Substitution temporaire
  Firebase: <Reactjs className="w-5 h-5 text-[#ffca28]" />, // Substitution temporaire
  Redux: <Reactjs className="w-5 h-5 text-[#764abc]" />, // Substitution temporaire
  "React Native": <Reactjs className="w-5 h-5 text-[#61dafb]" />, // Substitution temporaire
};

// Types pour les projets
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  link: string;
  github?: string;
}

// Données des projets
const projects: Project[] = [
  {
    id: "portfolio",
    title: "Portfolio Personnel",
    description:
      "Site web portfolio moderne présentant mes compétences et projets, réalisé avec React, Remix et Tailwind CSS.",
    image: "/images/projects/portfolio.jpg",
    technologies: ["React", "TypeScript", "Remix", "Tailwind CSS"],
    category: "frontend",
    link: "#",
    github: "https://github.com/username/portfolio",
  },
  {
    id: "ecommerce",
    title: "Plateforme E-commerce",
    description:
      "Application e-commerce complète avec panier d'achat, paiement et gestion des commandes.",
    image: "/images/projects/ecommerce.jpg",
    technologies: ["Next.js", "Redux", "Node.js", "MongoDB", "Stripe"],
    category: "fullstack",
    link: "https://ecommerce-demo.example.com",
    github: "https://github.com/username/ecommerce",
  },
  {
    id: "dashboard",
    title: "Tableau de Bord Analytique",
    description:
      "Interface d'administration avec visualisations de données et tableaux de bord personnalisables.",
    image: "/images/projects/dashboard.jpg",
    technologies: ["React", "D3.js", "Firebase", "Tailwind CSS"],
    category: "frontend",
    link: "https://dashboard-demo.example.com",
  },
  {
    id: "mobile-app",
    title: "Application Mobile Fitness",
    description:
      "Application de suivi fitness pour iOS et Android avec synchronisation cloud et analyses personnalisées.",
    image: "/images/projects/mobile-app.jpg",
    technologies: ["React Native", "Redux", "Node.js", "AWS"],
    category: "mobile",
    link: "https://apps.apple.com/example",
  },
  {
    id: "saas",
    title: "Plateforme SaaS",
    description:
      "Solution SaaS pour la gestion de projet avec abonnements, authentification et tableaux kanban.",
    image: "/images/projects/saas.jpg",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Auth.js", "Stripe"],
    category: "fullstack",
    link: "https://saas-demo.example.com",
    github: "https://github.com/username/saas-platform",
  },
  {
    id: "api",
    title: "API RESTful",
    description:
      "API performante avec authentification JWT, validation de données et documentation Swagger.",
    image: "/images/projects/api.jpg",
    technologies: ["Node.js", "Express", "MongoDB", "Docker", "Jest"],
    category: "backend",
    link: "https://api-docs.example.com",
    github: "https://github.com/username/api-project",
  },
];

// Catégories de projets
const categories = [
  { id: "all", label: "Tous" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Fullstack" },
  { id: "mobile", label: "Mobile" },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Variants d'animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="relative py-28 bg-slate-900">
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4">
              Réalisations
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">Mes Projets</h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              Découvrez une sélection de mes projets récents, démontrant mon
              expertise en développement web et mobile.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                className="group"
              >
                <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:border-purple-500/50">
                  <div className="relative overflow-hidden h-52">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <div className="flex gap-2 mb-2">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-slate-800/80 hover:bg-purple-600 p-2 rounded-full transition-colors"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                              </svg>
                            </a>
                          )}
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-slate-800/80 hover:bg-purple-600 p-2 rounded-full transition-colors"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-white"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                              <polyline points="15 3 21 3 21 9" />
                              <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-purple-500/10 text-purple-400 hover:bg-purple-500/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge className="bg-slate-700 text-slate-300">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>
                    <Link
                      to={project.link}
                      className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300"
                    >
                      En savoir plus
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-16">
            <Button
              variant="default"
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium"
            >
              Voir tous les projets
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
