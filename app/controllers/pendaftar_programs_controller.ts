import type { HttpContext } from '@adonisjs/core/http'
import PendaftarProgram from '#models/pendaftar_program'

export default class PendaftarProgramsController {
  public async index({ view }: HttpContext) {
    return view.render('pages/home')
  }

  public async store({ request, response }: HttpContext) {
    const data = request.only(['nama', 'email', 'jenis_kelamin', 'umur'])
    await PendaftarProgram.create(data)
    
    const message = `Halo, nama Saya ${data.nama}. Saya ingin mendaftarkan program Go Entrepreneurs.`
    const whatsappUrl = `https://wa.me/6281299880646?text=${encodeURIComponent(message)}`
    return response.redirect(whatsappUrl)
  }
}
