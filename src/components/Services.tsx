const services = [
  {
    icon: '⬜',
    title: 'Site vitrine',
    description:
      'Présentation soignée de votre activité, design sur mesure, optimisé SEO.',
    price: 'À partir de 1 500€',
  },
  {
    icon: '🛒',
    title: 'Site e-commerce',
    description:
      'Boutique en ligne complète, paiement sécurisé, gestion des stocks.',
    price: 'À partir de 3 500€',
  },
  {
    icon: '🔧',
    title: 'Refonte & maintenance',
    description:
      "Modernisation d'un site existant, mises à jour, support technique.",
    price: 'Sur devis',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-[#112240] py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-2 font-mono text-sm text-[#64FFDA]">01.</p>
        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[#CCD6F6]">
          Services
        </h2>
        <p className="mb-12 max-w-lg text-[#8892B0]">
          Des prestations adaptées à chaque étape de votre projet web.
        </p>

        <div className="grid gap-6 sm:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group flex flex-col rounded border border-[#233554] bg-[#0A192F] p-6 transition-all duration-200 hover:border-[#64FFDA]/40 hover:-translate-y-1"
            >
              <span className="mb-5 text-2xl">{s.icon}</span>
              <h3 className="mb-2 text-base font-semibold text-[#CCD6F6]">{s.title}</h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-[#8892B0]">
                {s.description}
              </p>
              <span className="font-mono text-sm text-[#64FFDA]">{s.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
