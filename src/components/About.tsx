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
    <section id="about" className="bg-[#112240] py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-2 font-mono text-sm text-[#64FFDA]">03.</p>
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-[#CCD6F6]">
              À propos
            </h2>
            <p className="text-base leading-relaxed text-[#8892B0]">
              Développeur full-stack avec une solide expérience en ingénierie technique, je me
              suis tourné vers le développement web pour mettre mes compétences au service des
              entrepreneurs locaux. Basé à Montpellier, j&apos;accompagne artisans, commerçants
              et professions libérales dans la création de leur présence en ligne : des sites
              fiables, bien construits, sans superflu.
            </p>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#64FFDA]">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {techs.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-[#233554] bg-[#0A192F] px-3 py-1.5 font-mono text-sm text-[#8892B0] transition-colors hover:border-[#64FFDA]/40 hover:text-[#64FFDA]"
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
