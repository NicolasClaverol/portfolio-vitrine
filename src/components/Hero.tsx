export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[90vh] max-w-5xl flex-col items-start justify-center px-6 py-24">

      {/* 1. Badge */}
      <p className="hero-item hero-d1 mb-5 font-mono text-sm text-[#64FFDA]">
        Développeur web freelance · Montpellier
      </p>

      {/* 2. h1 */}
      <h1 className="hero-lcp hero-d2 mb-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-[#CCD6F6] sm:text-5xl lg:text-6xl">
        Développeur web freelance à Montpellier
      </h1>

      {/* 3. sous-titre */}
      <h2 className="hero-item hero-d3 mb-6 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-[#8892B0] sm:text-5xl lg:text-6xl">
        Votre présence en ligne, pensée pour durer.
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

    </section>
  )
}
