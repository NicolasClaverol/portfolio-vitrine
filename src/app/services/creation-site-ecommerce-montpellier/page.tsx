import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Création site e-commerce à Montpellier | Nicolas Claverol',
  description:
    'Création de boutique en ligne pour commerçants et artisans à Montpellier : paiement sécurisé, gestion des stocks, design sur mesure. À partir de 1 800 €. Devis en 24h.',
  alternates: {
    canonical: 'https://www.nicolasclaverol.com/services/creation-site-ecommerce-montpellier',
  },
  openGraph: {
    title: 'Création site e-commerce à Montpellier — Nicolas Claverol',
    description:
      'Création de boutique en ligne pour commerçants et artisans à Montpellier : paiement sécurisé, gestion des stocks, design sur mesure. À partir de 1 800 €. Devis en 24h.',
    url: 'https://www.nicolasclaverol.com/services/creation-site-ecommerce-montpellier',
    siteName: 'Nicolas Claverol',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Création de site e-commerce',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Nicolas Claverol Développeur Web Freelance',
    url: 'https://www.nicolasclaverol.com',
    email: 'contact@nicolasclaverol.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Montpellier',
      addressRegion: 'Hérault',
      addressCountry: 'FR',
    },
  },
  description:
    'Création de boutique en ligne pour commerçants et artisans à Montpellier : paiement sécurisé, gestion des stocks, design sur mesure. À partir de 1 800 €.',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'EUR',
    price: '1800',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      minPrice: '1800',
      priceCurrency: 'EUR',
    },
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 43.6119,
      longitude: 3.8772,
    },
    geoRadius: '30000',
  },
}

const includes = [
  {
    icon: '💳',
    title: 'Paiement sécurisé',
    description: 'Encaissement par carte via Stripe, sans commission cachée.',
  },
  {
    icon: '📦',
    title: 'Gestion des stocks',
    description: 'Ajoutez vos produits, suivez vos quantités en quelques clics.',
  },
  {
    icon: '🖼️',
    title: 'Fiches produits soignées',
    description: 'Photos, descriptions, variantes (taille, couleur…).',
  },
  {
    icon: '📱',
    title: 'Mobile-first & rapide',
    description: 'Votre boutique s\'affiche parfaitement sur téléphone.',
  },
  {
    icon: '🔍',
    title: 'Optimisé pour Google',
    description: 'Vos produits sont pensés pour être trouvés en ligne.',
  },
  {
    icon: '🛠️',
    title: 'Autonome au quotidien',
    description: 'Interface simple pour gérer commandes et catalogue vous-même.',
  },
]

const faqs = [
  {
    q: 'Combien de produits puis-je vendre ?',
    a: "Autant que vous voulez. Sous 20 produits simples, une solution légère suffit ; au-delà, avec beaucoup de variantes et de stock, on part sur un outil plus complet. On en parle selon votre catalogue.",
  },
  {
    q: 'Est-ce que je pourrai ajouter des produits moi-même ?',
    a: "Oui. Vous gérez votre catalogue, vos prix et vos stocks depuis une interface simple, sans toucher au code.",
  },
  {
    q: "Comment je reçois l'argent des ventes ?",
    a: "Les paiements arrivent directement sur votre compte via Stripe, votre solution de paiement. Vous gardez la main sur vos encaissements.",
  },
  {
    q: 'En combien de temps ma boutique est-elle en ligne ?',
    a: "Comptez quelques semaines selon la taille du catalogue et le temps de préparation de vos fiches produits et photos.",
  },
]

