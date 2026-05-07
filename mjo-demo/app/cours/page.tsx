import Link from "next/link";
import FadeUp from "@/components/FadeUp";

interface Groupe {
  nom: string;
  age: string;
  lundi?: string;
  mardi?: string;
  mercredi?: string;
  jeudi?: string;
  vendredi?: string;
  samedi?: string;
}

const GROUPES: Groupe[] = [
  { nom: "Éveil",               age: "3–5 ans",   mercredi: "10h–11h",                   samedi: "10h–11h" },
  { nom: "Mini-judokas",        age: "6–7 ans",   mercredi: "10h–11h30",                 samedi: "10h–11h30" },
  { nom: "Poussins",            age: "8–9 ans",   mercredi: "14h–15h30",                 samedi: "11h–12h30" },
  { nom: "Benjamins",           age: "10–11 ans", mardi: "17h–18h30", mercredi: "14h–15h30", samedi: "11h–12h30" },
  { nom: "Minimes",             age: "12–14 ans", lundi: "17h30–19h", mercredi: "15h30–17h", vendredi: "17h30–19h" },
  { nom: "Cadets / Juniors",    age: "15–17 ans", lundi: "18h–20h",   mercredi: "17h–19h",   vendredi: "18h–20h" },
  { nom: "Adultes loisirs",     age: "18 ans+",   lundi: "19h–20h30", mercredi: "19h–20h30", vendredi: "19h–20h30" },
  { nom: "Adultes compétition", age: "18 ans+",   mardi: "19h–21h",   jeudi: "19h–21h",      samedi: "9h–11h" },
  { nom: "PPG",                 age: "Tous",      mardi: "18h–19h",   jeudi: "18h–19h" },
  { nom: "Self-Défense Féminin",age: "Tous",      mercredi: "19h30–21h", vendredi: "19h30–21h" },
];

const COLS: { key: keyof Groupe; label: string }[] = [
  { key: "lundi",    label: "Lundi" },
  { key: "mardi",    label: "Mardi" },
  { key: "mercredi", label: "Mercredi" },
  { key: "jeudi",    label: "Jeudi" },
  { key: "vendredi", label: "Vendredi" },
  { key: "samedi",   label: "Samedi" },
];

export default function CoursPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0A0A0A] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#CC0000] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Organisation</p>
          <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl mb-4">
            Horaires des cours
          </h1>
          <p className="text-white/50 text-lg">
            Tous les niveaux, dès 3 ans jusqu&apos;aux adultes compétition.
          </p>
        </div>
      </section>

      {/* Table — desktop */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="hidden lg:block overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#0A0A0A] text-white">
                    <th className="text-left py-4 px-5 font-display font-semibold">Groupe</th>
                    <th className="text-left py-4 px-4 font-display font-semibold text-white/60 text-xs">Âge</th>
                    {COLS.map((c) => (
                      <th key={c.key} className="text-center py-4 px-3 font-display font-semibold">
                        {c.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {GROUPES.map((g, i) => (
                    <tr
                      key={g.nom}
                      className={`border-b border-gray-100 last:border-0 ${
                        i % 2 === 0 ? "bg-white" : "bg-[#F8F8F8]"
                      } hover:bg-red-50/30 transition-colors`}
                    >
                      <td className="py-4 px-5 font-semibold text-[#0A0A0A]">{g.nom}</td>
                      <td className="py-4 px-4 text-gray-400 text-xs">{g.age}</td>
                      {COLS.map((c) => (
                        <td key={c.key} className="py-4 px-3 text-center">
                          {g[c.key] ? (
                            <span className="bg-[#CC0000]/10 text-[#CC0000] font-medium rounded px-2 py-0.5 text-xs whitespace-nowrap">
                              {g[c.key]}
                            </span>
                          ) : (
                            <span className="text-gray-200">—</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>

          {/* Cards — mobile */}
          <div className="lg:hidden space-y-4">
            {GROUPES.map((g, i) => (
              <FadeUp key={g.nom} delay={i * 50}>
                <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display font-bold text-[#0A0A0A] text-base">{g.nom}</h3>
                      <span className="text-xs text-gray-400">{g.age}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {COLS.filter((c) => g[c.key]).map((c) => (
                      <div key={c.key} className="bg-[#F8F8F8] rounded-lg p-2.5">
                        <p className="text-xs text-gray-400 mb-0.5">{c.label}</p>
                        <p className="text-[#CC0000] font-semibold text-sm">{g[c.key]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Encart inscription */}
      <section className="bg-[#F8F8F8] py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <FadeUp>
            <div className="bg-[#0A0A0A] rounded-2xl p-10">
              <p className="text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Saison 2025–2026</p>
              <h2 className="font-display font-extrabold text-white text-2xl sm:text-3xl mb-4">
                Les cours reprennent en septembre
              </h2>
              <p className="text-white/50 text-sm mb-8">
                Les inscriptions sont ouvertes. N&apos;attendez pas pour réserver votre place !
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#CC0000] text-white font-bold px-8 py-4 rounded hover:bg-red-700 transition-colors"
              >
                S&apos;inscrire maintenant
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
