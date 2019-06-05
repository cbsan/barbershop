import express from 'express'

import UserController from './controllers/UserController'

const routes = express.Router()

routes.get('/signup', UserController.create)

export default routes
