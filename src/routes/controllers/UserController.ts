// eslint-disable-next-line @typescript-eslint/no-var-requires
const User = require('../../app/models/User')

class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }

  async store (req, res) {
    const { body } = req

    await User.create(body)

    return res.redirect('/')
  }
}

export default new UserController()
