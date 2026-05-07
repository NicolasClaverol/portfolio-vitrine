import Link from "next/link";

const LINKS = [
  { href: "/",           label: "Accueil" },
  { href: "/cours",      label: "Cours" },
  { href: "/actualites", label: "Actualités" },
  { href: "/contact",    label: "Contact" },
];

const SOCIAL = [
  { label: "Facebook",  href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn",  href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Infos club */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl font-extrabold text-[#CC0000] font-display">MJO</span>
              <span className="text-white/50 text-sm">Montpellier Judo Olympic</span>
            </div>
            <address className="not-italic text-white/40 text-sm leading-7">
              Hall des sports du Collège Arthur Rimbaud<br />
              Rue Mohamed 5, 34000 Montpellier<br />
              <a
                href="mailto:montpellier.judo.olympic@gmail.com"
                className="hover:text-white/70 transition-colors"
              >
                montpellier.judo.olympic@gmail.com
              </a>
            </address>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-white font-semibold font-display mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              {LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-white/40 hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-white font-semibold font-display mb-4">Nous suivre</h3>
            <div className="flex flex-col gap-3">
              {SOCIAL.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-2.5 text-white/40 hover:text-white text-sm transition-colors group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CC0000] group-hover:scale-125 transition-transform" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-6">
          <p className="text-white/25 text-xs">
            © 2026 Montpellier Judo Olympic — Tous droits réservés
          </p>
          <p className="text-white/25 text-xs">
            Site réalisé par{" "}
            <a
              href="https://nicolasclaverol.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/50 transition-colors underline underline-offset-2"
            >
              Nicolas Claverol
            </a>
            {" "}· nicolasclaverol.com
          </p>
        </div>
      </div>
    </footer>
  );
}
