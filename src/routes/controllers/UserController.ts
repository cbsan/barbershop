class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }
}

export default new UserController()
