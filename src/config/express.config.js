import express from 'express';
import routes from "../routes/index.js"
const app = express();

app.use('/api/v1', routes)
app.use((req, res, next) => {
  next({
    code: 404,
    message: "Resource not found"
  })
})
app.use((error, req, res, next) => {
  let code = error.code || 500;
  let msg = error.message || "Internal Server Error";
  res.json({
    result: null,
    message: msg,
    meta: null
  })
})

export default app;