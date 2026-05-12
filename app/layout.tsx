import type { Metadata } from "next";
import { Dancing_Script, DM_Sans, Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dancing = Dancing_Script({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
});

const siteUrl = new URL("https://deliscorner.com");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Deli's Corner — Café & sandwicherie à Montpellier",
    template: "%s | Deli's Corner",
  },
  description:
    "Deli's Corner : coffee shop et sandwicherie au centre de Montpellier (rue Saint-Paul, près de la rue des Teissiers). Cafés de spécialité, matcha, chai, lattes, sandwichs, salades, formules déjeuner. Commande en ligne sur deliscorner.com ou sur place.",
  keywords: [
    "Deli's Corner",
    "café Montpellier",
    "coffee shop Montpellier",
    "sandwicherie Montpellier",
    "déjeuner Montpellier centre",
    "rue Saint-Paul Montpellier",
    "rue des Teissiers",
    "café spécialité",
    "matcha latte Montpellier",
    "commande en ligne sandwich",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Deli's Corner",
    title: "Deli's Corner — Café & sandwicherie à Montpellier",
    description:
      "Cafés de spécialité, sandwichs et salades — 8 rue Saint-Paul, Montpellier. Commande sur deliscorner.com.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deli's Corner — Café & sandwicherie à Montpellier",
    description:
      "Coffee shop au cœur de Montpellier : boissons gourmandes, sandwichs, salades — 8 rue Saint-Paul.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${oswald.variable} ${dmSans.variable} ${dancing.variable}`}>
      <body className="font-[family-name:var(--font-dm-sans)] antialiased deli-paper">{children}</body>
    </html>
  );
}
