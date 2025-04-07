import { motion } from "framer-motion";
import { Button } from "~/components/ui/button";

export function About() {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium">
            À propos de moi
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Développeur{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
              passionné
            </span>{" "}
            & créatif
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden before:absolute before:inset-0 before:bg-indigo-500/20 before:z-10 relative">
                <img
                  src="/images/about-image.jpg"
                  alt="Mathieu Chambaud working"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
              </div>

              <div className="absolute -bottom-6 right-4 md:-right-6 bg-slate-800/90 backdrop-blur-md p-4 rounded-xl border border-slate-700/50 shadow-xl max-w-[280px]">
                <div className="flex items-center gap-3">
                  <div className="bg-green-500/20 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-white font-medium">
                    5+ ans d'expérience
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-7 space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Développeur web fullstack spécialisé dans la création
              d'applications web modernes et performantes. Ma passion est de
              transformer des idées en expériences digitales exceptionnelles qui
              répondent aux besoins des utilisateurs tout en atteignant les
              objectifs commerciaux.
            </p>

            <div className="grid grid-cols-2 gap-4 my-8">
              {[
                { title: "Frontend", desc: "React, Next.js, TailwindCSS" },
                { title: "Backend", desc: "Node.js, API RESTful, Databases" },
                { title: "UI/UX", desc: "Design intuitif, accessibilité" },
                {
                  title: "Mobile",
                  desc: "React Native, applications responsive",
                },
              ].map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/30 backdrop-blur-sm p-5 rounded-xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:bg-slate-800/50 group"
                >
                  <h3 className="text-indigo-400 font-semibold mb-2 group-hover:text-indigo-300 transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{skill.desc}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-gray-300">
              Mon approche combine créativité et expertise technique pour créer
              des produits qui non seulement fonctionnent parfaitement, mais qui
              offrent également une expérience utilisateur exceptionnelle.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-300 shadow-lg shadow-indigo-600/20"
                asChild
              >
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Télécharger mon CV
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 transition-all duration-300"
                asChild
              >
                <a href="#contact" className="inline-flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Me contacter
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
