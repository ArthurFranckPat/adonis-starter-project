import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import AuthValidator from '../../Validators/AuthValidator'

export default class AuthController {
  public async showRegister({ view }: HttpContextContract) {
    return view.render('pages/auth/register')
  }
  public async showLogin({ view }: HttpContextContract) {
    return view.render('pages/auth/register')
  }

  public async register({ request, response, auth }: HttpContextContract) {
    const { email, password } = await request.validate(AuthValidator)
    const user = await User.create({ email, password })

    await auth.login(user)
    response.redirect().toRoute('home')
  }
  public async login({ request, response, auth }: HttpContextContract) {
    const { email, password } = await request.validate(AuthValidator)
    await auth.attempt(email, password)
    response.redirect().toRoute('home')
  }
  public async logout({ response, auth }: HttpContextContract) {
    await auth.logout()
    response.redirect().toRoute('auth.login')
  }
}
