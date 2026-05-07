import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Création site vitrine artisan Montpellier — à partir de 900 € | Nicolas Claverol',
  description:
    'Créateur de sites vitrines pour artisans à Montpellier. Design sur mesure, rapide, visible sur Google. Devis gratuit en 24h — à partir de 900 €.',
  alternates: {
    canonical: 'https://www.nicolasclaverol.com/services/creation-site-vitrine-montpellier',
  },
  openGraph: {
    title: 'Création site vitrine artisan Montpellier — Nicolas Claverol',
    description:
      'Créateur de sites vitrines pour artisans à Montpellier. Design sur mesure, rapide, visible sur Google. Devis gratuit en 24h — à partir de 900 €.',
    url: 'https://www.nicolasclaverol.com/services/creation-site-vitrine-montpellier',
    siteName: 'Nicolas Claverol',
    locale: 'fr_FR',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Création de site vitrine pour artisans',
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
    'Création de sites vitrines sur mesure pour artisans à Montpellier et dans l\'Hérault. Design, SEO, mobile-first. Formation incluse à la livraison.',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'EUR',
    price: '900',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      minPrice: '900',
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
    icon: '🎨',
    title: 'Design sur mesure',
    description: 'Maquette soumise et validée avant le développement — aucune surprise à la livraison.',
  },
  {
    icon: '📱',
    title: 'Mobile-first & rapide',
    description: 'Votre site s\'affiche parfaitement sur téléphone, tablette et ordinateur — et se charge en moins de 2 secondes pour ne pas faire fuir vos visiteurs.',
  },
  {
    icon: '🔍',
    title: 'Optimisé pour Google',
    description: 'Votre site est réglé pour apparaître sur Google quand un client cherche votre métier près de chez vous — dès la mise en ligne.',
  },
  {
    icon: '✉️',
    title: 'Formulaire de contact',
    description: 'Les demandes de vos visiteurs arrivent directement dans votre boîte mail, sans intermédiaire.',
  },
  {
    icon: '🚀',
    title: 'Livraison en 2–3 semaines',
    description: 'Planning clair dès le départ, jalons respectés, mise en ligne à la date convenue.',
  },
  {
    icon: '🎓',
    title: 'Formation incluse',
    description: '1h de prise en main à la livraison pour que vous maîtrisiez votre site dès le premier jour.',
  },
]

const faqs = [
  {
    q: 'Combien de temps pour créer mon site vitrine ?',
    a: 'Entre 2 et 3 semaines en moyenne à partir de la validation de la maquette. Le délai dépend surtout de la vitesse à laquelle vous me fournissez vos textes et photos.',
  },
  {
    q: 'Est-ce que je pourrai modifier mon site moi-même ?',
    a: 'Oui, si vous optez pour l\'offre "Site Pro + Gestion autonome" (à partir de 1 200 €). Vous accédez à une interface simple pour modifier textes, photos et menus sans toucher au code.',
  },
  {
    q: 'Vous intervenez où autour de Montpellier ?',
    a: 'Je travaille principalement avec des artisans de Montpellier et du bassin de l\'Hérault — Béziers, Sète, Lunel, Mauguio, Castelnau-le-Lez, Palavas. Je peux aussi intervenir à distance partout en France.',
  },
]

export default function CreationSiteVitrineArtisanMontpellier() {
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
              Création de site vitrine pour artisans à Montpellier
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mb-12 max-w-xl text-base leading-relaxed text-[#8892B0]">
              Vous exercez dans le bâtiment, l&apos;artisanat ou les services ? Un site vitrine professionnel
              vous apporte de nouveaux clients — sans publicité payante. Design soigné, visible sur Google,
              livré en 2 à 3 semaines.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:contact@nicolasclaverol.com"
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
                Tout ce dont vous avez besoin pour démarrer, sans surprise ni option cachée.
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
                Pour quel artisan ?
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mb-6 max-w-2xl text-base leading-relaxed text-[#8892B0]">
                Je crée des sites vitrines pour tous les corps de métier : <strong className="text-[#CCD6F6]">plombier,
                électricien, menuisier, peintre, maçon, carreleur, couvreur, chauffagiste</strong>, mais aussi
                coiffeur, esthéticienne, photographe, naturopathe et tout indépendant qui veut être trouvé
                sur Google par ses futurs clients.
              </p>
              <p className="max-w-2xl text-base leading-relaxed text-[#8892B0]">
                J&apos;interviens sur <strong className="text-[#CCD6F6]">Montpellier et ses alentours</strong> — Castelnau-le-Lez,
                Jacou, Saint-Gély-du-Fesc, Saint-Clément-de-Rivière, Saint-Jean-de-Védas, Lattes, Mauguio,
                Palavas-les-Flots — et à distance partout en France.
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
                Un devis personnalisé vous est envoyé sous 24h, sans engagement.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="relative rounded border-2 border-[#64FFDA] bg-[#0D2137] p-8 sm:p-10">
                <span className="absolute -top-3 left-6 rounded-full bg-[#64FFDA] px-3 py-0.5 font-mono text-xs font-semibold text-[#0A192F]">
                  Site vitrine Essentiel
                </span>
                <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
                  <div className="flex-1">
                    <p className="mb-1 font-mono text-4xl font-semibold text-[#64FFDA]">
                      À partir de 900 €
                    </p>
                    <p className="mb-6 text-sm text-[#8892B0]">
                      Paiement en 3 fois : 30 % à la commande, 40 % à mi-projet, 30 % à la livraison.
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Site une page ou multi-pages selon vos besoins',
                        'Hébergement et nom de domaine conseillés',
                        'Devis détaillé avec périmètre précis',
                        'Option gestion autonome disponible (+300 €)',
                        'Option assistant IA disponible (+400 €)',
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
                      href="mailto:contact@nicolasclaverol.com"
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
                href="mailto:contact@nicolasclaverol.com"
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
