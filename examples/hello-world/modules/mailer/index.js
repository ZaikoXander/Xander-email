import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()

const transport = nodemailer.createTransport({
  host: process.env.HOST,
  port: Number(process.env.PORT),
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS
  }
})

export default transport
