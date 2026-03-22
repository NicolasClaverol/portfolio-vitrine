import Image from 'next/image'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="bg-[#112240] py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-center">

          {/* Photo */}
          <Reveal>
            <div className="relative w-52 flex-shrink-0 md:w-64">
              {/* Bordure décalée menthe */}
              <div className="absolute inset-0 translate-x-3.5 translate-y-3.5 rounded border-2 border-[#64FFDA] transition-transform duration-300" />

              {/* Image noir et blanc + overlay menthe au survol */}
              <div className="group relative overflow-hidden rounded">
                <Image
                  src="/nicolas-claverol.png"
                  alt="Nicolas Claverol — Développeur web freelance Montpellier"
                  width={256}
                  height={256}
                  className="block w-full object-cover object-top grayscale transition-[filter] duration-300 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 rounded bg-[#64FFDA] opacity-20 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0" />
              </div>
            </div>
          </Reveal>

          {/* Texte bio */}
          <Reveal delay={150}>
            <p className="mb-2 font-mono text-sm text-[#64FFDA]">03.</p>
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-[#CCD6F6]">
              À propos
            </h2>
            <p className="text-base leading-relaxed text-[#8892B0]">
              Développeur full-stack avec plus de 20 ans d&apos;expérience en expertise et ingénierie technique dans l&apos;industrie, je me
              suis tourné vers le développement web pour mettre mes compétences au service des
              entrepreneurs locaux. Basé à Montpellier, j&apos;accompagne artisans, commerçants
              et professions libérales dans la création de leur présence en ligne : des sites
              fiables, bien construits, sans superflu.
            </p>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
