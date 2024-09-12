/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import AdminController from '#controllers/admin_controller'
import PendaftarProgramsController from '#controllers/pendaftar_programs_controller'
import { middleware } from './kernel.js'
import ChatBotsController from '#controllers/chat_bots_controller'

router.on('/').renderInertia('home', { version: 6 })

router.post('/store', [PendaftarProgramsController, 'store']).as('PendaftarProgramController.store')

router.get('/login', [AdminController, 'login']).as('admin.login')
router.post('/login', [AdminController, 'login_admin']).as('login')
router.post('/logout', [AdminController, 'logout']).as('logout').use(middleware.auth())
router.get('/admin', [AdminController, 'index']).as('admin').use(middleware.auth())
router.get('/destroy/:id', [AdminController, 'destroy']).as('destroy')

router.post('/chatbot', [ChatBotsController, 'chatbot']).as('chatbot')