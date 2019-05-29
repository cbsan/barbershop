import express from 'express'

const routes = express.Router()

routes.get('/', (req, res) => res.render('auth/signup'))

export default routes
