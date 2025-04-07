import { type MetaFunction } from "@remix-run/node";
import { Hero } from "~/components/landing/hero";
import { About } from "~/components/landing/about";
import { Projects } from "~/components/landing/projects";
import { Contact } from "~/components/landing/contact";
import { Experience } from "~/components/landing/experience";
import { Navbar } from "~/components/landing/navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "Mathieu Chambaud - Portfolio" },
    {
      name: "description",
      content: "Portfolio professionnel de Mathieu Chambaud",
    },
  ];
};

export default function Index() {
  return (
    <main className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
