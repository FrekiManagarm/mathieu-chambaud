import type { Metadata } from "next";
import { Fraunces, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mathieu Chambaud — AI Engineer | Lead Developer",
  description:
    "AI Engineer & Lead Developer basé à Bordeaux. Spécialisé en agents IA, automatisation métier et développement full-stack (Next.js, React Native, Flutter, Python). 5 ans d'expérience.",
  keywords: [
    "AI Engineer", "Lead Developer", "TypeScript", "Next.js",
    "React Native", "Flutter", "Mastra AI", "agents IA", "Bordeaux",
  ],
  openGraph: {
    title: "Mathieu Chambaud — AI Engineer | Lead Developer",
    description: "AI Engineer & Lead Developer spécialisé en agents IA. Bordeaux, France.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${syne.variable} ${jetbrains.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
