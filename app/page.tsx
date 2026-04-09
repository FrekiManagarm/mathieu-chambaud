"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";

/* ─── Data ──────────────────────────────────────────────────────────────── */

const TECH_TICKER = [
  "TypeScript", "Next.js", "React Native", "Flutter", "Mastra",
  "Vercel AI SDK", "Python", "PostgreSQL", "Docker", "Tailwind CSS",
  "Prisma", "FastAPI", "LangChain", "OpenAI", "Claude API",
  "React", "Node.js", "Supabase", "Bun", "GitHub Actions",
];

const METRICS = [
  { value: "300+", label: "Techniciens terrain" },
  { value: "1 000+", label: "Inspections éoliennes" },
  { value: "700+", label: "Bons de commande / an" },
  { value: "80%", label: "Temps économisé" },
];

const EXPERIENCE = [
  {
    title: "AI Engineer · Lead Developer",
    company: "Singulair",
    location: "Bordeaux",
    period: "Nov. 2023 — Présent",
    type: "CDI",
    description: "Pilotage de la stratégie agents IA et développement full-stack sur plusieurs produits à fort impact dans les énergies renouvelables.",
    bullets: [
      "Singulair Finance — automatisation bout-en-bout de la génération de factures (700+ BDC/an, 80% de temps économisé)",
      "Agent de planification terrain — optimisation multi-personnes, réduction des conflits de ressources de 60%",
      "FieldOps (React Native) — app d'inspection éolienne déployée auprès de 300+ techniciens, 1 000+ inspections",
      "DataUploader (Flutter) — app desktop SFTP multi-plateformes avec traitement Python embarqué",
      "Encadrement d'un stagiaire, définition des standards d'architecture agents IA",
    ],
    tags: ["Next.js", "React Native", "Flutter", "Python", "Mastra", "TypeScript", "PostgreSQL", "Docker"],
  },
  {
    title: "Développeur Mobile",
    company: "Niji",
    location: "Bordeaux",
    period: "2022 — 2023",
    type: "Alternance",
    description: "Développement d'applications mobiles pour clients grands comptes en équipe Agile.",
    bullets: [
      "Application de chat + module vocal en Flutter pour client international",
      "Mise à jour de l'application Android des pilotes du Paris-Dakar",
      "Application iOS pour récupération de données d'une IA vocale",
    ],
    tags: ["Flutter", "Dart", "iOS", "Android", "REST API", "Agile"],
  },
  {
    title: "Développeur Web Full-Stack",
    company: "Kweezine",
    location: "Bordeaux",
    period: "2020 — 2022",
    type: "Alternance",
    description: "Conception et développement full-stack d'une plateforme web B2B pour le secteur alimentaire.",
    bullets: [
      "API REST avec Laravel + MySQL, front-end Next.js / React",
      "Architecture full-stack complète de la plateforme de A à Z",
      "Intégration de systèmes de paiement",
    ],
    tags: ["Next.js", "React", "Laravel", "MySQL", "PHP"],
  },
];

