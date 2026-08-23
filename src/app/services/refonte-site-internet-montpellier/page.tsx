import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Refonte de site internet à Montpellier | Nicolas Claverol',
  description:
    'Votre site est vieux, lent ou introuvable sur Google ? Je le modernise : design actuel, rapide, optimisé SEO. Refonte et maintenance à Montpellier. Devis en 24h.',
  alternates: {
    canonical: 'https://www.nicolasclaverol.com/services/refonte-site-internet-montpellier',
  },
  openGraph: {
    title: 'Refonte de site internet à Montpellier — Nicolas Claverol',
    description:
      'Votre site est vieux, lent ou introuvable sur Google ? Je le modernise : design actuel, rapide, optimisé SEO. Refonte et maintenance à Montpellier. Devis en 24h.',
    url: 'https://www.nicolasclaverol.com/services/refonte-site-internet-montpellier',
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
  name: 'Refonte de site internet',
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
    'Refonte de site internet à Montpellier : design modernisé, chargement rapide, optimisé pour Google. Refonte partielle ou complète selon vos besoins. Devis sur mesure.',
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
    icon: '✨',
    title: 'Design modernisé',
    description: "Un look actuel, à la hauteur de votre activité aujourd'hui.",
  },
  {
    icon: '⚡',
    title: 'Site plus rapide',
    description: 'Un chargement optimisé, mieux vu par Google et vos visiteurs.',
  },
  {
    icon: '📱',
    title: 'Mobile-first',
    description: "Un affichage parfait sur téléphone, où sont la plupart de vos visiteurs.",
  },
  {
    icon: '🔍',
    title: 'Optimisé pour Google',
    description: 'Structure et référencement revus pour remonter dans les résultats.',
  },
  {
    icon: '📂',
    title: 'Contenu repris',
    description: "Vos textes et photos réintégrés proprement, rien n'est perdu.",
  },
  {
    icon: '🔧',
    title: 'Maintenance en option',
    description: 'Mises à jour, corrections et support technique si vous le souhaitez.',
  },
]

const faqs = [
  {
    q: 'Faut-il tout refaire, ou peut-on garder une partie ?',
    a: "Ça dépend de l'état de votre site. Parfois une refonte partielle suffit, parfois mieux vaut repartir sur des bases saines. On évalue ensemble avant de décider.",
  },
  {
    q: 'Vais-je perdre mon référencement Google actuel ?',
    a: "Non. Je mets en place les redirections nécessaires pour conserver le positionnement que vous avez déjà acquis, et j'en profite pour l'améliorer.",
  },
  {
    q: 'Combien coûte une refonte ?',
    a: "C'est sur devis, car le prix dépend de l'ampleur du travail. Après avoir regardé votre site actuel, je vous envoie un devis clair et détaillé.",
  },
  {
    q: 'Proposez-vous un suivi après la refonte ?',
    a: "Oui, en option : mises à jour, petites corrections et support technique, selon vos besoins. On en discute au moment du devis.",
  },
]

export default function RefonteSiteInternetMontpellier() {
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
              Refonte de site internet à Montpellier
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mb-12 max-w-xl text-base leading-relaxed text-[#8892B0]">
              Votre site actuel est daté, lent, mal affiché sur téléphone ou introuvable sur Google ?
              Je le remets à neuf : un design moderne qui inspire confiance, un chargement rapide,
              et une structure pensée pour être trouvée par vos clients. Vous gardez votre contenu,
              vous gagnez en crédibilité.
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
                Tout ce qu&apos;il faut pour redonner vie à votre site sans repartir de zéro.
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

        {/* ── Pour qui ── */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <p className="mb-2 font-mono text-sm text-[#64FFDA]">02.</p>
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[#CCD6F6]">
                Pour qui ?
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-2xl text-base leading-relaxed text-[#8892B0]">
                Pour vous si votre site a{' '}
                <strong className="text-[#CCD6F6]">plusieurs années</strong>, s&apos;affiche mal sur
                mobile, met trop de temps à charger, ou n&apos;apparaît pas sur Google. Aussi pour
                ceux qui ont un site correct mais veulent{' '}
                <strong className="text-[#CCD6F6]">quelqu&apos;un de fiable pour l&apos;entretenir</strong>{' '}
                dans la durée.
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
                Chaque site est différent : le devis dépend de l&apos;état de l&apos;existant et de
                l&apos;ampleur des changements. Devis personnalisé sous 24h, sans engagement.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="relative rounded border-2 border-[#64FFDA] bg-[#0D2137] p-8 sm:p-10">
                <span className="absolute -top-3 left-6 rounded-full bg-[#64FFDA] px-3 py-0.5 font-mono text-xs font-semibold text-[#0A192F]">
                  Refonte & maintenance
                </span>
                <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
                  <div className="flex-1">
                    <p className="mb-1 font-mono text-4xl font-semibold text-[#64FFDA]">
                      Sur devis
                    </p>
                    <p className="mb-6 text-sm text-[#8892B0]">
                      Devis établi après examen de votre site actuel.
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Devis établi après examen de votre site actuel',
                        'Refonte partielle ou complète selon vos besoins',
                        'Redirections mises en place pour préserver votre référencement',
                        'Contenu existant réintégré',
                        'Maintenance proposée en option',
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
