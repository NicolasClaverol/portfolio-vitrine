import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { name, email, conversation } = await req.json()

  if (!email) {
    return NextResponse.json({ error: 'Email requis.' }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: 'noreply@nicolasclaverol.com',
    to: 'contact@nicolasclaverol.com',
    subject: `Nouveau lead chatbot — ${name || 'Visiteur'}`,
    text: [
      `Prénom : ${name || 'Non renseigné'}`,
      `Email : ${email}`,
      '',
      'Résumé de la conversation :',
      conversation,
    ].join('\n'),
  })

  if (error) {
    return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
