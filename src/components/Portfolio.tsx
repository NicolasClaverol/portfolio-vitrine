const projects = [
  {
    name: "L'Échoppe du Peyrou",
    type: 'Restaurant / brasserie — Montpellier centre',
    stack: ['PHP', 'MySQL', 'Bootstrap'],
    description:
      'Site vitrine avec menu en ligne, galerie photos et formulaire de réservation.',
  },
  {
    name: 'Céramiques Madoré',
    type: 'Artisane céramiste — marché des Arceaux',
    stack: ['Next.js', 'Tailwind CSS'],
    description:
      'Portfolio visuel minimaliste avec boutique en ligne et gestion des commandes sur mesure.',
  },
  {
    name: 'Cabinet Kiné Antigone',
    type: 'Kinésithérapeute libéral — quartier Antigone',
    stack: ['React', 'PHP', 'MySQL'],
    description:
      'Site professionnel avec prise de rendez-vous en ligne et présentation des spécialités.',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[#1C1C1C]">
          Réalisations
        </h2>
        <p className="mb-12 max-w-lg text-[#6B7280]">
          Quelques projets récents réalisés pour des clients locaux.
        </p>

        <div className="grid gap-6 sm:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col overflow-hidden rounded-xl border border-[#E5E7EB] bg-white transition-shadow duration-200 hover:shadow-md"
            >
              {/* Image placeholder */}
              <div className="h-44 bg-[#E5E7EB] flex items-center justify-center">
                <span className="text-xs font-medium uppercase tracking-widest text-[#9CA3AF]">
                  Aperçu
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-1 text-base font-semibold text-[#1C1C1C]">{p.name}</h3>
                <p className="mb-3 text-xs text-[#6B7280]">{p.type}</p>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-[#6B7280]">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-[#3B5BDB]/8 px-2 py-0.5 text-xs font-medium text-[#3B5BDB]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
