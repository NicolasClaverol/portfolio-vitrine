export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[90vh] max-w-5xl flex-col items-start justify-center px-6 py-24">
      <span className="mb-4 inline-block rounded-full border border-[#3B5BDB]/30 bg-[#3B5BDB]/5 px-3 py-1 text-xs font-medium text-[#3B5BDB]">
        Développeur web freelance · Montpellier
      </span>

      <h1 className="mb-6 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-[#1C1C1C] sm:text-5xl">
        Votre présence en ligne,{' '}
        <span className="text-[#3B5BDB]">pensée pour durer.</span>
      </h1>

      <p className="mb-10 max-w-xl text-lg leading-relaxed text-[#6B7280]">
        Développeur web freelance à Montpellier — je conçois des sites clairs, rapides et
        efficaces pour les artisans, commerces et professions libérales d&apos;Occitanie.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href="#portfolio"
          className="rounded-md bg-[#3B5BDB] px-6 py-3 text-sm font-medium text-white transition-colors duration-150 hover:bg-[#2f4bc4]"
        >
          Voir mes réalisations
        </a>
        <a
          href="#contact"
          className="rounded-md border border-[#1C1C1C]/15 bg-white px-6 py-3 text-sm font-medium text-[#1C1C1C] transition-colors duration-150 hover:border-[#1C1C1C]/30 hover:bg-[#F3F4F6]"
        >
          Me contacter
        </a>
      </div>
    </section>
  )
}
