import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Assistant IA pour site internet à Montpellier | Nicolas Claverol',
  description:
    'Ajoutez un assistant IA à votre site : il répond à vos clients 24h/24, qualifie les demandes et vous envoie un récap par email. À partir de 800 €. Devis en 24h.',
  alternates: {
    canonical: 'https://www.nicolasclaverol.com/services/assistant-ia-site-internet-montpellier',
  },
  openGraph: {
    title: 'Assistant IA pour site internet à Montpellier — Nicolas Claverol',
    description:
      'Ajoutez un assistant IA à votre site : il répond à vos clients 24h/24, qualifie les demandes et vous envoie un récap par email. À partir de 800 €. Devis en 24h.',
    url: 'https://www.nicolasclaverol.com/services/assistant-ia-site-internet-montpellier',
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
  name: 'Assistant IA pour site internet',
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
    'Ajoutez un assistant IA à votre site : il répond à vos clients 24h/24, qualifie les demandes et vous envoie un récap par email. À partir de 800 €.',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'EUR',
    price: '800',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      minPrice: '800',
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
    icon: '🕐',
    title: 'Disponible 24h/24, 7j/7',
    description: 'Répond même quand vous ne pouvez pas décrocher.',
  },
  {
    icon: '📋',
    title: 'Qualifie chaque demande',
    description: 'Recueille le nom, le téléphone et le besoin du visiteur.',
  },
  {
    icon: '📩',
    title: 'Récap par email',
    description: 'Vous recevez le résumé de chaque conversation, prêt à rappeler.',
  },
  {
    icon: '🔧',
    title: 'Adapté à votre métier',
    description: 'Configuré avec votre ton et vos informations.',
  },
  {
    icon: '⚡',
    title: 'Installation simple',
    description: 'Intégré à votre site, rien à gérer de votre côté.',
  },
  {
    icon: '🎁',
    title: '1re année incluse',
    description: 'La première année d\'assistant est offerte.',
  },
]

const faqs = [
  {
    q: "L'assistant remplace-t-il un secrétariat ?",
    a: "Non. Il capte les demandes quand vous n'êtes pas disponible et vous les transmet, pour que vous rappeliez au bon moment.",
  },
  {
    q: "Le visiteur sait-il qu'il parle à un assistant automatique ?",
    a: "Oui, c'est transparent, et il reste chaleureux et professionnel.",
  },
  {
    q: 'Faut-il refaire mon site ?',
    a: "Non pour l'option \"site existant\" : l'assistant s'ajoute à votre site actuel sans refonte.",
  },
  {
    q: 'En combien de temps est-il installé ?',
    a: "Quelques jours, une fois les informations de votre métier calées ensemble.",
  },
]

export default function AssistantIASiteInternetMontpellier() {
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
              Assistant IA pour votre site internet à Montpellier
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mb-12 max-w-xl text-base leading-relaxed text-[#8892B0]">
              Un assistant automatique qui accueille et qualifie vos visiteurs 24h/24, même la nuit
              et le week-end. Quand vous êtes sur un chantier ou en rendez-vous, il répond à votre
              place, note les coordonnées et le besoin de chaque client, et vous envoie un
              récapitulatif par email. Vous ne laissez plus filer une demande.
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
                Tout ce dont vous avez besoin pour ne plus rater une demande, sans rien à gérer.
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

        {/* ── Pour quel professionnel ── */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <p className="mb-2 font-mono text-sm text-[#64FFDA]">02.</p>
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[#CCD6F6]">
                Pour quel professionnel ?
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-2xl text-base leading-relaxed text-[#8892B0]">
                Pensé pour les{' '}
                <strong className="text-[#CCD6F6]">artisans du bâtiment</strong> souvent sur chantier,
                les <strong className="text-[#CCD6F6]">professions libérales</strong> qui croulent sous
                les appels, les <strong className="text-[#CCD6F6]">restaurants et les commerçants</strong>{' '}
                — tous ceux qui ratent des demandes faute de temps pour répondre sur le moment.
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
            <div className="grid gap-6 sm:grid-cols-2">
              <Reveal delay={100}>
                <div className="relative flex h-full flex-col rounded border-2 border-[#64FFDA] bg-[#0D2137] p-8">
                  <span className="absolute -top-3 left-6 rounded-full bg-[#64FFDA] px-3 py-0.5 font-mono text-xs font-semibold text-[#0A192F]">
                    Site Pro neuf
                  </span>
                  <p className="mb-1 font-mono text-3xl font-semibold text-[#64FFDA]">
                    À partir de 1 300 €
                  </p>
                  <p className="mb-6 text-sm text-[#8892B0]">
                    Site multi-pages + assistant IA, 1re année incluse.
                  </p>
                  <ul className="mb-8 flex-1 space-y-2">
                    {[
                      'Site multi-pages professionnel sur mesure',
                      'Assistant IA configuré pour votre métier',
                      '1re année d\'assistant offerte',
                      'Formation incluse à la livraison',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#8892B0]">
                        <span className="mt-0.5 shrink-0 text-[#64FFDA]">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/#contact"
                    className="inline-block rounded border border-[#64FFDA] px-6 py-3 text-center text-sm font-medium text-[#64FFDA] transition-all duration-150 hover:bg-[#64FFDA]/10"
                  >
                    Obtenir mon devis gratuit
                  </a>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="relative flex h-full flex-col rounded border border-[#233554] bg-[#0A192F] p-8">
                  <span className="absolute -top-3 left-6 rounded-full bg-[#233554] px-3 py-0.5 font-mono text-xs font-semibold text-[#CCD6F6]">
                    Site existant
                  </span>
                  <p className="mb-1 font-mono text-3xl font-semibold text-[#64FFDA]">
                    À partir de 800 €
                  </p>
                  <p className="mb-6 text-sm text-[#8892B0]">
                    Installation sur votre site actuel, sans refonte, 1re année sans abonnement.
                  </p>
                  <ul className="mb-8 flex-1 space-y-2">
                    {[
                      'Aucune refonte de votre site nécessaire',
                      'Assistant configuré pour votre métier',
                      '1re année sans abonnement',
                      'Installation en quelques jours',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#8892B0]">
                        <span className="mt-0.5 shrink-0 text-[#64FFDA]">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/#contact"
                    className="inline-block rounded border border-[#CCD6F6]/20 px-6 py-3 text-center text-sm font-medium text-[#CCD6F6] transition-all duration-150 hover:border-[#CCD6F6]/40 hover:bg-[#CCD6F6]/5"
                  >
                    Obtenir mon devis gratuit
                  </a>
                </div>
              </Reveal>
            </div>
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
