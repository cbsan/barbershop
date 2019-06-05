import express from 'express'

import UserController from './controllers/UserController'

const routes = express.Router()

routes.get('/signup', UserController.create)
routes.post('/signup', UserController.store)

export default routes
