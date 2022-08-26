import { Router } from "express"
import { sendEmail } from "../controllers/index.js"

const routes = Router()

routes.get("/", sendEmail)

export default (app) => app.use(routes)
