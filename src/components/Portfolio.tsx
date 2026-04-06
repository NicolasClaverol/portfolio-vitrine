import Image from 'next/image'
import Reveal from './Reveal'

type Project = {
  name: string
  type: string
  description: string
  screenshot: string
  alt: string
  url?: string
}

const projects: Project[] = [
  {
    name: "L'Échoppe du Peyrou",
    type: 'Restaurant / brasserie — Montpellier centre',
    description:
      'Site vitrine avec menu en ligne, galerie photos et formulaire de réservation.',
    screenshot: '/portfolio/echoppe.webp',
    alt: "Site vitrine restaurant L'Échoppe du Peyrou — Montpellier",
    url: 'https://echoppe-du-peyrou.vercel.app',
  },
  {
    name: 'Céramiques Madoré',
    type: 'Artisane céramiste — marché des Arceaux',
    description:
      'Portfolio visuel minimaliste avec boutique en ligne et gestion des commandes sur mesure.',
    screenshot: '/portfolio/ceramiques.webp',
    alt: 'Boutique en ligne céramiste artisanale — Montpellier',
    url: 'https://ceramiques-madore.vercel.app',
  },
  {
    name: 'Cabinet Kiné Antigone',
    type: 'Kinésithérapeute libéral — quartier Antigone',
    description:
      'Site professionnel avec prise de rendez-vous en ligne et présentation des spécialités.',
    screenshot: '/portfolio/kine.webp',
    alt: 'Site cabinet kinésithérapeute Antigone — Montpellier',
    url: 'https://cabinet-kine-antigone.vercel.app',
  },
  {
    name: 'Camille Orsini',
    type: 'Artiste peintre — Lyon',
    description:
      'Site galerie avec vente en ligne des œuvres et gestion autonome du contenu via CMS.',
    screenshot: '/portfolio/camille.webp',
    alt: 'Portfolio artiste peintre avec vente en ligne — Lyon',
    url: 'https://camille-orsini.vercel.app',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <Reveal>
          <p className="mb-2 font-mono text-sm text-[#64FFDA]">02.</p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[#CCD6F6]">
            Réalisations
          </h2>
          <p className="mb-12 max-w-lg text-[#8892B0]">
            Quelques projets récents réalisés pour des clients locaux.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded border border-[#233554] bg-[#112240] transition-all duration-200 hover:border-[#64FFDA]/40 hover:-translate-y-1">
                {/* Screenshot or placeholder */}
                <div className="relative h-44 border-b border-[#233554] overflow-hidden">
                  <Image
                    src={p.screenshot}
                    alt={p.alt}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    {...(i > 0 ? { loading: 'lazy' } : { priority: true })}
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-1 text-base font-semibold text-[#CCD6F6]">{p.name}</h3>
                  <p className="mb-3 font-mono text-xs text-[#64FFDA]">{p.type}</p>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-[#8892B0]">
                    {p.description}
                  </p>
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-[#64FFDA] transition-gap duration-150 hover:gap-2"
                    >
                      Voir le site <span>→</span>
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
