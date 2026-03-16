const socials = [
  { label: 'GitHub', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Malt', href: '#' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-white py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-[#6B7280]">
          © {new Date().getFullYear()} Nico<span className="text-[#3B5BDB]">Dev</span> — Montpellier
        </p>

        <ul className="flex items-center gap-6">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                className="text-sm text-[#6B7280] transition-colors duration-150 hover:text-[#3B5BDB]"
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