const PROJECTS = [
  {
    title: "Orylo.app",
    tagline: "Anti-fraude Stripe en temps réel",
    status: "Production",
    statusOk: true,
    description: "SaaS de détection et prévention de fraude par carte bancaire (card testing) pour utilisateurs Stripe. Analyse 4 signaux de risque en temps réel, blocage automatique, morning brief quotidien email/Slack.",
    challenge: "Les attaques de card testing coûtent des milliers d'euros en frais Stripe. Orylo détecte les patterns suspects avant qu'ils ne causent des dommages.",
    tags: ["Next.js 15", "Mastra", "PostgreSQL", "Supabase", "Stripe OAuth", "Vercel"],
    href: "https://orylo.app",
    year: "2024–2025",
  },
  {
    title: "Biume.com",
    tagline: "SaaS santé animale avec IA",
    status: "Standby",
    statusOk: false,
    description: "Application complète pour thérapeutes animaliers : CRM cabinet, génération automatique de rapports de consultation via IA (voix → texte → rapport structuré), agenda intelligent, facturation RGPD.",
    challenge: "Fine-tuning du prompt engineering pour des rapports médicaux cohérents. UI/UX conçu sans designer, de A à Z.",
    tags: ["Next.js 14", "tRPC", "GPT-4", "Mastra", "PostgreSQL", "Shadcn/UI"],
    href: "#",
    year: "2023–2024",
  },
  {
    title: "FieldOps",
    tagline: "Inspection éolienne mobile",
    status: "Production · 300+ utilisateurs",
    statusOk: true,
    description: "Application React Native d'inspection éolienne deployée auprès de 300+ techniciens terrain. Refonte architecturale pour support multi-inspections parallèles, synchronisation offline/online robuste.",
    challenge: "Gestion des conflits de données offline/online et validation de métadonnées critiques terrain.",
    tags: ["React Native", "TypeScript", "Offline Sync", "REST API"],
    href: "#",
    year: "2023–2024",
  },
  {
    title: "Singulair Finance",
    tagline: "Automatisation de la facturation par agents IA",
    status: "Production · 700+ BDC/an",
    statusOk: true,
    description: "Système d'orchestration d'agents IA pour l'automatisation bout-en-bout de la génération de factures : extraction, validation, génération et envoi automatique.",
    challenge: "Orchestration d'agents Mastra avec logique de retry, gestion des cas limites métier et 80% de réduction du traitement manuel.",
    tags: ["Mastra", "Next.js", "Python", "PostgreSQL"],
    href: "#",
    year: "2024",
  },
];

const SKILLS = {
  "IA & Agents": ["Mastra", "Vercel AI SDK", "LangChain", "OpenAI GPT-4", "Claude API", "RAG", "Prompt Engineering", "Vector DB", "Orchestration agents"],
  "Frontend": ["TypeScript", "Next.js App Router", "React", "Tailwind CSS", "Shadcn/UI", "Vue.js", "React Query", "Zustand"],
  "Backend": ["Node.js", "Python", "FastAPI", "NestJS", "Laravel", "PostgreSQL", "Redis", "Prisma", "Drizzle"],
  "Mobile & Desktop": ["React Native", "Flutter", "Dart", "iOS (Swift)", "Android (Kotlin)", "Offline Sync"],
  "DevOps": ["Docker", "Git / GitHub", "GitHub Actions", "Vercel", "Supabase", "Bun", "Sentry"],
};

const EDUCATION = [
  {
    degree: "Master Expert Développement Web & Mobile",
    level: "Bac+5 · RNCP Niveau 7",
    school: "YNOV Campus",
    location: "Bordeaux",
    period: "2018 — 2023",
    note: "Formation en alternance (3 ans). Management d'un labo Flutter (30 participants).",
  },
  {
    degree: "BAC STL — Sciences et Technologies de Laboratoire",
    level: "Baccalauréat",
    school: "Lycée",
    location: "Bordeaux",
    period: "2018",
    note: "",
  },
];

/* ─── Scroll reveal hook ─────────────────────────────────────────────────── */

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.06 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

/* ─── Components ─────────────────────────────────────────────────────────── */

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}>
      {children}
    </div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-[var(--c-muted)] mb-4">
      {children}
    </p>
  );
}

function SectionNumber({ n }: { n: string }) {
  return (
    <span className="font-display text-[clamp(6rem,15vw,12rem)] font-black text-[var(--c-surface)] leading-none select-none pointer-events-none absolute -top-4 -left-4 z-0">
      {n}
    </span>
  );
}

function Chip({ children }: { children: string }) {
  return (
    <span className="font-mono text-[10px] px-2.5 py-1 rounded-full border border-[var(--c-border)] text-[var(--c-muted)] tracking-wide">
      {children}
    </span>
  );
}

function StatusDot({ ok }: { ok: boolean }) {
  return (
    <span className={`inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase ${ok ? "text-emerald-500" : "text-amber-500"}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${ok ? "bg-emerald-500" : "bg-amber-400"}`} />
    </span>
  );
}

