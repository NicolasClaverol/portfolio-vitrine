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
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[#1C1C1C]">
          Services
        </h2>
        <p className="mb-12 max-w-lg text-[#6B7280]">
          Des prestations adaptées à chaque étape de votre projet web.
        </p>

        <div className="grid gap-6 sm:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group flex flex-col rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] p-6 transition-shadow duration-200 hover:shadow-md"
            >
              <span className="mb-4 text-2xl">{s.icon}</span>
              <h3 className="mb-2 text-base font-semibold text-[#1C1C1C]">{s.title}</h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-[#6B7280]">
                {s.description}
              </p>
              <span className="text-sm font-medium text-[#3B5BDB]">{s.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
