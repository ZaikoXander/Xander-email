import express from "express"
import dotenv from "dotenv"

import routes from "./routes/index.js"

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

routes(app)

app.listen(3333, () => console.log("HTTP server running on port 3333"))
