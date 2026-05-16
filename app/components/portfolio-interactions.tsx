"use client";

import Image from "next/image";
import { FormEvent, ReactNode, useEffect, useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle,
  CircleNotch,
  Stack,
  WarningCircle,
} from "@phosphor-icons/react";

type Project = {
  name: string;
  role: string;
  year: string;
  href: string;
  logo: string | null;
  headline: string;
  summary: string;
  impact: string;
  stack: string[];
};

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 96, damping: 24, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MagneticLink({
  href,
  children,
  variant,
}: {
  href: string;
  children: ReactNode;
  variant: "primary" | "secondary";
}) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(useTransform(rawX, [-80, 80], [-7, 7]), {
    stiffness: 150,
    damping: 18,
  });
  const y = useSpring(useTransform(rawY, [-40, 40], [-5, 5]), {
    stiffness: 150,
    damping: 18,
  });

  return (
    <motion.a
      href={href}
      style={{ x, y }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        rawX.set(event.clientX - rect.left - rect.width / 2);
        rawY.set(event.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        rawX.set(0);
        rawY.set(0);
      }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-black transition-colors duration-200 ${
        variant === "primary"
          ? "bg-[var(--accent)] text-white shadow-[0_24px_60px_-36px_rgba(39,112,107,0.65)]"
          : "border border-[var(--line)] bg-[var(--surface)] text-[var(--foreground)]"
      }`}
    >
      {children}
    </motion.a>
  );
}

export function TypeCycle({ items }: { items: string[] }) {
  const [index, setIndex] = useState(0);
  const [letters, setLetters] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = items[index] ?? "";
    const timeout = window.setTimeout(
      () => {
        if (!deleting && letters < current.length) {
          setLetters((value) => value + 1);
          return;
        }

        if (!deleting && letters === current.length) {
          setDeleting(true);
          return;
        }

        if (deleting && letters > 0) {
          setLetters((value) => value - 1);
          return;
        }

        setDeleting(false);
        setIndex((value) => (value + 1) % items.length);
      },
      deleting ? 34 : letters === current.length ? 1100 : 58,
    );

    return () => window.clearTimeout(timeout);
  }, [deleting, index, items, letters]);

  return (
    <span>
      {items[index]?.slice(0, letters)}
      <span className="type-cursor">_</span>
    </span>
  );
}

export function ProjectSwitcher({ projects }: { projects: Project[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex] ?? projects[0];

  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-[0.62fr_1.38fr]">
      <div className="space-y-3">
        {projects.map((project, index) => (
          <motion.button
            layout
            key={project.name}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`group w-full rounded-lg border p-4 text-left transition-colors duration-200 active:translate-y-[1px] ${
              activeIndex === index
                ? "border-[var(--accent)] bg-[var(--surface)]"
                : "border-[var(--line)] bg-transparent hover:bg-[var(--surface)]"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-lg font-black">{project.name}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{project.role}</p>
              </div>
              <span className="font-mono text-xs text-[var(--muted)]">{project.year}</span>
            </div>
            {activeIndex === index && (
              <motion.div
                layoutId="project-active-line"
                className="mt-4 h-1 rounded-full bg-[var(--accent)]"
              />
            )}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.article
          key={active.name}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="min-h-[620px] rounded-lg border border-[var(--line)] bg-[var(--surface)] p-5 shadow-[0_28px_80px_-54px_rgba(18,28,27,0.45)] md:p-8"
        >
          <div className="grid h-full grid-rows-[auto_1fr_auto] gap-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="section-kicker">{active.role}</p>
                <h3 className="mt-4 max-w-[720px] text-3xl font-black leading-none md:text-5xl">
                  {active.headline}
                </h3>
              </div>
              <div className="grid size-16 shrink-0 place-items-center rounded-lg border border-[var(--line)] bg-[var(--background)]">
                {active.logo ? (
                  <Image src={active.logo} alt={`Logo ${active.name}`} width={42} height={42} className="size-11 object-contain" />
                ) : (
                  <Stack size={34} weight="duotone" className="text-[var(--accent)]" />
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.12fr_0.88fr]">
              <div className="rounded-lg border border-[var(--line)] bg-[var(--background)] p-5">
                <ProjectMockup name={active.name} />
              </div>
              <div className="flex flex-col justify-between gap-6">
                <div>
                  <p className="text-base leading-7 text-[var(--muted)]">{active.summary}</p>
                  <div className="mt-6 rounded-lg border border-[var(--line)] bg-[var(--background)] p-4">
                    <p className="font-mono text-xs text-[var(--accent)]">Impact</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{active.impact}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {active.stack.map((item) => (
                    <span key={item} className="rounded-lg border border-[var(--line)] px-3 py-1.5 font-mono text-xs text-[var(--muted)]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <a
              href={active.href}
              target={active.href.startsWith("http") ? "_blank" : undefined}
              rel={active.href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-[var(--foreground)] px-4 py-3 text-sm font-black text-[var(--background)] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-[1px]"
            >
              Ouvrir le contexte
              <ArrowUpRight size={17} weight="bold" />
            </a>
          </div>
        </motion.article>
      </AnimatePresence>
    </div>
  );
}

function ProjectMockup({ name }: { name: string }) {
  const rows = useMemo(() => {
    if (name === "Orylo") {
      return ["Risk score 72.4", "Velocity spike", "Card BIN matched", "Webhook blocked"];
    }
    if (name === "Biume") {
      return ["Note vocale recue", "Synthese clinique", "Rapport structure", "Facture prete"];
    }
    if (name === "FieldOps") {
      return ["Inspection N-184", "Pale gauche", "Offline queue 7", "Sync ready"];
    }
    return ["BDC extrait", "Controle TVA", "Validation humaine", "Facture envoyee"];
  }, [name]);

  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-lg bg-[var(--foreground)] p-4 text-[var(--background)]">
      <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_30%_10%,rgba(177,213,205,0.8),transparent_36%),linear-gradient(90deg,rgba(247,247,242,0.12)_1px,transparent_1px),linear-gradient(180deg,rgba(247,247,242,0.12)_1px,transparent_1px)] [background-size:auto,42px_42px,42px_42px]" />
      <div className="relative flex items-center justify-between border-b border-[rgba(247,247,242,0.14)] pb-3">
        <p className="font-mono text-xs opacity-70">{name.toLowerCase()}.system</p>
        <motion.span
          animate={{ opacity: [0.45, 1], scale: [1, 1.08] }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 2.6, type: "spring", stiffness: 100, damping: 20 }}
          className="size-2 rounded-full bg-[var(--accent-soft)]"
        />
      </div>
      <div className="relative mt-8 space-y-3">
        {rows.map((row, index) => (
          <motion.div
            key={row}
            layout
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 100, damping: 20 }}
            className="flex items-center justify-between rounded-lg border border-[rgba(247,247,242,0.12)] bg-[rgba(247,247,242,0.06)] px-3 py-3"
          >
            <span className="text-sm font-semibold">{row}</span>
            <span className="h-2 w-16 overflow-hidden rounded-full bg-[rgba(247,247,242,0.12)]">
              <motion.span
                className="block h-full rounded-full bg-[var(--accent-soft)]"
                initial={{ width: "18%" }}
                animate={{ width: ["18%", `${72 + index * 5}%`] }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 5 + index, type: "spring", stiffness: 100, damping: 20 }}
              />
            </span>
          </motion.div>
        ))}
      </div>
      <div className="relative mt-8 grid grid-cols-3 gap-2">
        {[41, 67, 84].map((value, index) => (
          <div key={value} className="rounded-lg border border-[rgba(247,247,242,0.12)] p-3">
            <p className="font-mono text-2xl font-black">{value}.{index + 2}</p>
            <p className="mt-1 text-xs opacity-60">signal</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContactPanel() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");

    if (!email.includes("@") || message.trim().length < 12) {
      setError("Ajoute un email valide et un message un peu plus precis.");
      setState("error");
      return;
    }

    setError("");
    setState("sending");
    window.setTimeout(() => setState("sent"), 850);
  }

  if (state === "sent") {
    return (
      <div className="grid min-h-[430px] place-items-center rounded-[1.25rem] border border-[var(--line)] bg-[var(--surface)] p-8 text-center">
        <div>
          <CheckCircle size={48} weight="duotone" className="mx-auto text-[var(--accent)]" />
          <h3 className="mt-5 text-3xl font-black">Signal recu.</h3>
          <p className="mt-3 max-w-[360px] text-sm leading-7 text-[var(--muted)]">
            Le formulaire est pret cote interface. Pour un envoi reel, branche un endpoint ou un service email.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[1.25rem] border border-[var(--line)] bg-[var(--surface)] p-5 md:p-8"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field name="name" label="Nom" placeholder="Ton nom" />
        <Field name="email" label="Email" placeholder="toi@domaine.fr" type="email" />
      </div>
      <div className="mt-4">
        <label className="block">
          <span className="block text-sm font-bold">Message</span>
          <span className="mt-1 block text-xs text-[var(--muted)]">
            Contexte, objectif, contrainte forte ou question ouverte.
          </span>
          <textarea
            name="message"
            rows={7}
            required
            placeholder="Je veux automatiser..."
            className="mt-2 w-full resize-none rounded-xl border border-[var(--line)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-colors duration-200 placeholder:text-[color-mix(in_srgb,var(--muted)_60%,transparent)] focus:border-[var(--accent)]"
          />
        </label>
      </div>

      {state === "error" && (
        <div className="mt-4 flex items-start gap-2 rounded-xl border border-[color-mix(in_srgb,var(--danger)_42%,var(--line))] bg-[color-mix(in_srgb,var(--danger)_8%,var(--surface))] p-3 text-sm text-[var(--danger)]">
          <WarningCircle size={18} weight="bold" className="mt-0.5 shrink-0" />
          <p>{error}</p>
        </div>
      )}

      {state === "sending" && (
        <div className="mt-4 space-y-2" aria-label="Envoi en cours">
          <div className="skeleton h-3 w-2/3 rounded-full" />
          <div className="skeleton h-3 w-1/2 rounded-full" />
        </div>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-[var(--background)] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {state === "sending" ? (
          <>
            <CircleNotch size={18} weight="bold" className="animate-spin" />
            Preparation
          </>
        ) : (
          <>
            Envoyer le brief
            <ArrowUpRight size={18} weight="bold" />
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-bold">{label}</span>
      <span className="mt-1 block text-xs text-[var(--muted)]">Champ requis.</span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-colors duration-200 placeholder:text-[color-mix(in_srgb,var(--muted)_60%,transparent)] focus:border-[var(--accent)]"
      />
    </label>
  );
}
