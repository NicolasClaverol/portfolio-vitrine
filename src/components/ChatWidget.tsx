'use client'

import { useState, useRef, useEffect, useCallback } from 'react'

const PULSE_STYLES = `
@keyframes chatPulse {
  0%   { transform: scale(1);   opacity: 0.7; }
  100% { transform: scale(1.9); opacity: 0;   }
}
@keyframes bubbleFadeIn {
  from { opacity: 0; transform: translateX(6px); }
  to   { opacity: 1; transform: translateX(0);   }
}
`

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const WELCOME: Message = {
  role: 'assistant',
  content:
    'Bonjour ! Je suis l\'assistant de Nicolas Claverol. Posez-moi vos questions sur ses services, ses tarifs ou son fonctionnement — je suis là pour vous aider !',
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([WELCOME])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showBubble, setShowBubble] = useState(false)
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [leadName, setLeadName] = useState('')
  const [leadEmail, setLeadEmail] = useState('')
  const [leadSent, setLeadSent] = useState(false)
  const [leadLoading, setLeadLoading] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  useEffect(() => {
    const show = setTimeout(() => setShowBubble(true), 3000)
    const hide = setTimeout(() => setShowBubble(false), 7000)
    return () => { clearTimeout(show); clearTimeout(hide) }
  }, [])

  const sendMessage = useCallback(async () => {
    if (!input.trim() || isLoading) return

    const userMsg: Message = { role: 'user', content: input.trim() }
    const history = [...messages, userMsg]
    setMessages([...history, { role: 'assistant', content: '' }])
    setInput('')
    setIsLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: history.map((m) => ({ role: m.role, content: m.content })),
        }),
      })

      if (!res.ok || !res.body) throw new Error('Erreur réseau')

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let assistantContent = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const lines = decoder.decode(value).split('\n')
        for (const line of lines) {
          if (!line.startsWith('data: ')) continue
          const data = line.slice(6)
          if (data === '[DONE]') break
          try {
            assistantContent += JSON.parse(data).text
            setMessages((prev) => {
              const updated = [...prev]
              updated[updated.length - 1] = {
                role: 'assistant',
                content: assistantContent,
              }
              return updated
            })
          } catch {
            // ignore partial JSON
          }
        }
      }

      // Show lead form if AI mentions contact info or after enough exchanges
      const aiTurns = history.filter((m) => m.role === 'assistant').length + 1
      if (aiTurns >= 2 && !showLeadForm && !leadSent) {
        const keywords = ['email', 'coordonnées', 'recontact', 'prénom', 'joindre']
        if (keywords.some((k) => assistantContent.toLowerCase().includes(k))) {
          setShowLeadForm(true)
        }
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev]
        updated[updated.length - 1] = {
          role: 'assistant',
          content:
            'Désolé, une erreur est survenue. Contactez Nicolas directement à contact@nicolasclaverol.com.',
        }
        return updated
      })
    } finally {
      setIsLoading(false)
    }
  }, [input, isLoading, messages, showLeadForm, leadSent])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const sendLead = async () => {
    if (!leadEmail || leadLoading) return
    setLeadLoading(true)

    const conversation = messages
      .map((m) => `${m.role === 'user' ? 'Visiteur' : 'Assistant'} : ${m.content}`)
      .join('\n\n')

    try {
      await fetch('/api/chat/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: leadName, email: leadEmail, conversation }),
      })
      setLeadSent(true)
      setShowLeadForm(false)
    } catch {
      // fail silently
    } finally {
      setLeadLoading(false)
    }
  }

  const userTurns = messages.filter((m) => m.role === 'user').length

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* ── Chat panel ─────────────────────────────────────────────── */}
      {isOpen && (
        <div
          style={{
            width: 360,
            height: 520,
            background: '#0A192F',
            border: '1px solid #233554',
            borderRadius: 16,
            boxShadow: '0 24px 48px rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            style={{
              background: '#112240',
              borderBottom: '1px solid #233554',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#64FFDA',
                  display: 'inline-block',
                }}
              />
              <span style={{ color: '#CCD6F6', fontWeight: 600, fontSize: 14 }}>
                Assistant Nicolas Claverol
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ color: '#8892B0', lineHeight: 1, background: 'none', border: 'none', cursor: 'pointer', fontSize: 16 }}
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <div
                  style={{
                    maxWidth: '80%',
                    borderRadius: 12,
                    padding: '8px 12px',
                    fontSize: 13,
                    lineHeight: 1.5,
                    ...(msg.role === 'user'
                      ? { background: '#64FFDA', color: '#0A192F' }
                      : {
                          background: '#112240',
                          color: '#CCD6F6',
                          border: '1px solid #233554',
                        }),
                  }}
                >
                  {msg.content || (
                    <span style={{ color: '#8892B0', letterSpacing: 2 }}>● ● ●</span>
                  )}
                </div>
              </div>
            ))}

            {/* Lead form */}
            {showLeadForm && !leadSent && (
              <div
                style={{
                  background: '#112240',
                  border: '1px solid rgba(100,255,218,0.25)',
                  borderRadius: 12,
                  padding: 12,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                <p style={{ color: '#64FFDA', fontSize: 12, margin: 0 }}>
                  Laissez vos coordonnées, Nicolas vous recontacte sous 24h :
                </p>
                <input
                  type="text"
                  placeholder="Votre prénom"
                  value={leadName}
                  onChange={(e) => setLeadName(e.target.value)}
                  style={{
                    background: '#0A192F',
                    border: '1px solid #233554',
                    borderRadius: 8,
                    padding: '6px 10px',
                    fontSize: 13,
                    color: '#CCD6F6',
                    outline: 'none',
                    width: '100%',
                    boxSizing: 'border-box',
                  }}
                />
                <input
                  type="email"
                  placeholder="Votre email *"
                  value={leadEmail}
                  onChange={(e) => setLeadEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendLead()}
                  style={{
                    background: '#0A192F',
                    border: '1px solid #233554',
                    borderRadius: 8,
                    padding: '6px 10px',
                    fontSize: 13,
                    color: '#CCD6F6',
                    outline: 'none',
                    width: '100%',
                    boxSizing: 'border-box',
                  }}
                />
                <div style={{ display: 'flex', gap: 8 }}>
                  <button
                    onClick={sendLead}
                    disabled={!leadEmail || leadLoading}
                    style={{
                      flex: 1,
                      background: '#64FFDA',
                      color: '#0A192F',
                      border: 'none',
                      borderRadius: 8,
                      padding: '6px 0',
                      fontSize: 12,
                      fontWeight: 700,
                      cursor: leadEmail && !leadLoading ? 'pointer' : 'not-allowed',
                      opacity: leadEmail && !leadLoading ? 1 : 0.5,
                    }}
                  >
                    {leadLoading ? 'Envoi…' : 'Envoyer'}
                  </button>
                  <button
                    onClick={() => setShowLeadForm(false)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#8892B0',
                      fontSize: 12,
                      cursor: 'pointer',
                      padding: '6px 10px',
                    }}
                  >
                    Plus tard
                  </button>
                </div>
              </div>
            )}

            {leadSent && (
              <div
                style={{
                  background: '#112240',
                  border: '1px solid rgba(100,255,218,0.25)',
                  borderRadius: 12,
                  padding: '10px 12px',
                  color: '#64FFDA',
                  fontSize: 13,
                }}
              >
                ✓ Merci ! Nicolas vous recontactera sous 24h.
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Lead trigger */}
          {!showLeadForm && !leadSent && userTurns >= 2 && (
            <div
              style={{
                borderTop: '1px solid #233554',
                padding: '6px 16px',
              }}
            >
              <button
                onClick={() => setShowLeadForm(true)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#64FFDA',
                  fontSize: 12,
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                + Être recontacté par Nicolas
              </button>
            </div>
          )}

          {/* Input */}
          <div
            style={{
              borderTop: '1px solid #233554',
              background: '#0A192F',
              padding: '10px 12px',
              display: 'flex',
              gap: 8,
              alignItems: 'center',
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Votre question…"
              disabled={isLoading}
              style={{
                flex: 1,
                background: '#112240',
                border: '1px solid #233554',
                borderRadius: 10,
                padding: '8px 12px',
                fontSize: 13,
                color: '#CCD6F6',
                outline: 'none',
              }}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: '#64FFDA',
                border: 'none',
                cursor: input.trim() && !isLoading ? 'pointer' : 'not-allowed',
                opacity: input.trim() && !isLoading ? 1 : 0.4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z"
                  stroke="#0A192F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* ── Floating button ────────────────────────────────────────── */}
      <style>{PULSE_STYLES}</style>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {/* Tooltip bubble */}
        {showBubble && !isOpen && (
          <div
            style={{
              position: 'absolute',
              right: 68,
              bottom: 8,
              background: '#1C3A5E',
              color: '#fff',
              borderRadius: 12,
              padding: '8px 14px',
              fontSize: 13,
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 16px rgba(0,0,0,0.35)',
              animation: 'bubbleFadeIn 0.3s ease forwards',
            }}
          >
            Une question ? 👋
          </div>
        )}

        {/* Pulse rings */}
        {!isOpen && (
          <>
            <div
              style={{
                position: 'absolute',
                inset: -8,
                borderRadius: '50%',
                border: '2px solid #64FFDA',
                animation: 'chatPulse 2.5s ease-out infinite',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: -8,
                borderRadius: '50%',
                border: '2px solid #64FFDA',
                animation: 'chatPulse 2.5s ease-out infinite 1.25s',
                pointerEvents: 'none',
              }}
            />
          </>
        )}

        <button
          onClick={() => setIsOpen((o) => !o)}
          aria-label={isOpen ? 'Fermer le chat' : 'Ouvrir le chat'}
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: '#112240',
            border: '2px solid #64FFDA',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 24px rgba(100,255,218,0.2)',
            transition: 'transform 0.15s ease',
            position: 'relative',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          {isOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="#64FFDA" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
                stroke="#64FFDA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}
