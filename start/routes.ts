import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ inertia }) => {
  return inertia.render('Home')
}).as('home')

Route.group(() => {
  Route.get('register', 'AuthController.showRegister').as('register.show')
  Route.post('register', 'AuthController.register').as('register')

  Route.get('login', 'AuthController.showLogin').as('login.show')
  Route.post('login', 'AuthController.login').as('login')

  Route.get('logout', 'AuthController.logout').as('logout')
}).as('auth')

