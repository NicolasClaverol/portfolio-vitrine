'use client'

import { useEffect, useState } from 'react'

const links = [
  { label: 'Services', href: '/#services' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'À propos', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`hero-item hero-d1 sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A192F]/90 backdrop-blur-sm shadow-lg shadow-black/20 border-b border-[#233554]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="/" className="text-sm font-semibold tracking-tight text-[#CCD6F6]">
          Nicolas Claverol
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group text-sm text-[#8892B0] transition-colors duration-150 hover:text-[#64FFDA]"
              >
                <span className="text-[#64FFDA] text-xs font-mono mr-1">0{i + 1}.</span>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/#contact"
              className="rounded border border-[#64FFDA] px-4 py-2 text-sm font-medium text-[#64FFDA] transition-all duration-150 hover:bg-[#64FFDA]/10"
            >
              Me contacter
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <span
            className={`block h-0.5 w-6 bg-[#64FFDA] transition-transform duration-200 ${
              menuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#64FFDA] transition-opacity duration-200 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#64FFDA] transition-transform duration-200 ${
              menuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-[#233554] bg-[#112240] px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-5 pt-5">
            {links.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-[#8892B0] transition-colors hover:text-[#64FFDA]"
                >
                  <span className="text-[#64FFDA] text-xs font-mono mr-1">0{i + 1}.</span>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-block rounded border border-[#64FFDA] px-4 py-2 text-sm font-medium text-[#64FFDA]"
              >
                Me contacter
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
