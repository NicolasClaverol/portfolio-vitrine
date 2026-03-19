import Image from 'next/image'

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[90vh] max-w-5xl flex-col-reverse items-center gap-12 px-6 py-24 md:flex-row md:items-center md:gap-0">

      {/* Texte — apparaît en bas sur mobile, à gauche sur desktop */}
      <div className="flex flex-col items-start flex-1">

        {/* 1. Badge */}
        <p className="hero-item hero-d1 mb-5 font-mono text-sm text-[#64FFDA]">
          Développeur web freelance · Montpellier
        </p>

        {/* 2. h1 */}
        <h1 className="hero-item hero-d2 mb-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-[#CCD6F6] sm:text-5xl lg:text-6xl">
          Votre présence en ligne,
        </h1>

        {/* 3. h2 */}
        <h2 className="hero-item hero-d3 mb-6 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-[#8892B0] sm:text-5xl lg:text-6xl">
          pensée pour durer.
        </h2>

        {/* 4. Paragraphe */}
        <p className="hero-item hero-d4 mb-12 max-w-xl text-base leading-relaxed text-[#8892B0]">
          Développeur web freelance à Montpellier — je conçois des sites clairs, rapides et
          efficaces pour les indépendants, artisans, artistes et petites entreprises, en présentiel
          à Montpellier ou à distance partout en France.
        </p>

        {/* 5. Boutons */}
        <div className="hero-item hero-d5 flex flex-col gap-4 sm:flex-row">
          <a
            href="#portfolio"
            className="rounded border border-[#64FFDA] px-7 py-3.5 text-sm font-medium text-[#64FFDA] transition-all duration-150 hover:bg-[#64FFDA]/10"
          >
            Voir mes réalisations
          </a>
          <a
            href="#contact"
            className="rounded border border-[#CCD6F6]/20 px-7 py-3.5 text-sm font-medium text-[#CCD6F6] transition-all duration-150 hover:border-[#CCD6F6]/40 hover:bg-[#CCD6F6]/5"
          >
            Me contacter
          </a>
        </div>
      </div>

      {/* 6. Photo — apparaît en haut sur mobile, à droite sur desktop */}
      <div className="hero-item hero-d6 flex justify-center md:ml-16 md:flex-shrink-0">
        <div className="relative w-44 md:w-64">
          {/* Bordure décalée menthe */}
          <div className="absolute inset-0 translate-x-3.5 translate-y-3.5 rounded border-2 border-[#64FFDA] transition-transform duration-300" />

          {/* Image avec overlay teinte menthe qui disparaît au survol */}
          <div className="group relative overflow-hidden rounded">
            <Image
              src="/nicolas-claverol.png"
              alt="Nicolas Claverol — Développeur web freelance Montpellier"
              width={256}
              height={256}
              className="block w-full object-cover object-top"
              priority
            />
            <div className="absolute inset-0 rounded bg-[#64FFDA] opacity-20 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0" />
          </div>
        </div>
      </div>

    </section>
  )
}
