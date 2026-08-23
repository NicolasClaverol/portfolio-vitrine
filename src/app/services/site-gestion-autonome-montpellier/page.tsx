import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Site internet à gérer soi-même à Montpellier | Nicolas Claverol',
  description:
    'Un site professionnel que vous modifiez vous-même : textes, photos, menus, sans technicien. Interface simple, à Montpellier. À partir de 1 200 €. Devis en 24h.',
  alternates: {
    canonical: 'https://www.nicolasclaverol.com/services/site-gestion-autonome-montpellier',
  },
  openGraph: {
    title: 'Site internet à gérer soi-même à Montpellier — Nicolas Claverol',
    description:
      'Un site professionnel que vous modifiez vous-même : textes, photos, menus, sans technicien. Interface simple, à Montpellier. À partir de 1 200 €. Devis en 24h.',
    url: 'https://www.nicolasclaverol.com/services/site-gestion-autonome-montpellier',
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
  name: 'Site internet à gestion autonome',
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
    'Un site professionnel que vous modifiez vous-même : textes, photos, menus, sans technicien. Interface simple, formation incluse. À partir de 1 200 €.',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'EUR',
    price: '1200',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      minPrice: '1200',
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
    icon: '🖱️',
    title: 'Interface simple',
    description: 'Une gestion pensée pour être prise en main sans compétence technique.',
  },
  {
    icon: '✏️',
    title: 'Vos textes et photos',
    description: 'Modifiez vos contenus vous-même, en quelques clics.',
  },
  {
    icon: '📋',
    title: 'Menus et tarifs à jour',
    description:
      'Idéal pour restaurants, artisans et commerçants qui changent souvent leurs offres.',
  },
  {
    icon: '🔒',
    title: 'Aucun code à toucher',
    description: 'Vous gérez le contenu, la technique reste de mon côté.',
  },
  {
    icon: '🎓',
    title: 'Formation incluse',
    description: '1h de prise en main à la livraison + un guide personnalisé.',
  },
  {
    icon: '🖥️',
    title: 'Site professionnel complet',
    description: 'Design sur mesure, rapide et visible sur Google.',
  },
]

const faqs = [
  {
    q: 'Faut-il des compétences techniques pour gérer mon site ?',
    a: "Non. L'interface est pensée pour être simple, et vous recevez une formation d'1h à la livraison plus un guide personnalisé. Si vous savez utiliser un traitement de texte, vous saurez gérer votre site.",
  },
  {
    q: 'Que puis-je modifier moi-même ?',
    a: 'Vos textes, vos photos, vos menus, vos tarifs, vos actualités. Tout ce qui change régulièrement est à votre main.',
  },
  {
    q: 'Et si je bloque sur quelque chose ?',
    a: "Vous n'êtes pas seul : je reste disponible pour vous dépanner, et le guide personnalisé couvre les manipulations courantes.",
  },
  {
    q: 'Quelle différence avec le site vitrine classique ?',
    a: 'Le site vitrine est parfait si votre contenu bouge peu. La gestion autonome ajoute une interface pour modifier vous-même votre site aussi souvent que vous voulez.',
  },
]

export default function SiteGestionAutonomeMontpellier() {
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
              Site internet à gérer <span className="whitespace-nowrap">vous-même</span> à Montpellier
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mb-12 max-w-xl text-base leading-relaxed text-[#8892B0]">
              Un site professionnel dont vous gardez les clés. Modifiez vos textes, changez vos
              photos, mettez à jour vos menus ou vos tarifs quand vous le voulez, sans dépendre
              d&apos;un technicien et sans toucher au code. Vous restez autonome au quotidien,
              je reste disponible si besoin.
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
                Tout ce dont vous avez besoin pour rester maître de votre site au quotidien.
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
                Parfait pour ceux qui mettent souvent leur site à jour —{' '}
                <strong className="text-[#CCD6F6]">restaurants qui changent de carte</strong>,{' '}
                <strong className="text-[#CCD6F6]">artisans qui ajoutent des réalisations</strong>,{' '}
                <strong className="text-[#CCD6F6]">commerçants qui font évoluer leurs offres</strong>.
                Si vous voulez rester maître de votre contenu sans rappeler un prestataire à chaque
                modification, c&apos;est cette formule.
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
                  Site Pro + Gestion autonome
                </span>
                <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
                  <div className="flex-1">
                    <p className="mb-1 font-mono text-4xl font-semibold text-[#64FFDA]">
                      À partir de 1 200 €
                    </p>
                    <p className="mb-6 text-sm text-[#8892B0]">
                      Paiement en 3 fois : 30 % à la commande, 40 % à mi-projet, 30 % à la livraison.
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Site professionnel multi-pages',
                        'Interface de gestion simple et intuitive',
                        'Formation à la prise en main incluse',
                        'Guide personnalisé fourni',
                        'Option assistant IA disponible',
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
