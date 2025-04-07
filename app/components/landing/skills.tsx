import { motion } from "framer-motion";
import { Progress } from "~/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Badge } from "~/components/ui/badge";
import { useState, ReactElement } from "react";
import React from "~/icons/react";
import TypeScript from "~/icons/typescript";
import Nextjs from "~/icons/next";
import TailwindCSS from "~/icons/tailwindcss";
import Motion from "~/icons/motion";
import PostgreSQL from "~/icons/postgresql";
import Github from "~/icons/github";
import Encore from "~/icons/encore";
import MySQL from "~/icons/mysql";

// Types pour les compétences
interface Skill {
  name: string;
  icon: JSX.Element;
  proficiency: number;
  category: string;
  description: string;
  experience: string;
}

// Données des compétences
const skills: Skill[] = [
  // Frontend
  {
    name: "React",
    icon: <React />,
    proficiency: 90,
    category: "frontend",
    description:
      "Développement d'applications web modernes et performantes avec React et son écosystème",
    experience: "5 ans d'expérience",
  },
  {
    name: "TypeScript",
    icon: <TypeScript />,
    proficiency: 85,
    category: "frontend",
    description:
      "Utilisation de TypeScript pour créer des applications robustes et maintenables",
    experience: "4 ans d'expérience",
  },
  {
    name: "Next.js",
    icon: <Nextjs />,
    proficiency: 80,
    category: "frontend",
    description:
      "Création d'applications performantes et optimisées pour le SEO avec Next.js",
    experience: "3 ans d'expérience",
  },
  {
    name: "Tailwind CSS",
    icon: <TailwindCSS />,
    proficiency: 95,
    category: "frontend",
    description:
      "Conception d'interfaces utilisateur élégantes et responsives avec Tailwind CSS",
    experience: "4 ans d'expérience",
  },
  {
    name: "Framer Motion",
    icon: <Motion />,
    proficiency: 75,
    category: "frontend",
    description:
      "Création d'animations fluides et interactives pour améliorer l'expérience utilisateur",
    experience: "2 ans d'expérience",
  },
  // Backend
  {
    name: "Encore",
    icon: <Encore />,
    proficiency: 80,
    category: "backend",
    description:
      "Création d'APIs RESTful robustes et bien structurées avec Express",
    experience: "4 ans d'expérience",
  },
  {
    name: "PostgreSQL",
    icon: <PostgreSQL />,
    proficiency: 75,
    category: "backend",
    description:
      "Conception et optimisation de bases de données relationnelles pour des applications performantes",
    experience: "3 ans d'expérience",
  },
  {
    name: "MySQL",
    icon: <MySQL />,
    proficiency: 75,
    category: "database",
    description:
      "Conception et optimisation de bases de données relationnelles pour des applications performantes",
    experience: "3 ans d'expérience",
  },
  // Autres
  {
    name: "Git",
    icon: <Github />,
    proficiency: 90,
    category: "tools",
    description: "Gestion de versions et collaboration efficace avec Git",
    experience: "5 ans d'expérience",
  },
];

// Catégories de compétences
const categories = [
  { id: "all", label: "Toutes" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Base de données" },
  { id: "tools", label: "Outils" },
  { id: "design", label: "Design" },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  // Animation variants pour les éléments
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="skills"
      className="relative py-28 bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
              Expertise
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">
              Mes Compétences
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              Un aperçu des technologies et outils que j'utilise pour créer des
              applications web modernes et performantes.
            </p>
          </motion.div>

          <div className="mb-12">
            <Tabs
              defaultValue="all"
              className="w-full"
              onValueChange={setActiveCategory}
            >
              <TabsList className="mx-auto bg-slate-800 border border-slate-700 p-1">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white transition-all"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value={activeCategory} className="mt-12">
                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {filteredSkills.map((skill, index) => (
                    <TooltipProvider key={skill.name}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <motion.div
                            variants={itemVariants}
                            className="flex flex-col items-center group"
                          >
                            <div className="w-20 h-20 bg-slate-800/80 rounded-xl flex items-center justify-center p-4 mb-3 border border-slate-700 group-hover:border-cyan-500/50 transition-all shadow-lg group-hover:shadow-cyan-500/10">
                              {skill.icon}
                            </div>
                            <span className="text-white font-medium text-sm">
                              {skill.name}
                            </span>
                            <div className="w-full mt-2">
                              <Progress
                                value={skill.proficiency}
                                className="h-1.5 bg-slate-700"
                              >
                                <div
                                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                                  style={{ width: `${skill.proficiency}%` }}
                                />
                              </Progress>
                            </div>
                          </motion.div>
                        </TooltipTrigger>
                        <TooltipContent
                          side="bottom"
                          className="bg-slate-800 border-slate-700 text-white p-4 max-w-xs"
                        >
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-lg font-bold text-cyan-400">
                                {skill.name}
                              </span>
                              <Badge
                                variant="outline"
                                className="bg-cyan-500/20 text-cyan-300 border-none"
                              >
                                {skill.experience}
                              </Badge>
                            </div>
                            <p className="text-gray-300 text-sm">
                              {skill.description}
                            </p>
                            <div className="pt-1">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs text-gray-400">
                                  Niveau de maîtrise
                                </span>
                                <span className="text-xs font-medium text-cyan-400">
                                  {skill.proficiency}%
                                </span>
                              </div>
                              <Progress
                                value={skill.proficiency}
                                className="h-2 bg-slate-700"
                              >
                                <div
                                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                                  style={{ width: `${skill.proficiency}%` }}
                                />
                              </Progress>
                            </div>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="mt-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-white mb-3">
                  Toujours en apprentissage
                </h3>
                <p className="text-gray-300 mb-4">
                  Je suis passionné par les nouvelles technologies et je
                  m'efforce continuellement d'élargir mes compétences pour
                  rester à la pointe de l'innovation.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge className="bg-slate-700 text-cyan-300 hover:bg-slate-600">
                    Rust
                  </Badge>
                  <Badge className="bg-slate-700 text-cyan-300 hover:bg-slate-600">
                    Web3
                  </Badge>
                  <Badge className="bg-slate-700 text-cyan-300 hover:bg-slate-600">
                    Machine Learning
                  </Badge>
                  <Badge className="bg-slate-700 text-cyan-300 hover:bg-slate-600">
                    WebAssembly
                  </Badge>
                  <Badge className="bg-slate-700 text-cyan-300 hover:bg-slate-600">
                    Cloud Native
                  </Badge>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
