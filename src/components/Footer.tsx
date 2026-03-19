const socials = [
  { label: 'GitHub', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Malt', href: '#' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[#233554] bg-[#0A192F] py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-mono text-sm text-[#8892B0]">
          © {new Date().getFullYear()} Nicolas Claverol — Montpellier
        </p>

        <ul className="flex items-center gap-6">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                className="font-mono text-sm text-[#8892B0] transition-colors duration-150 hover:text-[#64FFDA]"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
