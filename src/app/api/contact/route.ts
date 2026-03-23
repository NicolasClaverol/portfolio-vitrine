import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: 'noreply@nicolasclaverol.com',
    to: 'contact@nicolasclaverol.com',
    replyTo: email,
    subject: `Nouveau message de ${name}`,
    text: [
      `Nom : ${name}`,
      `Email : ${email}`,
      phone ? `Téléphone : ${phone}` : null,
      `\nMessage :\n${message}`,
    ]
      .filter(Boolean)
      .join('\n'),
  })

  if (error) {
    return NextResponse.json({ error: 'Erreur lors de l\'envoi.' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
