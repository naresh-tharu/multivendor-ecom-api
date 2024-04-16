class AuthController {
  registerUser = (req, res, next) => {
    try {
      let body = req.body
      console.log(body)

    } catch (exception) {
      console.log(exception.errors)
      next(exception)
    }
  }
  activateUser = (req, res, next) => {
    let token = req.params.token;
    let query = req.query //object
  }
}
const authCtrl = new AuthController();
export default authCtrl;