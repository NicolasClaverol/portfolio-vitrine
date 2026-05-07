import Link from "next/link";
import MedalCard from "@/components/MedalCard";
import FadeUp from "@/components/FadeUp";

const STATS = [
  { value: "600+", label: "Licenciés" },
  { value: "5",    label: "Enseignants diplômés" },
  { value: "Or",   label: "Label Fédéral" },
  { value: "+10",  label: "Ans d'existence" },
];

const MEDALS = [
  { type: "gold"   as const, emoji: "🥇", name: "Jehanne",               title: "Championne de France" },
  { type: "bronze" as const, emoji: "🥉", name: "Maasi",                 title: "3e place Championnat de France" },
  { type: "trophy" as const, emoji: "🏆", name: "Emma",                  title: "Vice-Championne d'Europe individuel + Or équipe de France" },
  { type: "silver" as const, emoji: "🥈", name: "Équipe junior féminine",title: "Vice-Championnes de France" },
  { type: "gold"   as const, emoji: "🥇", name: "Angel",                 title: "Champion de France 1re division seniors +100 kg" },
  { type: "silver" as const, emoji: "🥈", name: "Daviti",                title: "Vice-champion de France -55 kg cadet · 3e junior" },
  { type: "gold"   as const, emoji: "🥇", name: "Emma & Inès",           title: "Championne et Vice-championne de France junior" },
];

const COURS = [
  {
    icon: "🥋",
    title: "Judo Enfants",
    desc: "Dès 3 ans — éveil, coordination et respect. Un socle solide pour les futurs champions.",
  },
  {
    icon: "⚔️",
    title: "Judo Adultes",
    desc: "Loisirs ou compétition, chaque niveau trouve sa place dans nos groupes adultes.",
  },
  {
    icon: "💪",
    title: "PPG",
    desc: "Préparation physique générale pour performer sur et en dehors du tatami.",
  },
  {
    icon: "🛡️",
    title: "Self-Défense Féminin",
    desc: "Techniques adaptées, confiance et autonomie — ouvert à toutes.",
  },
];

export default function Home() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-[80vh] bg-white flex items-center overflow-hidden">
        {/* Accent bar gauche */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#CC0000]" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-8 sm:px-12 lg:px-16 py-20">
          <p className="text-[#CC0000] text-xs font-semibold tracking-[0.25em] uppercase mb-5">
            Club Élite Occitanie
          </p>
          <h1 className="font-display font-extrabold text-[#0A0A0A] text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-6">
            L&apos;excellence du judo<br />
            <span className="text-[#CC0000]">à Montpellier</span>
          </h1>
          <p className="text-gray-500 text-lg sm:text-xl max-w-lg mb-10">
            600 licenciés · Club labellisé Or · Judo dès 3 ans
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/cours"
              className="bg-[#CC0000] text-white font-semibold px-8 py-4 rounded hover:bg-red-700 transition-colors text-base"
            >
              Découvrir nos cours
            </Link>
            <Link
              href="/contact"
              className="border-2 border-[#CC0000] text-[#CC0000] font-semibold px-8 py-4 rounded hover:bg-red-50 transition-colors text-base"
            >
              Nous contacter
            </Link>
          </div>
        </div>

        {/* Bande diagonale rouge bas du hero */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-8 pointer-events-none">
          <svg viewBox="0 0 100 8" preserveAspectRatio="none" className="w-full h-full">
            <polygon points="0,8 100,0 100,8" fill="#CC0000" />
          </svg>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="bg-[#CC0000] py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map(({ value, label }, i) => (
              <FadeUp key={label} delay={i * 80}>
                <p className="text-white font-display font-extrabold text-4xl sm:text-5xl">{value}</p>
                <p className="text-white/70 text-sm mt-1 font-medium">{label}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Nos Champions ─── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <p className="text-[#CC0000] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Palmarès</p>
              <h2 className="font-display font-extrabold text-[#0A0A0A] text-3xl sm:text-4xl">Nos Champions</h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {MEDALS.map((m, i) => (
              <FadeUp key={m.name} delay={i * 60}>
                <MedalCard {...m} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── À propos ─── */}
      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <p className="text-[#CC0000] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Notre histoire</p>
              <h2 className="font-display font-extrabold text-[#0A0A0A] text-3xl sm:text-4xl mb-6">
                Un club né de la passion,<br />porté par l&apos;excellence
              </h2>
              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                <p>
                  Fondé en 2013 par <strong className="text-[#0A0A0A]">Christel Lavaud</strong> et{" "}
                  <strong className="text-[#0A0A0A]">Zahia Bacha Soualhi</strong>, le MJO est parti
                  de 140 licenciés pour atteindre aujourd&apos;hui <strong className="text-[#0A0A0A]">600+ membres</strong>.
                </p>
                <p>
                  Club <strong className="text-[#0A0A0A]">labellisé Or</strong> par la Fédération Française
                  de Judo, nous comptons 5 salariés dont un directeur sportif haut niveau. En 2024 :
                  7e à la Champions League, 5e au Championnat de France Judo Pro League.
                </p>
                <p>
                  Engagé dans les quartiers <strong className="text-[#0A0A0A]">Celleneuve, Petit Bard et Mosson</strong>,
                  le MJO est bien plus qu&apos;un club de compétition : une politique sociale active
                  au service du territoire.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={150}>
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0A0A0A] to-gray-700 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-[#CC0000] font-display font-extrabold text-6xl">MJO</p>
                  <p className="text-white/30 text-sm mt-2 tracking-widest uppercase">Depuis 2013</p>
                </div>
                <div className="absolute top-4 right-4 bg-[#D4AF37] text-black text-xs font-bold px-3 py-1 rounded-full">
                  Label Or
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── Nos cours ─── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <p className="text-[#CC0000] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Disciplines</p>
              <h2 className="font-display font-extrabold text-[#0A0A0A] text-3xl sm:text-4xl">Nos cours</h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COURS.map(({ icon, title, desc }, i) => (
              <FadeUp key={title} delay={i * 80}>
                <div className="border border-gray-100 rounded-xl p-6 hover:border-[#CC0000]/30 hover:shadow-md transition-all duration-300 h-full">
                  <span className="text-4xl mb-4 block">{icon}</span>
                  <h3 className="font-display font-bold text-[#0A0A0A] text-lg mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#CC0000] py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl mb-4">
              Prêt à commencer ?
            </h2>
            <p className="text-white/70 text-base mb-8">
              Rejoignez les 600 licenciés du MJO et vivez le judo au plus haut niveau.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/cours"
                className="bg-white text-[#CC0000] font-bold px-8 py-4 rounded hover:bg-gray-100 transition-colors"
              >
                Voir les horaires
              </Link>
              <Link
                href="/contact"
                className="border border-white/40 text-white font-semibold px-8 py-4 rounded hover:bg-white/10 transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── Partenaires ─── */}
      <section className="bg-[#F5F5F5] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-center text-gray-400 text-sm font-semibold uppercase tracking-widest mb-10">
              Nos partenaires
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <div className="flex flex-wrap justify-center gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-14 w-32 rounded-lg bg-gray-200 flex items-center justify-center"
                >
                  <span className="text-gray-400 text-xs font-medium">Partenaire {i + 1}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
