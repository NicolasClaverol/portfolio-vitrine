import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM_PROMPT = `Tu es l'assistant de Nicolas Claverol, développeur web freelance à Montpellier. Tu réponds aux questions des visiteurs sur ses services :
- Site vitrine Essentiel à partir de 900€
- Site Pro + Gestion autonome à partir de 1 200€
- Site Pro + Assistant automatique à partir de 1 300€
- Site e-commerce à partir de 1 800€
- Assistant sur site existant à partir de 800€
- Refonte & maintenance sur devis

Tu es chaleureux, concis et professionnel. Si le visiteur est intéressé, tu collectes son prénom et son email pour que Nicolas le recontacte. Tu ne donnes pas de prix fermes sur des projets complexes — tu invites à demander un devis gratuit en 24h.`

export async function POST(req: Request) {
  const { messages } = await req.json()

  if (!Array.isArray(messages) || messages.length === 0) {
    return new Response(JSON.stringify({ error: 'Messages requis.' }), { status: 400 })
  }

  const stream = await client.messages.stream({
    model: 'claude-sonnet-4-6',
    max_tokens: 512,
    system: SYSTEM_PROMPT,
    messages,
  })

  const readable = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder()
      try {
        for await (const chunk of stream) {
          if (
            chunk.type === 'content_block_delta' &&
            chunk.delta.type === 'text_delta'
          ) {
            const payload = JSON.stringify({ text: chunk.delta.text })
            controller.enqueue(encoder.encode(`data: ${payload}\n\n`))
          }
        }
        controller.enqueue(encoder.encode('data: [DONE]\n\n'))
      } finally {
        controller.close()
      }
    },
  })

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  })
}
