import type { HttpContext } from '@adonisjs/core/http'
import PendaftarProgram from '#models/pendaftar_program'
import User from '#models/user'
import Hash from '@adonisjs/core/services/hash'

export default class AdminController {
  async login({view}: HttpContext) {
    return view.render('auth/login')
  }

  async login_admin({request, response, session, auth}: HttpContext) {
    const { fullName, password } = request.only(['fullName', 'password'])

    try {
      const user = await User.findBy('fullName', fullName)
      
      if (!user) {
        session.flash('error', 'Username tidak ditemukan')
        return response.redirect('back')
      }

      const isPasswordValid = await Hash.verify(user.password, password)
      
      if (!isPasswordValid) {
        session.flash('error', 'Password salah')
        return response.redirect('back')
      }

      await auth.use('web').login(user)

      return response.redirect().toRoute('admin')
      
    } catch (error) {
      console.error(error)
      session.flash('error', 'Terjadi kesalahan saat login')
      return response.redirect('back')
    }
  }

  async logout({auth, response, request}: HttpContext) {
    await auth.use('web').logout()

    if (request.header('referer', '')?.includes('/admin')) {
      return response.redirect().toRoute('admin.login')
    }

    return response.redirect().back()
  }

  async index({view}: HttpContext) {
    const data = await PendaftarProgram.all()
    return view.render('admin/index', {data})
  }

  public async destroy({params, response}: HttpContext) {
    const pendaftarProgamID = params.id
    const user = await PendaftarProgram.findOrFail(pendaftarProgamID)
    await user.delete()
    return response.redirect().back()
  }
}