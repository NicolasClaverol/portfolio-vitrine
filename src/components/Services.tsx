import Reveal from './Reveal'

const services = [
  {
    icon: '🖥️',
    title: 'Site vitrine Essentiel',
    description: 'Site de présentation soigné, design sur mesure, visible sur Google.',
    price: 'À partir de 900 €',
    featured: false,
  },
  {
    icon: '✏️',
    title: 'Site Pro + Gestion autonome',
    description:
      'Modifiez vos textes, photos, menus ou œuvres vous-même, sans technicien. Interface simple et intuitive.',
    price: 'À partir de 1 200 €',
    featured: false,
  },
  {
    icon: '🤖',
    title: 'Site Pro + Assistant automatique',
    description:
      'Site multi-pages professionnel + assistant IA qui répond à vos clients 24h/24, 7j/7. Récap des conversations reçu par email. 1ère année d\'assistant incluse.',
    price: 'À partir de 1 300 €',
    featured: true,
  },
  {
    icon: '🛒',
    title: 'Site e-commerce',
    description:
      'Boutique en ligne complète, paiement sécurisé, gestion des stocks.',
    price: 'À partir de 1 800 €',
    featured: false,
  },
  {
    icon: '💬',
    title: 'Assistant sur votre site actuel',
    description:
      'Ajoutez un assistant automatique à votre site existant. Installation rapide, aucune refonte nécessaire. Maintenance incluse la 1ère année.',
    price: 'À partir de 800 €',
    featured: false,
  },
  {
    icon: '🔧',
    title: 'Refonte & maintenance',
    description: "Modernisation d'un site existant, mises à jour, support technique.",
    price: 'Sur devis',
    featured: false,
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-[#112240] py-24">
      <div className="mx-auto max-w-5xl px-6">

        <Reveal>
          <p className="mb-2 font-mono text-sm text-[#64FFDA]">01.</p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[#CCD6F6]">
            Services
          </h2>
          <p className="mb-12 max-w-lg text-[#8892B0]">
            Des prestations adaptées à chaque étape de votre projet web.
          </p>
        </Reveal>

        {/* Ligne 1 : 2 colonnes */}
        <div className="grid gap-6 sm:grid-cols-2">
          {[services[0], services[1]].map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="group flex h-full flex-col rounded border border-[#233554] bg-[#0A192F] p-6 transition-all duration-200 hover:border-[#64FFDA]/40 hover:-translate-y-1">
                <span className="mb-5 text-2xl">{s.icon}</span>
                <h3 className="mb-2 text-base font-semibold text-[#CCD6F6]">{s.title}</h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-[#8892B0]">{s.description}</p>
                <span className="font-mono text-sm text-[#64FFDA]">{s.price}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Ligne 2 : offre phare pleine largeur */}
        <Reveal delay={200}>
          <div className="relative mt-6 flex flex-col rounded border-2 border-[#64FFDA] bg-[#0D2137] p-8 transition-all duration-200 hover:-translate-y-1 sm:flex-row sm:items-center sm:gap-8">
            <span className="absolute -top-3 left-4 rounded-full bg-[#64FFDA] px-3 py-0.5 font-mono text-xs font-semibold text-[#0A192F]">
              Offre phare
            </span>
            <span className="mb-5 text-3xl sm:mb-0">{services[2].icon}</span>
            <div className="flex-1">
              <h3 className="mb-2 text-base font-semibold text-[#CCD6F6]">{services[2].title}</h3>
              <p className="text-sm leading-relaxed text-[#8892B0]">{services[2].description}</p>
            </div>
            <span className="mt-4 font-mono text-sm text-[#64FFDA] sm:mt-0 sm:shrink-0">{services[2].price}</span>
          </div>
        </Reveal>

        {/* Ligne 3 : 2 colonnes */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {[services[3], services[4]].map((s, i) => (
            <Reveal key={s.title} delay={300 + i * 100}>
              <div className="group flex h-full flex-col rounded border border-[#233554] bg-[#0A192F] p-6 transition-all duration-200 hover:border-[#64FFDA]/40 hover:-translate-y-1">
                <span className="mb-5 text-2xl">{s.icon}</span>
                <h3 className="mb-2 text-base font-semibold text-[#CCD6F6]">{s.title}</h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-[#8892B0]">{s.description}</p>
                <span className="font-mono text-sm text-[#64FFDA]">{s.price}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Ligne 4 : Refonte & maintenance pleine largeur */}
        <Reveal delay={500}>
          <div className="group mt-6 flex flex-col rounded border border-[#233554] bg-[#0A192F] p-6 transition-all duration-200 hover:border-[#64FFDA]/40 hover:-translate-y-1 sm:flex-row sm:items-center sm:gap-6">
            <span className="mb-4 text-2xl sm:mb-0">{services[5].icon}</span>
            <div className="flex flex-1 flex-col sm:flex-row sm:items-center sm:gap-6">
              <div className="flex-1">
                <h3 className="mb-2 text-base font-semibold text-[#CCD6F6]">{services[5].title}</h3>
                <p className="text-sm leading-relaxed text-[#8892B0]">{services[5].description}</p>
              </div>
              <span className="mt-4 font-mono text-sm text-[#64FFDA] sm:mt-0 sm:shrink-0">{services[5].price}</span>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
