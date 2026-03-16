import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nico Dev — Développeur web freelance Montpellier",
  description:
    "Création de sites web sur mesure à Montpellier pour artisans, commerces et professions libérales.",
  openGraph: {
    title: "Nico Dev — Développeur web freelance Montpellier",
    description:
      "Création de sites web sur mesure à Montpellier pour artisans, commerces et professions libérales.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
