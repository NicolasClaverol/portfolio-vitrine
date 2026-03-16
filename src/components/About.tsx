const techs = [
  'PHP',
  'MySQL',
  'JavaScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Bootstrap',
  'Git',
]

export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-[#1C1C1C]">
              À propos
            </h2>
            <p className="text-base leading-relaxed text-[#6B7280]">
              Développeur full-stack avec une solide expérience en ingénierie technique, je me
              suis tourné vers le développement web pour mettre mes compétences au service des
              entrepreneurs locaux. Basé à Montpellier, j&apos;accompagne artisans, commerçants
              et professions libérales dans la création de leur présence en ligne : des sites
              fiables, bien construits, sans superflu.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {techs.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-[#E5E7EB] bg-[#FAFAFA] px-3 py-1.5 text-sm font-medium text-[#1C1C1C]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
