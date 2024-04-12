import http from 'http';
import { } from "dotenv/config";
import app from "./src/config/express.config.js"


const server = http.createServer(app)
const port = process.env.PORT || 9005;

server.listen(port, 'localhost', (err) => {
  if (!err) {
    console.log(`Server is running to the port: ${port}`)
  }
})