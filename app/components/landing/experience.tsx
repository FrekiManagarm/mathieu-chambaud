import { motion } from "framer-motion";
import { useRef } from "react";

// Types pour les expériences
interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  logo?: string;
}

// Données des expériences professionnelles
const experiences: Experience[] = [
  {
    title: "Développeur Full Stack Senior",
    company: "TechInnovate",
    period: "2020 - Présent",
    description:
      "Conception et développement d'applications web modernes avec React, NextJS et Node.js. Mise en place d'architectures évolutives et performantes. Leadership technique sur plusieurs projets majeurs.",
    skills: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    logo: "/images/company1.png",
  },
  {
    title: "Développeur Front-end",
    company: "DigitalDesign",
    period: "2018 - 2020",
    description:
      "Création d'interfaces utilisateur réactives et intuitives. Optimisation des performances et de l'accessibilité. Collaboration avec les équipes de design pour améliorer l'expérience utilisateur.",
    skills: ["React", "JavaScript", "SCSS", "UI/UX", "Jest"],
    logo: "/images/company2.png",
  },
  {
    title: "Développeur Web Junior",
    company: "WebSolutions",
    period: "2016 - 2018",
    description:
      "Développement et maintenance de sites web et applications. Intégration de maquettes et implémentation de fonctionnalités interactives. Collaboration au sein d'une équipe agile.",
    skills: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "Git"],
    logo: "/images/company3.png",
  },
];

// Variants d'animation pour les éléments de la timeline
const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const timelineItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2 + index * 0.2,
      ease: "easeOut",
    },
  }),
};

export function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);

  return (
    <section id="experience" className="relative py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800 z-0"></div>

      <div className="container relative z-10 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={titleVariants}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
              Parcours Professionnel
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">
              Mon Expérience
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              Mon parcours professionnel m'a permis de développer une expertise
              solide dans le développement d'applications web modernes.
            </p>
          </motion.div>

          <div className="relative" ref={timelineRef}>
            {/* Ligne verticale de la timeline */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="mb-16 last:mb-0 group"
                custom={index}
                initial="hidden"
                animate="visible"
                variants={timelineItemVariants}
              >
                <div
                  className={`flex flex-col md:flex-row gap-8 ${
                    index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Dot de la timeline */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                    <motion.div
                      className={`w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-800 mt-8 z-10 group-hover:shadow-[0_0_0_4px_rgba(6,182,212,0.2)] transition-all duration-300`}
                      whileHover={{ scale: 1.2 }}
                    ></motion.div>
                  </div>

                  {/* Contenu */}
                  <div
                    className={`md:w-1/2 ${
                      index % 2 !== 0 ? "md:text-right" : ""
                    }`}
                  >
                    <motion.div
                      className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all shadow-lg hover:shadow-cyan-500/10 h-full"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        {exp.logo && (
                          <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center">
                            <img
                              src={exp.logo}
                              alt={exp.company}
                              className="w-8 h-8"
                            />
                          </div>
                        )}
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className="text-cyan-400 font-medium">
                              {exp.company}
                            </span>
                            <span className="text-gray-400 text-sm">•</span>
                            <span className="text-gray-400 text-sm">
                              {exp.period}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="rounded-full bg-slate-700/60 px-3 py-1 text-xs text-cyan-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Espace pour l'autre côté de la timeline */}
                  <div className="md:w-1/2 hidden md:block"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
