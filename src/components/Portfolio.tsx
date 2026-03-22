import Image from 'next/image'
import Reveal from './Reveal'

type Project = {
  name: string
  type: string
  description: string
  url?: string
}

const projects: Project[] = [
  {
    name: "L'Échoppe du Peyrou",
    type: 'Restaurant / brasserie — Montpellier centre',
    description:
      'Site vitrine avec menu en ligne, galerie photos et formulaire de réservation.',
    url: 'https://echoppe-du-peyrou.vercel.app',
  },
  {
    name: 'Céramiques Madoré',
    type: 'Artisane céramiste — marché des Arceaux',
    description:
      'Portfolio visuel minimaliste avec boutique en ligne et gestion des commandes sur mesure.',
    url: 'https://ceramiques-madore.vercel.app',
  },
  {
    name: 'Cabinet Kiné Antigone',
    type: 'Kinésithérapeute libéral — quartier Antigone',
    description:
      'Site professionnel avec prise de rendez-vous en ligne et présentation des spécialités.',
    url: 'https://cabinet-kine-antigone.vercel.app',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="mx-auto max-w-5xl px-6">

        <Reveal>
          <p className="mb-2 font-mono text-sm text-[#64FFDA]">02.</p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[#CCD6F6]">
            Réalisations
          </h2>
          <p className="mb-12 max-w-lg text-[#8892B0]">
            Quelques projets récents réalisés pour des clients locaux.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded border border-[#233554] bg-[#112240] transition-all duration-200 hover:border-[#64FFDA]/40 hover:-translate-y-1">
                {/* Screenshot or placeholder */}
                <div className="relative h-44 border-b border-[#233554] overflow-hidden">
                  {p.url ? (
                    <Image
                      src={`https://api.microlink.io/?url=${encodeURIComponent(p.url)}&screenshot=true&meta=false&embed=screenshot.url`}
                      alt={`Aperçu de ${p.name}`}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                  ) : (
                    <div className="h-full bg-[#0A192F] flex items-center justify-center">
                      <span className="font-mono text-xs uppercase tracking-widest text-[#8892B0]/50">
                        Aperçu
                      </span>
                    </div>
                  )}
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