function ThemeToggle({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
  return (
    <button onClick={onToggle} aria-label="Thème"
      className="w-7 h-7 flex items-center justify-center rounded border border-[var(--c-border)] text-[var(--c-muted)] hover:text-[var(--c-accent)] hover:border-[var(--c-accent)] transition-colors">
      {dark
        ? <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
        : <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      }
    </button>
  );
}

function Typewriter({ words }: { words: string[] }) {
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState(0);
  const [del, setDel] = useState(false);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => {
      if (!del) {
        if (sub < words[idx].length) setSub(s => s + 1);
        else { setPaused(true); setTimeout(() => { setDel(true); setPaused(false); }, 2200); }
      } else {
        if (sub > 0) setSub(s => s - 1);
        else { setDel(false); setIdx(i => (i + 1) % words.length); }
      }
    }, del ? 30 : 70);
    return () => clearTimeout(t);
  }, [sub, del, idx, words, paused]);
  return <>{words[idx].substring(0, sub)}<span className="animate-blink">_</span></>;
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function Portfolio() {
  const [dark, setDark] = useState(false);
  const [navSolid, setNavSolid] = useState(false);
  const [skillCat, setSkillCat] = useState("IA & Agents");
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const saved = localStorage.getItem("mc-theme");
    const isDark = saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    const fn = () => setNavSolid(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("mc-theme", next ? "dark" : "light");
  };

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    await new Promise(r => setTimeout(r, 1300));
    setFormState("sent");
  };

  const navLinks = [
    { id: "about",      label: "À propos" },
    { id: "experience", label: "Expériences" },
    { id: "projects",   label: "Projets" },
    { id: "education",  label: "Formation" },
    { id: "contact",    label: "Contact" },
  ];

  return (
    <div className="bg-[var(--c-bg)] text-[var(--c-text)] min-h-screen transition-colors duration-300">

      {/* ── NAV ──────────────────────────────────────────────────────────── */}
      <nav
        style={{ backgroundColor: navSolid ? "var(--c-nav)" : "transparent", backdropFilter: navSolid ? "blur(12px)" : "none" }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${navSolid ? "border-b border-[var(--c-border)]" : ""}`}
      >
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <button onClick={() => go("hero")} className="font-display font-black text-lg italic text-[var(--c-accent)] leading-none">
            MC
          </button>
          <div className="flex items-center gap-5 md:gap-7">
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map(l => (
                <button key={l.id} onClick={() => go(l.id)}
                  className="font-sans text-xs font-600 tracking-wider text-[var(--c-muted)] hover:text-[var(--c-text)] transition-colors uppercase">
                  {l.label}
                </button>
              ))}
            </div>
            <ThemeToggle dark={dark} onToggle={toggleTheme} />
          </div>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section id="hero" className="min-h-screen flex flex-col justify-end px-6 pt-14 pb-16">
        <div className="max-w-6xl mx-auto w-full">

          {/* Status pill */}
          <div className="animate-fade-in mb-10">
            <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 border border-[var(--c-border)] rounded-full text-[var(--c-muted)]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Disponible · Bordeaux, France
            </span>
          </div>

          {/* Name block */}
          <div className="animate-fade-up delay-100">
            <h1 className="font-display font-black leading-[0.85] tracking-[-0.02em] text-[clamp(5rem,14vw,13rem)] text-[var(--c-text)]">
              MATHIEU
              <br />
              <span className="italic text-[var(--c-accent)]">CHAMBAUD</span>
            </h1>
          </div>

          {/* Bottom grid */}
          <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-end animate-fade-up delay-300">
            <div>
              <p className="font-sans text-base font-600 text-[var(--c-muted)] mb-2 uppercase tracking-wider">
                AI Engineer · Lead Developer
              </p>
              <p className="font-mono text-sm text-[var(--c-text)] leading-relaxed">
                <Typewriter words={[
                  "Agents IA & Automatisation métier",
                  "Next.js · React Native · Flutter",
                  "TypeScript · Python · Mastra",
                  "5 ans d'expérience · Bordeaux",
                ]} />
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end animate-fade-up delay-500">
              <button onClick={() => go("projects")}
                className="px-5 py-2.5 bg-[var(--c-accent)] text-white font-sans text-xs font-700 uppercase tracking-wider rounded hover:opacity-90 transition-opacity">
                Mes projets →
              </button>
              <button onClick={() => go("contact")}
                className="px-5 py-2.5 border border-[var(--c-border)] text-[var(--c-text)] font-sans text-xs font-700 uppercase tracking-wider rounded hover:border-[var(--c-accent)] hover:text-[var(--c-accent)] transition-colors">
                Me contacter
              </button>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="max-w-6xl mx-auto w-full mt-14 animate-fade-in delay-700">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-[var(--c-border)]" />
            <div className="animate-scroll">
              <svg className="text-[var(--c-faint)]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ───────────────────────────────────────────────────────── */}
      <div className="border-y border-[var(--c-border)] bg-[var(--c-surface)] overflow-hidden py-3">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...TECH_TICKER, ...TECH_TICKER].map((t, i) => (
            <span key={i} className="font-mono text-[10px] tracking-[0.25em] text-[var(--c-faint)] uppercase mx-5">
              {t}
              <span className="ml-5 text-[var(--c-accent)]">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── METRICS ──────────────────────────────────────────────────────── */}
      <div className="border-b border-[var(--c-border)]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4">
          {METRICS.map((m, i) => (
            <Reveal key={i} delay={i * 60}
              className={`py-8 px-4 text-center ${i < 3 ? "border-r border-[var(--c-border)]" : ""}`}>
              <div className="font-display font-black text-[clamp(2.2rem,5vw,3.5rem)] text-[var(--c-accent)] leading-none mb-1">
                {m.value}
              </div>
              <div className="font-mono text-[10px] tracking-widest uppercase text-[var(--c-faint)]">
                {m.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <section id="about" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
            {/* Left label col */}
            <Reveal>
              <div className="md:pt-3">
                <Eyebrow>01 · À propos</Eyebrow>
                <div className="w-8 h-0.5 bg-[var(--c-accent)] mb-8" />
                <div className="hidden md:block">
                  <p className="font-mono text-[10px] tracking-widest uppercase text-[var(--c-faint)] mb-4">Localisation</p>
                  <p className="font-sans text-sm text-[var(--c-muted)]">Bordeaux, France</p>
                  <div className="mt-6">
                    <p className="font-mono text-[10px] tracking-widest uppercase text-[var(--c-faint)] mb-4">Langues</p>
                    <p className="font-sans text-sm text-[var(--c-muted)]">🇫🇷 Natif</p>
                    <p className="font-sans text-sm text-[var(--c-muted)]">🇬🇧 Professionnel</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right content col */}
            <div>
              <Reveal delay={80}>
                <h2 className="font-display font-black text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] tracking-[-0.02em] text-[var(--c-text)] mb-8">
                  Full-stack passionné par
                  <br />
                  <span className="italic text-[var(--c-accent)]">les agents IA.</span>
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <div className="space-y-4 text-[var(--c-muted)] font-sans text-sm leading-relaxed mb-10 max-w-xl">
                  <p>
                    Développeur full-stack avec 5 ans d&apos;expérience, spécialisé en{" "}
                    <span className="text-[var(--c-text)] font-600">intelligence artificielle et agents autonomes</span>.
                    Je conçois des applications web et mobile qui automatisent des processus complexes
                    et génèrent un impact business mesurable.
                  </p>
                  <p>
                    Chez Singulair, je pilote la stratégie agents IA et développe des produits critiques
                    dans les énergies renouvelables — apps mobiles deployées à 300+ techniciens,
                    systèmes de facturation automatisée, agents de planification.
                  </p>
                  <p>
                    En parallèle, je construis des SaaS en autonomie totale (Orylo, Biume) :
                    de l&apos;architecture à la prod, design inclus.
                  </p>
                </div>
              </Reveal>

              {/* Skills */}
              <Reveal delay={200}>
                <div className="flex flex-wrap gap-2 mb-5">
                  {Object.keys(SKILLS).map(cat => (
                    <button key={cat} onClick={() => setSkillCat(cat)}
                      className={`font-mono text-[10px] tracking-wider uppercase px-3 py-1.5 rounded border transition-colors duration-200 ${
                        skillCat === cat
                          ? "border-[var(--c-accent)] text-[var(--c-accent)] bg-[var(--c-surface)]"
                          : "border-[var(--c-border)] text-[var(--c-faint)] hover:text-[var(--c-muted)] hover:border-[var(--c-muted)]"
                      }`}>
                      {cat}
                    </button>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 min-h-[64px]">
                  {(SKILLS[skillCat as keyof typeof SKILLS] ?? []).map(s => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────────────────────── */}
      <section id="experience" className="py-24 md:py-32 px-6 border-t border-[var(--c-border)]">
        <div className="max-w-6xl mx-auto">
          <Reveal><Eyebrow>02 · Expériences professionnelles</Eyebrow></Reveal>

          <div className="mt-12 space-y-0">
            {EXPERIENCE.map((exp, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className={`group grid grid-cols-1 md:grid-cols-[160px_1fr] gap-0 md:gap-8 ${i < EXPERIENCE.length - 1 ? "border-b border-[var(--c-border)]" : ""} py-10`}>
                  {/* Left metadata */}
                  <div className="mb-4 md:mb-0 md:pt-1">
                    <p className="font-mono text-[10px] text-[var(--c-faint)] tracking-wider mb-2">{exp.period}</p>
                    <span className="font-mono text-[9px] tracking-widest uppercase px-2 py-1 border border-[var(--c-accent)] text-[var(--c-accent)] rounded">
                      {exp.type}
                    </span>
                  </div>

                  {/* Right content */}
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                      <h3 className="font-display font-black text-2xl md:text-3xl text-[var(--c-text)] group-hover:text-[var(--c-accent)] transition-colors">
                        {exp.title}
                      </h3>
                      <span className="font-sans text-sm font-600 text-[var(--c-muted)]">
                        @ {exp.company} · {exp.location}
                      </span>
                    </div>
                    <p className="font-sans text-sm text-[var(--c-muted)] leading-relaxed mb-4">{exp.description}</p>
                    <ul className="space-y-2 mb-5">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2 font-sans text-sm text-[var(--c-muted)]">
                          <span className="text-[var(--c-accent)] font-black mt-0.5 shrink-0">→</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(t => <Chip key={t}>{t}</Chip>)}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────────────────── */}
      <section id="projects" className="py-24 md:py-32 px-6 border-t border-[var(--c-border)] bg-[var(--c-surface)]">
        <div className="max-w-6xl mx-auto">
          <Reveal><Eyebrow>03 · Projets</Eyebrow></Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {PROJECTS.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="group h-full bg-[var(--c-bg)] border border-[var(--c-border)] rounded-lg p-6 md:p-7 hover:border-[var(--c-accent)] transition-all duration-300 hover:-translate-y-0.5 flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h3 className="font-display font-black text-xl md:text-2xl text-[var(--c-text)] group-hover:text-[var(--c-accent)] transition-colors leading-tight">
                      {p.title}
                    </h3>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <div className="flex items-center gap-1.5">
                        <StatusDot ok={p.statusOk} />
                        <span className={`font-mono text-[9px] tracking-widest uppercase ${p.statusOk ? "text-emerald-500" : "text-amber-500"}`}>{p.status}</span>
                      </div>
                      <span className="font-mono text-[9px] text-[var(--c-faint)] tracking-wider">{p.year}</span>
                    </div>
                  </div>
                  <p className="font-display italic text-sm text-[var(--c-accent)] mb-4">{p.tagline}</p>
                  <p className="font-sans text-sm text-[var(--c-muted)] leading-relaxed mb-3 flex-1">{p.description}</p>
                  <p className="font-mono text-[11px] text-[var(--c-faint)] leading-relaxed mb-5 pl-3 border-l-2 border-[var(--c-border)] italic">
                    {p.challenge}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map(t => <Chip key={t}>{t}</Chip>)}
                  </div>
                  {p.href !== "#" && (
                    <a href={p.href} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase text-[var(--c-accent)] hover:underline">
                      Voir le projet ↗
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ────────────────────────────────────────────────────── */}
      <section id="education" className="py-24 md:py-32 px-6 border-t border-[var(--c-border)]">
        <div className="max-w-6xl mx-auto">
          <Reveal><Eyebrow>04 · Formation</Eyebrow></Reveal>

          <div className="mt-12 space-y-0">
            {EDUCATION.map((e, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className={`group grid grid-cols-1 md:grid-cols-[160px_1fr] gap-0 md:gap-8 py-8 ${i < EDUCATION.length - 1 ? "border-b border-[var(--c-border)]" : ""}`}>
                  <div className="mb-3 md:mb-0 md:pt-1">
                    <p className="font-mono text-[10px] text-[var(--c-faint)] tracking-wider mb-2">{e.period}</p>
                    <p className="font-mono text-[9px] text-[var(--c-faint)] tracking-wider">{e.location}</p>
                  </div>
                  <div>
                    <h3 className="font-display font-black text-xl md:text-2xl text-[var(--c-text)] mb-1 leading-tight">
                      {e.degree}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="font-sans text-sm font-600 text-[var(--c-accent)]">{e.school}</span>
                      <span className="font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 border border-[var(--c-border)] text-[var(--c-faint)] rounded">{e.level}</span>
                    </div>
                    {e.note && <p className="font-sans text-sm text-[var(--c-muted)]">{e.note}</p>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 md:py-32 px-6 border-t border-[var(--c-border)] bg-[var(--c-surface)]">
        <div className="max-w-6xl mx-auto">
          <Reveal><Eyebrow>05 · Contact</Eyebrow></Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {/* Left */}
            <Reveal delay={80}>
              <h2 className="font-display font-black text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] tracking-[-0.02em] text-[var(--c-text)] mb-6">
                Travaillons
                <br />
                <span className="italic text-[var(--c-accent)]">ensemble.</span>
              </h2>
              <p className="font-sans text-sm text-[var(--c-muted)] leading-relaxed mb-8 max-w-xs">
                Disponible pour des missions freelance, des opportunités CDI,
                ou une discussion autour d&apos;un projet IA.
              </p>
              <div className="space-y-2.5">
                {[
                  { label: "mathchambaud@icloud.com", href: "mailto:mathchambaud@icloud.com" },
                  { label: "07 62 07 92 98",          href: "tel:+33762079298" },
                  { label: "LinkedIn",                 href: "https://linkedin.com" },
                  { label: "GitHub",                   href: "https://github.com" },
                ].map(({ label, href }) => (
                  <a key={label} href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2.5 group font-mono text-xs text-[var(--c-muted)] hover:text-[var(--c-accent)] transition-colors">
                    <span className="w-3 h-px bg-[var(--c-accent)] group-hover:w-5 transition-all duration-200" />
                    {label}
                  </a>
                ))}
              </div>
            </Reveal>

            {/* Right — form */}
            <Reveal delay={160}>
              {formState === "sent" ? (
                <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                  <span className="font-display font-black text-7xl text-[var(--c-accent)] italic">✓</span>
                  <h3 className="font-display font-black text-2xl text-[var(--c-text)]">Message envoyé !</h3>
                  <p className="font-mono text-xs text-[var(--c-muted)]">Réponse dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { k: "name",    label: "Nom",    type: "text",  ph: "Votre nom" },
                    { k: "email",   label: "Email",  type: "email", ph: "votre@email.com" },
                  ].map(({ k, label, type, ph }) => (
                    <label key={k} className="block">
                      <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--c-faint)] block mb-1.5">{label}</span>
                      <input type={type} required value={form[k as keyof typeof form]}
                        onChange={e => setForm(f => ({ ...f, [k]: e.target.value }))}
                        placeholder={ph}
                        className="w-full bg-[var(--c-bg)] border border-[var(--c-border)] rounded px-3.5 py-2.5 font-mono text-sm text-[var(--c-text)] placeholder-[var(--c-faint)] focus:outline-none focus:border-[var(--c-accent)] transition-colors" />
                    </label>
                  ))}
                  <label className="block">
                    <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--c-faint)] block mb-1.5">Message</span>
                    <textarea required rows={5} value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Votre message..."
                      className="w-full bg-[var(--c-bg)] border border-[var(--c-border)] rounded px-3.5 py-2.5 font-mono text-sm text-[var(--c-text)] placeholder-[var(--c-faint)] focus:outline-none focus:border-[var(--c-accent)] transition-colors resize-none" />
                  </label>
                  <button type="submit" disabled={formState === "sending"}
                    className="w-full py-3 bg-[var(--c-accent)] text-white font-sans text-xs font-700 uppercase tracking-widest rounded hover:opacity-90 disabled:opacity-50 transition-opacity">
                    {formState === "sending" ? "Envoi…" : "Envoyer →"}
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="border-t border-[var(--c-border)] py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="font-mono text-[10px] tracking-widest text-[var(--c-faint)] uppercase">
            © 2025 Mathieu Chambaud
          </span>
          <span className="font-mono text-[10px] tracking-widest text-[var(--c-faint)] uppercase">
            AI Engineer · Bordeaux, France
          </span>
        </div>
      </footer>
    </div>
  );
}