export default function CreationSiteEcommerceMontpellier() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main className="bg-[#0A192F]">

        {/* ── Hero ── */}
        <section className="mx-auto flex min-h-[80vh] max-w-5xl flex-col items-start justify-center px-6 py-24">
          <Reveal>
            <p className="mb-5 font-mono text-sm text-[#64FFDA]">
              Développeur web freelance · Montpellier
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mb-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[#CCD6F6] sm:text-5xl lg:text-6xl">
              Création de site e-commerce à Montpellier
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mb-12 max-w-xl text-base leading-relaxed text-[#8892B0]">
              Vendez vos produits en ligne avec une boutique claire, rapide et sécurisée. Paiement
              en ligne, gestion de vos stocks, fiches produits soignées : je vous livre un site prêt
              à encaisser, que vous pouvez gérer vous-même au quotidien. Pensé pour les commerçants,
              artisans et créateurs de Montpellier et de l&apos;Hérault.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/#contact"
                className="rounded border border-[#64FFDA] px-7 py-3.5 text-sm font-medium text-[#64FFDA] transition-all duration-150 hover:bg-[#64FFDA]/10"
              >
                Demander un devis gratuit
              </a>
              <a
                href="/#portfolio"
                className="rounded border border-[#CCD6F6]/20 px-7 py-3.5 text-sm font-medium text-[#CCD6F6] transition-all duration-150 hover:border-[#CCD6F6]/40 hover:bg-[#CCD6F6]/5"
              >
                Voir mes réalisations
              </a>
            </div>
          </Reveal>
        </section>

        {/* ── Ce qui est inclus ── */}
        <section className="bg-[#112240] py-24">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <p className="mb-2 font-mono text-sm text-[#64FFDA]">01.</p>
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[#CCD6F6]">
                Ce qui est inclus
              </h2>
              <p className="mb-12 max-w-lg text-[#8892B0]">
                Tout ce dont vous avez besoin pour vendre en ligne, sans surprise ni option cachée.
              </p>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {includes.map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
                  <div className="flex h-full flex-col rounded border border-[#233554] bg-[#0A192F] p-6 transition-all duration-200 hover:border-[#64FFDA]/40 hover:-translate-y-1">
                    <span className="mb-4 text-2xl">{item.icon}</span>
                    <h3 className="mb-2 text-base font-semibold text-[#CCD6F6]">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-[#8892B0]">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pour quel commerçant ── */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <p className="mb-2 font-mono text-sm text-[#64FFDA]">02.</p>
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[#CCD6F6]">
                Pour quel commerçant ?
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-2xl text-base leading-relaxed text-[#8892B0]">
                Idéal pour les{' '}
                <strong className="text-[#CCD6F6]">commerçants qui veulent vendre au-delà de leur boutique</strong>,
                les{' '}
                <strong className="text-[#CCD6F6]">artisans et créateurs</strong> (céramistes, bijoutiers,
                artistes…) qui écoulent leurs pièces, et les{' '}
                <strong className="text-[#CCD6F6]">producteurs locaux</strong> qui livrent en direct. Que vous
                ayez 10 produits ou 200, la solution s&apos;adapte à votre catalogue.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Tarif ── */}
        <section className="bg-[#112240] py-24">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <p className="mb-2 font-mono text-sm text-[#64FFDA]">03.</p>
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[#CCD6F6]">
                Tarif
              </h2>
              <p className="mb-12 max-w-lg text-[#8892B0]">
                Devis personnalisé sous 24h, sans engagement.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="relative rounded border-2 border-[#64FFDA] bg-[#0D2137] p-8 sm:p-10">
                <span className="absolute -top-3 left-6 rounded-full bg-[#64FFDA] px-3 py-0.5 font-mono text-xs font-semibold text-[#0A192F]">
                  Site e-commerce
                </span>
                <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
                  <div className="flex-1">
                    <p className="mb-1 font-mono text-4xl font-semibold text-[#64FFDA]">
                      À partir de 1 800 €
                    </p>
                    <p className="mb-6 text-sm text-[#8892B0]">
                      Paiement en 3 fois : 30 % à la commande, 40 % à mi-projet, 30 % à la livraison.
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Boutique complète prête à vendre',
                        'Paiement sécurisé configuré',
                        'Gestion autonome du catalogue',
                        'Formation à la prise en main incluse',
                        'Devis détaillé selon le nombre de produits',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-[#8892B0]">
                          <span className="mt-0.5 shrink-0 text-[#64FFDA]">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="shrink-0">
                    <a
                      href="/#contact"
                      className="inline-block rounded border border-[#64FFDA] px-7 py-3.5 text-sm font-medium text-[#64FFDA] transition-all duration-150 hover:bg-[#64FFDA]/10"
                    >
                      Obtenir mon devis gratuit
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <p className="mb-2 font-mono text-sm text-[#64FFDA]">04.</p>
              <h2 className="mb-12 text-3xl font-semibold tracking-tight text-[#CCD6F6]">
                Questions fréquentes
              </h2>
            </Reveal>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <Reveal key={faq.q} delay={i * 100}>
                  <div className="rounded border border-[#233554] bg-[#112240] p-6">
                    <h3 className="mb-3 text-base font-semibold text-[#CCD6F6]">{faq.q}</h3>
                    <p className="text-sm leading-relaxed text-[#8892B0]">{faq.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA final ── */}
        <section className="bg-[#112240] py-24">
          <Reveal>
            <div className="mx-auto max-w-5xl px-6 text-center">
              <p className="mb-3 font-mono text-sm text-[#64FFDA]">Prêt à démarrer ?</p>
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[#CCD6F6]">
                Parlons de votre projet
              </h2>
              <p className="mb-10 text-[#8892B0]">
                Décrivez-moi votre activité et vos besoins. Je vous réponds sous 24h avec un devis clair.
              </p>
              <a
                href="/#contact"
                className="inline-block rounded border border-[#64FFDA] px-8 py-4 text-sm font-medium text-[#64FFDA] transition-all duration-150 hover:bg-[#64FFDA]/10"
              >
                Envoyer un message
              </a>
            </div>
          </Reveal>
        </section>

      </main>
      <Footer />
    </>
  )
}
