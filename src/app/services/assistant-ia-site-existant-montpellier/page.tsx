import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Ajouter un assistant IA à un site existant à Montpellier | Nicolas Claverol',
  description:
    'Ajoutez un assistant IA à votre site actuel, sans refonte : il répond à vos clients 24h/24 et vous transmet chaque demande par email. À partir de 800 €. Première année sans abonnement.',
  alternates: {
    canonical: 'https://www.nicolasclaverol.com/services/assistant-ia-site-existant-montpellier',
  },
  openGraph: {
    title: 'Ajouter un assistant IA à un site existant à Montpellier — Nicolas Claverol',
    description:
      'Ajoutez un assistant IA à votre site actuel, sans refonte : il répond à vos clients 24h/24 et vous transmet chaque demande par email. À partir de 800 €. Première année sans abonnement.',
    url: 'https://www.nicolasclaverol.com/services/assistant-ia-site-existant-montpellier',
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
  name: 'Assistant IA sur site existant',
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
    'Ajoutez un assistant IA à votre site actuel, sans refonte : il répond à vos clients 24h/24 et vous transmet chaque demande par email. À partir de 800 €. Première année sans abonnement.',
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
    icon: '🔌',
    title: 'Sur votre site actuel',
    description: "S'ajoute à votre site existant, quel qu'il soit, sans le refaire.",
  },
  {
    icon: '⚡',
    title: 'Installation rapide',
    description: 'Mise en place en quelques jours, sans travaux sur votre site.',
  },
  {
    icon: '🕐',
    title: 'Disponible 24h/24',
    description: 'Répond à vos visiteurs même la nuit et le week-end.',
  },
  {
    icon: '📧',
    title: 'Demandes par email',
    description: 'Vous recevez le nom, le téléphone et le besoin de chaque visiteur.',
  },
  {
    icon: '🎯',
    title: 'Configuré pour votre métier',
    description: 'Adapté à votre activité, votre ton et vos informations.',
  },
  {
    icon: '🎁',
    title: '1re année sans abonnement',
    description: 'La première année est incluse, sans frais mensuels.',
  },
]

const faqs = [
  {
    q: 'Faut-il refaire mon site ?',
    a: "Non. C'est justement l'intérêt de cette offre : l'assistant s'ajoute à votre site existant sans aucune refonte.",
  },
  {
    q: "Ça marche avec n'importe quel site ?",
    a: "Dans la grande majorité des cas, oui. On vérifie ensemble la compatibilité avec votre site actuel avant de démarrer, sans engagement.",
  },
  {
    q: "Que se passe-t-il après la première année ?",
    a: "La première année est incluse. Ensuite, le maintien de l'assistant fait l'objet d'un abonnement.",
  },
]

export default function AssistantIaSiteExistantMontpellier() {
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
              Ajouter un assistant IA à votre site <span className="whitespace-nowrap">existant</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mb-12 max-w-xl text-base leading-relaxed text-[#8892B0]">
              Vous avez déjà un site ? Ajoutez-y un assistant automatique sans rien refaire. Il
              s&apos;installe sur votre site actuel, accueille vos visiteurs 24h/24, recueille leurs
              coordonnées et leur besoin, et vous envoie chaque demande par email. Une installation
              rapide, aucune refonte, et la première année sans abonnement.
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
                Tout ce dont vous avez besoin pour ne plus rater une demande client.
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
                Idéal si vous avez déjà un site qui vous convient mais que vous ratez des demandes
                faute de temps pour répondre.{' '}
                <strong className="text-[#CCD6F6]">Artisans souvent sur chantier</strong>,{' '}
                <strong className="text-[#CCD6F6]">professions libérales débordées</strong>,{' '}
                <strong className="text-[#CCD6F6]">commerçants et restaurateurs</strong> : l&apos;assistant
                capte les contacts que vous laisseriez filer, sans toucher à votre site actuel.
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
                  Assistant sur site existant
                </span>
                <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
                  <div className="flex-1">
                    <p className="mb-1 font-mono text-4xl font-semibold text-[#64FFDA]">
                      À partir de 800 €
                    </p>
                    <p className="mb-6 text-sm text-[#8892B0]">
                      Devis personnalisé selon votre site actuel.
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Installation sur votre site actuel',
                        'Aucune refonte nécessaire',
                        'Configuré pour votre métier',
                        'Récapitulatif des demandes par email',
                        'Première année sans abonnement',
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
