import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Développeur web freelance à Montpellier — sites vitrine, e-commerce et assistants IA pour artisans et indépendants. Devis gratuit en 24h.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nicolas Claverol Développeur Web Freelance",
  url: "https://www.nicolasclaverol.com",
  email: "contact@nicolasclaverol.com",
  description:
    "Création de sites web pour artisans et indépendants à Montpellier. Sites vitrines, e-commerce et assistant automatique IA.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Montpellier",
    addressRegion: "Hérault",
    addressCountry: "FR",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 43.6119,
      longitude: 3.8772,
    },
    geoRadius: "30000",
  },
};

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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <ChatWidget />
        <GoogleAnalytics gaId="G-4J71765SZW" />
      </body>
    </html>
  );
}
