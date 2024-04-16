import { z } from 'zod'
const validateRequest = (schema) => {
  return (req, res, next) => {
    try {
      let data = req.body;
      schema.parse(data);
      //success
      next()
    } catch (exception) {
      next(exception)
    }
  }
}
export default validateRequest;