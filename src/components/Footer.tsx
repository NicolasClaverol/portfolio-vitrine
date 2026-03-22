export default function Footer() {
  return (
    <footer className="border-t border-[#233554] bg-[#0A192F] py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-mono text-sm text-[#8892B0]">
          © {new Date().getFullYear()} Nicolas Claverol — Montpellier
        </p>
      </div>
    </footer>
  )
}
