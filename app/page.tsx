import Image from "next/image";
import {
  ArrowUpRight,
  BracketsCurly,
  EnvelopeSimple,
  GithubLogo,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
import { ContactPanel, Reveal } from "./components/portfolio-interactions";

const projects = [
  {
    name: "Orylo",
    year: "2025",
    href: "https://orylo.app",
    scope: "SaaS anti-fraude Stripe",
    description:
      "Detection de card testing, signaux de risque en temps reel, blocage automatique et briefs quotidiens pour les equipes.",
    impact: "Stripe OAuth, Mastra, PostgreSQL, alertes Slack et email.",
  },
  {
    name: "Biume",
    year: "2024",
    href: "#contact",
    scope: "Produit IA pour therapeutes animaliers",
    description:
      "CRM, agenda, facturation et generation de rapports de consultation a partir de notes vocales structurees.",
    impact: "Parcours SaaS complet, prompt engineering, UX et architecture.",
  },
  {
    name: "FieldOps",
    year: "2024",
    href: "#experience",
    scope: "Application mobile terrain",
    description:
      "App React Native offline-first pour inspections eoliennes, synchronisation robuste et usage en conditions reseau degradees.",
    impact: "300+ techniciens equipes, 1 000+ inspections gerees.",
  },
  {
    name: "Singulair Finance",
    year: "2024",
    href: "#experience",
    scope: "Agents IA metier",
    description:
      "Extraction, controle, generation et envoi de factures avec orchestration d'agents, retries et validations humaines.",
    impact: "700+ bons de commande annuels, 80% de temps manuel economise.",
  },
];

const skills = [
  {
    title: "Agents IA",
    items: ["Mastra", "Vercel AI SDK", "OpenAI", "Claude API", "RAG"],
  },
  {
    title: "Full-stack",
    items: ["Next.js", "React", "Node.js", "PostgreSQL", "Prisma"],
  },
  {
    title: "Mobile",
    items: ["React Native", "Flutter", "Offline sync", "iOS", "Android"],
  },
  {
    title: "Production",
    items: ["Docker", "GitHub Actions", "Vercel", "Supabase", "Sentry"],
  },
];

const experience = [
  {
    period: "2023 - aujourd'hui",
    title: "AI Engineer et Lead Developer",
    company: "Singulair",
    text: "Strategie agents IA, produits internes critiques et applications terrain dans les energies renouvelables.",
  },
  {
    period: "2022 - 2023",
    title: "Developpeur mobile",
    company: "Niji",
    text: "Applications Flutter, iOS et Android pour clients grands comptes, avec contraintes produit et qualite fortes.",
  },
  {
    period: "2020 - 2022",
    title: "Developpeur web full-stack",
    company: "Kweezine",
    text: "Plateforme B2B alimentaire construite de l'API aux interfaces metier, avec integration paiement.",
  },
];

export default function Home() {
  return (
    <main className="min-h-[100dvh] bg-[var(--background)] text-[var(--foreground)]">
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

function Navigation() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 border-b border-[var(--line)] bg-[rgba(251,251,249,0.82)] backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-5">
        <a href="#top" className="text-sm font-semibold tracking-tight" aria-label="Retour en haut">
          Mathieu Chambaud
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {[
            ["Projets", "#projects"],
            ["Competences", "#skills"],
            ["Parcours", "#experience"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </div>
        <a href="mailto:mathchambaud@icloud.com" className="quiet-button" aria-label="Envoyer un email">
          <EnvelopeSimple size={17} weight="bold" />
          <span className="hidden sm:inline">Ecrire</span>
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="px-5 pt-32 md:pt-40">
      <div className="mx-auto grid min-h-[calc(100dvh-10rem)] max-w-[1180px] grid-cols-1 gap-14 pb-20 md:grid-cols-[1fr_320px] md:items-end">
        <div>
          <Reveal>
            <p className="eyebrow">AI Engineer et Lead Developer</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-[850px] text-[clamp(3rem,7vw,6.7rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-balance">
              Je construis des produits IA sobres, utiles et fiables.
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-8 max-w-[610px] text-lg leading-8 text-[var(--muted)]">
              Base a Bordeaux, je conçois des applications web, mobile et agents IA pour automatiser
              des operations metier concretes : facturation, inspections terrain, anti-fraude et rapports.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="primary-link">
                Voir les projets
                <ArrowUpRight size={18} weight="bold" />
              </a>
              <a href="#contact" className="secondary-link">
                Me contacter
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <aside className="max-w-[320px] border-t border-[var(--line)] pt-5 md:justify-self-end">
            <Image
              src="/media/mathieu-chambaud.jpg"
              alt="Portrait de Mathieu Chambaud"
              width={1065}
              height={1600}
              priority
              className="aspect-[4/5] w-full rounded-[1.25rem] object-cover object-top grayscale-[18%]"
            />
            <div className="mt-5 space-y-3 text-sm text-[var(--muted)]">
              <p className="flex items-center gap-2">
                <MapPin size={17} weight="bold" className="text-[var(--accent)]" />
                Bordeaux, France
              </p>
              <p>Disponible pour missions freelance, produit interne ou opportunite long terme.</p>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="px-5 py-24 md:py-32">
      <div className="mx-auto max-w-[1180px]">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 border-t border-[var(--line)] pt-8 md:grid-cols-[0.45fr_1fr]">
            <p className="eyebrow">Projets</p>
            <div>
              <h2 className="max-w-[680px] text-4xl font-semibold leading-none tracking-[-0.04em] md:text-6xl">
                Des cas reels, pas des vitrines creuses.
              </h2>
              <p className="mt-6 max-w-[620px] text-base leading-7 text-[var(--muted)]">
                Chaque projet ci-dessous part d&apos;un probleme operationnel : risque financier, temps perdu,
                synchronisation terrain ou decision metier a fiabiliser.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.04}>
              <article className="group grid grid-cols-1 gap-6 py-8 md:grid-cols-[170px_1fr_220px] md:items-start md:py-10">
                <div className="flex items-center justify-between md:block">
                  <p className="text-xl font-semibold tracking-[-0.02em]">{project.name}</p>
                  <p className="font-mono text-xs text-[var(--muted)] md:mt-3">{project.year}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--accent)]">{project.scope}</p>
                  <h3 className="mt-3 max-w-[650px] text-2xl font-semibold leading-tight tracking-[-0.025em]">
                    {project.description}
                  </h3>
                </div>
                <div className="md:text-right">
                  <p className="text-sm leading-6 text-[var(--muted)]">{project.impact}</p>
                  <a
                    href={project.href}
                    target={project.href.startsWith("http") ? "_blank" : undefined}
                    rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] transition-colors duration-200 group-hover:text-[var(--accent)]"
                  >
                    Ouvrir
                    <ArrowUpRight size={16} weight="bold" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="px-5 py-24 md:py-32">
      <div className="mx-auto max-w-[1180px]">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 border-t border-[var(--line)] pt-8 md:grid-cols-[0.45fr_1fr]">
            <p className="eyebrow">Competences</p>
            <h2 className="max-w-[760px] text-4xl font-semibold leading-none tracking-[-0.04em] md:text-6xl">
              Un stack court, choisi pour livrer proprement.
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
          {skills.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.04}>
              <div className="border-t border-[var(--line)] pt-5">
                <h3 className="text-xl font-semibold tracking-[-0.02em]">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="skill-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="px-5 py-24 md:py-32">
      <div className="mx-auto max-w-[1180px]">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 border-t border-[var(--line)] pt-8 md:grid-cols-[0.45fr_1fr]">
            <p className="eyebrow">Parcours</p>
            <p className="max-w-[720px] text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-5xl">
              Web full-stack, mobile terrain, puis agents IA. La trajectoire suit le reel.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {experience.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="grid grid-cols-1 gap-5 py-8 md:grid-cols-[180px_1fr] md:py-10">
                <p className="font-mono text-xs text-[var(--muted)]">{item.period}</p>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-[0.7fr_1fr]">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.025em]">{item.title}</h3>
                    <p className="mt-2 text-sm font-semibold text-[var(--accent)]">{item.company}</p>
                  </div>
                  <p className="max-w-[560px] text-base leading-7 text-[var(--muted)]">{item.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-5 py-24 md:py-32">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 border-t border-[var(--line)] pt-8 lg:grid-cols-[0.8fr_1fr]">
        <Reveal>
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-5 max-w-[620px] text-4xl font-semibold leading-none tracking-[-0.04em] md:text-6xl">
              Parlons du probleme avant de parler solution.
            </h2>
            <p className="mt-7 max-w-[560px] text-base leading-7 text-[var(--muted)]">
              Une mission, un produit interne, un agent IA a cadrer ou une architecture a challenger :
              envoie-moi le contexte et je te reponds directement.
            </p>
            <div className="mt-10 space-y-3">
              <a className="contact-link" href="mailto:mathchambaud@icloud.com">
                <EnvelopeSimple size={18} weight="bold" />
                mathchambaud@icloud.com
              </a>
              <a className="contact-link" href="tel:+33762079298">
                <BracketsCurly size={18} weight="bold" />
                07 62 07 92 98
              </a>
              <a className="contact-link" href="https://github.com/FrekiManagarm" target="_blank" rel="noreferrer">
                <GithubLogo size={18} weight="bold" />
                github.com/FrekiManagarm
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <ContactPanel />
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-5 pb-10">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-3 border-t border-[var(--line)] pt-6 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>Mathieu Chambaud. AI Engineer et Lead Developer.</p>
        <p className="font-mono">Bordeaux / 2026</p>
      </div>
    </footer>
  );
}
