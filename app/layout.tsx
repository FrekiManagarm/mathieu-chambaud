import type { Metadata } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mathieu Chambaud - AI Engineer & Lead Developer",
  description:
    "Portfolio de Mathieu Chambaud, AI Engineer et Lead Developer a Bordeaux. Projets IA, SaaS, mobile terrain et automatisation metier.",
  keywords: [
    "AI Engineer",
    "Lead Developer",
    "TypeScript",
    "Next.js",
    "React Native",
    "Flutter",
    "Mastra AI",
    "agents IA",
    "Bordeaux",
  ],
  openGraph: {
    title: "Mathieu Chambaud - AI Engineer & Lead Developer",
    description: "Portfolio IA, SaaS et produits full-stack. Bordeaux, France.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${outfit.variable} ${jetbrains.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
