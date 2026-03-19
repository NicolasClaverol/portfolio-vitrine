'use client'

import { useState, type FormEvent } from 'react'
import Reveal from './Reveal'

type FormState = {
  name: string
  email: string
  phone: string
  message: string
}

const initialState: FormState = { name: '', email: '', phone: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState)
  const [sent, setSent] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    // Placeholder — à connecter à un backend ou un service comme Resend
    setSent(true)
    setForm(initialState)
  }

  const inputClass =
    'w-full rounded border border-[#233554] bg-[#112240] px-3 py-2.5 text-sm text-[#CCD6F6] outline-none placeholder:text-[#8892B0]/40 transition-colors focus:border-[#64FFDA] focus:ring-1 focus:ring-[#64FFDA]/20'

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-2">

          <Reveal>
            <p className="mb-2 font-mono text-sm text-[#64FFDA]">04.</p>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[#CCD6F6]">
              Un projet ? Parlons-en.
            </h2>
            <p className="mb-8 text-[#8892B0]">Je réponds sous 24h.</p>

            <div className="space-y-4 text-sm text-[#8892B0]">
              <p>
                Basé à Montpellier, disponible pour vos projets partout en France.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            {sent ? (
              <div className="flex h-full flex-col items-start justify-center">
                <div className="rounded border border-[#64FFDA]/20 bg-[#64FFDA]/5 p-6">
                  <p className="font-medium text-[#64FFDA]">Message envoyé !</p>
                  <p className="mt-1 text-sm text-[#8892B0]">Je vous recontacte rapidement.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-4 font-mono text-sm text-[#64FFDA] underline underline-offset-2 hover:no-underline"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[#CCD6F6]">
                    Nom *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Marie Dupont"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[#CCD6F6]">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="marie@exemple.fr"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-[#CCD6F6]">
                    Téléphone <span className="text-[#8892B0]/60 font-normal">(optionnel)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="06 12 34 56 78"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[#CCD6F6]">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded border border-[#64FFDA] px-6 py-3 text-sm font-medium text-[#64FFDA] transition-all duration-150 hover:bg-[#64FFDA]/10"
                >
                  Envoyer
                </button>
              </form>
            )}
          </Reveal>

        </div>
      </div>
    </section>
  )
}
