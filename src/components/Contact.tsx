'use client'

import { useState, type FormEvent } from 'react'

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

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[#1C1C1C]">
              Un projet ? Parlons-en.
            </h2>
            <p className="mb-8 text-[#6B7280]">Je réponds sous 24h.</p>

            <div className="space-y-4 text-sm text-[#6B7280]">
              <p>
                📍 Basé à Montpellier — disponible en visio ou en présentiel en Occitanie.
              </p>
            </div>
          </div>

          <div>
            {sent ? (
              <div className="flex h-full flex-col items-start justify-center">
                <div className="rounded-xl border border-[#3B5BDB]/20 bg-[#3B5BDB]/5 p-6">
                  <p className="font-medium text-[#3B5BDB]">Message envoyé !</p>
                  <p className="mt-1 text-sm text-[#6B7280]">Je vous recontacte rapidement.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-4 text-sm underline underline-offset-2 text-[#3B5BDB] hover:text-[#2f4bc4]"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[#1C1C1C]">
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
                    className="w-full rounded-md border border-[#E5E7EB] bg-white px-3 py-2.5 text-sm text-[#1C1C1C] outline-none placeholder:text-[#9CA3AF] transition-colors focus:border-[#3B5BDB] focus:ring-2 focus:ring-[#3B5BDB]/20"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[#1C1C1C]">
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
                    className="w-full rounded-md border border-[#E5E7EB] bg-white px-3 py-2.5 text-sm text-[#1C1C1C] outline-none placeholder:text-[#9CA3AF] transition-colors focus:border-[#3B5BDB] focus:ring-2 focus:ring-[#3B5BDB]/20"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-[#1C1C1C]">
                    Téléphone <span className="text-[#9CA3AF] font-normal">(optionnel)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="06 12 34 56 78"
                    className="w-full rounded-md border border-[#E5E7EB] bg-white px-3 py-2.5 text-sm text-[#1C1C1C] outline-none placeholder:text-[#9CA3AF] transition-colors focus:border-[#3B5BDB] focus:ring-2 focus:ring-[#3B5BDB]/20"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[#1C1C1C]">
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
                    className="w-full resize-none rounded-md border border-[#E5E7EB] bg-white px-3 py-2.5 text-sm text-[#1C1C1C] outline-none placeholder:text-[#9CA3AF] transition-colors focus:border-[#3B5BDB] focus:ring-2 focus:ring-[#3B5BDB]/20"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-[#3B5BDB] px-6 py-3 text-sm font-medium text-white transition-colors duration-150 hover:bg-[#2f4bc4]"
                >
                  Envoyer
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
