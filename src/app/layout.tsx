import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Développeur web freelance à Montpellier — sites vitrine, e-commerce et assistants IA pour artisans et indépendants. Devis gratuit en 24h.";

export const metadata: Metadata = {
  title: "Nicolas Claverol — Développeur web freelance Montpellier",
  description,
  openGraph: {
    title: "Nicolas Claverol — Développeur web freelance Montpellier",
    description,
    url: "https://www.nicolasclaverol.com",
    siteName: "Nicolas Claverol",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.className}>
      <body>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
