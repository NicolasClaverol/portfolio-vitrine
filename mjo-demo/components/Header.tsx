"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/",           label: "Accueil" },
  { href: "/cours",      label: "Cours" },
  { href: "/actualites", label: "Actualités" },
  { href: "/contact",    label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="text-2xl font-extrabold text-[#CC0000] font-display tracking-tight">MJO</span>
            <span className="hidden sm:flex flex-col leading-none">
              <span className="text-[#0A0A0A] text-xs font-semibold tracking-wide">Montpellier</span>
              <span className="text-gray-400 text-[10px] tracking-widest uppercase">Judo Olympic</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                  pathname === href
                    ? "text-[#0A0A0A] bg-gray-100 font-semibold"
                    : "text-gray-500 hover:text-[#0A0A0A] hover:bg-gray-50"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 bg-[#CC0000] text-white px-4 py-2 rounded text-sm font-semibold hover:bg-red-700 transition-colors"
            >
              S&apos;inscrire
            </Link>
          </nav>

          {/* Burger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <span className={`block w-6 h-0.5 bg-[#0A0A0A] origin-center transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#0A0A0A] transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#0A0A0A] origin-center transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 border-t border-gray-100" : "max-h-0"
        } bg-white`}
      >
        <div className="px-4 py-3 flex flex-col">
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`py-3 text-base border-b border-gray-100 last:border-0 transition-colors ${
                pathname === href ? "text-[#0A0A0A] font-semibold" : "text-gray-500"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 mb-2 bg-[#CC0000] text-white text-center py-3 rounded font-semibold hover:bg-red-700 transition-colors"
          >
            S&apos;inscrire
          </Link>
        </div>
      </div>
    </header>
  );
}
