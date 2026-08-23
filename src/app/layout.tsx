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
  telephone: "+33650030776",
  image: "https://www.nicolasclaverol.com/og-image.jpg",
  description:
    "Création de sites web pour artisans et indépendants à Montpellier. Sites vitrines, e-commerce et assistant automatique IA.",
  founder: {
    "@type": "Person",
    name: "Nicolas Claverol",
    jobTitle: "Développeur web freelance",
  },
  employee: {
    "@type": "Person",
    name: "Nicolas Claverol",
    jobTitle: "Développeur web freelance",
  },
  knowsAbout: [
    "Création de site internet",
    "Site vitrine",
    "Site e-commerce",
    "Référencement SEO local",
    "Assistant IA pour site web",
    "Refonte de site internet",
    "Next.js",
    "React",
  ],
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Montpellier",
    postalCode: "34000",
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
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Création de site vitrine",
        url: "https://www.nicolasclaverol.com/services/creation-site-vitrine-montpellier",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Site Pro avec gestion autonome",
        url: "https://www.nicolasclaverol.com/services/site-gestion-autonome-montpellier",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Site Pro avec assistant IA",
        url: "https://www.nicolasclaverol.com/services/assistant-ia-site-internet-montpellier",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Assistant IA sur site existant",
        url: "https://www.nicolasclaverol.com/services/assistant-ia-site-existant-montpellier",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Création de site e-commerce",
        url: "https://www.nicolasclaverol.com/services/creation-site-ecommerce-montpellier",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Refonte de site internet",
        url: "https://www.nicolasclaverol.com/services/refonte-site-internet-montpellier",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Nicolas Claverol — Développeur web freelance Montpellier",
  description,
  alternates: {
    canonical: "https://www.nicolasclaverol.com",
  },
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
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
