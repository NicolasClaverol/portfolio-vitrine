import ActuCard from "@/components/ActuCard";
import FadeUp from "@/components/FadeUp";

const ACTUS = [
  {
    date: "Fév 2026",
    category: "Stage",
    title: "Stage d'hiver MJO — judo & activités",
    excerpt:
      "Une semaine de stage intensive : judo le matin avec nos enseignants diplômés, et l'après-midi place aux activités — laser game, sorties parc, teambuilding. Ambiance garantie !",
  },
  {
    date: "Jan 2026",
    category: "Partenariat",
    title: "Partenariat Ville de Montpellier — Place aux Sports",
    excerpt:
      "Dans le cadre du dispositif Place aux Sports, le MJO accueille 14 enfants de 3 à 6 ans issus des quartiers prioritaires. Un beau geste pour l'accès au sport pour tous.",
  },
  {
    date: "Déc 2025",
    category: "Stages",
    title: "Stages vacances scolaires — tarifs accessibles",
    excerpt:
      "Le MJO propose des stages pendant toutes les vacances scolaires : 50€ la semaine, 80€ pour 2 enfants de la même famille, 15€ à la journée. Inscriptions en ligne.",
  },
  {
    date: "Déc 2025",
    category: "Club",
    title: "Fête de Noël MJO avec notre partenaire Veolia",
    excerpt:
      "La traditionnelle Fête de Noël du MJO s'est tenue en décembre. Grâce au soutien de Veolia, chaque enfant est reparti avec un cadeau. Merci à tous nos bénévoles et partenaires !",
  },
  {
    date: "Nov 2025",
    category: "Stage",
    title: "Vacances Toussaint — 40+ judokas sur le tatami",
    excerpt:
      "Plus de 40 judokas réunis sur le tatami pendant les vacances de la Toussaint. Un stage à l'esprit collectif, encadré par Arthur Combeau et l'équipe technique du MJO.",
  },
  {
    date: "Oct 2025",
    category: "Compétition",
    title: "Retour sur la saison 2024–2025 : palmarès historique",
    excerpt:
      "Champions de France, podiums européens, Champions League… La saison écoulée restera gravée dans l'histoire du MJO. Revivez les moments forts de nos athlètes.",
  },
];

export default function ActualitesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0A0A0A] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#CC0000] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Vie du club</p>
          <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl mb-4">
            Actualités
          </h1>
          <p className="text-white/50 text-lg">
            Stages, événements, compétitions et partenariats — toute la vie du MJO.
          </p>
        </div>
      </section>

      {/* Grille actualités */}
      <section className="bg-[#F8F8F8] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACTUS.map((actu, i) => (
              <FadeUp key={actu.title} delay={i * 70}>
                <ActuCard {...actu} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
