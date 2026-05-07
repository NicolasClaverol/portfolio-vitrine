"use client";
import { useState } from "react";
import FadeUp from "@/components/FadeUp";

const CONTACTS = [
  { name: "Christel LAVAUD",        role: "Présidente",                       tel: "06.48.37.23.65" },
  { name: "Arthur Combeau",         role: "Directeur Technique",              tel: "06.64.92.88.92" },
  { name: "Zahia BACHA SOUALHI",    role: "Professeur & Médiatrice",          tel: "06.29.10.42.15" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ nom: "", email: "", tel: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* Header */}
      <section className="bg-[#0A0A0A] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#CC0000] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Nous rejoindre</p>
          <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl mb-4">
            Contact
          </h1>
          <p className="text-white/50 text-lg">
            Une question ? Une inscription ? On vous répond rapidement.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F8F8] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Formulaire */}
            <FadeUp>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="font-display font-bold text-[#0A0A0A] text-xl mb-6">Envoyer un message</h2>
                {sent ? (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">✉️</div>
                    <p className="font-display font-bold text-[#0A0A0A] text-lg mb-2">Message envoyé !</p>
                    <p className="text-gray-500 text-sm">Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                      <input
                        type="text"
                        name="nom"
                        value={form.nom}
                        onChange={handleChange}
                        placeholder="Jean Dupont"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#CC0000] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jean@example.com"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#CC0000] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                      <input
                        type="tel"
                        name="tel"
                        value={form.tel}
                        onChange={handleChange}
                        placeholder="06 XX XX XX XX"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#CC0000] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Votre message..."
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#CC0000] transition-colors resize-none"
                      />
                    </div>
                    <button
                      onClick={() => setSent(true)}
                      className="w-full bg-[#CC0000] text-white font-bold py-4 rounded-lg hover:bg-red-700 transition-colors text-sm"
                    >
                      Envoyer le message
                    </button>
                    <p className="text-gray-400 text-xs text-center">
                      Formulaire démo — non connecté à un serveur.
                    </p>
                  </div>
                )}
              </div>
            </FadeUp>

            {/* Infos */}
            <FadeUp delay={150}>
              <div className="space-y-6">
                {/* Adresse */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-display font-bold text-[#0A0A0A] mb-3 flex items-center gap-2">
                    <span className="text-[#CC0000]">📍</span> Adresse
                  </h3>
                  <address className="not-italic text-gray-600 text-sm leading-6">
                    Hall des sports du Collège Arthur Rimbaud<br />
                    Rue Mohamed 5, 34000 Montpellier<br />
                    <span className="text-gray-400 text-xs">Tram 3 — Celleneuve · Tram 1 — Mosson</span>
                  </address>
                </div>

                {/* Email */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-display font-bold text-[#0A0A0A] mb-3 flex items-center gap-2">
                    <span className="text-[#CC0000]">✉️</span> Email
                  </h3>
                  <a
                    href="mailto:montpellier.judo.olympic@gmail.com"
                    className="text-gray-600 text-sm hover:text-[#CC0000] transition-colors"
                  >
                    montpellier.judo.olympic@gmail.com
                  </a>
                </div>

                {/* Contacts */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-display font-bold text-[#0A0A0A] mb-4 flex items-center gap-2">
                    <span className="text-[#CC0000]">📞</span> Contacts
                  </h3>
                  <div className="space-y-4">
                    {CONTACTS.map(({ name, role, tel }) => (
                      <div key={name} className="flex flex-col gap-0.5">
                        <p className="text-[#0A0A0A] font-semibold text-sm">{name}</p>
                        <p className="text-gray-400 text-xs">{role}</p>
                        <a
                          href={`tel:${tel.replace(/\./g, "")}`}
                          className="text-[#CC0000] text-sm font-medium hover:text-red-800 transition-colors"
                        >
                          {tel}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                  <iframe
                    title="Localisation MJO"
                    src="https://www.google.com/maps?q=Rue+Mohamed+5+Montpellier&output=embed"
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
