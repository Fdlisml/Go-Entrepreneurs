import type { HttpContext } from '@adonisjs/core/http'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export default class OpenAiController {
  public async chatbot({ request, response }: HttpContext) {
    // Ambil pesan dari request body
    const userMessage = request.input('message')

    try {
      // Membuat permintaan ke OpenAI
      const completion = await openai.chat.completions.create({
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: userMessage }
        ],
        model: 'gpt-3.5-turbo',
      })

      // Mengembalikan hasil dari OpenAI
      return response.json(completion.choices[0])
    } catch (error) {
      console.error('Error:', error)
      return response.status(500).send('Error fetching data from OpenAI')
    }
  }

  // async create({ }: HttpContext) { }

  // async store({ request }: HttpContext) { }

  // async show({ params }: HttpContext) { }

  // async edit({ params }: HttpContext) { }

  // async update({ params, request }: HttpContext) { }

  // async destroy({ params }: HttpContext) { }
}