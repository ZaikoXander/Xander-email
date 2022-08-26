import mailer from "../modules/mailer/index.js"
import displayView from "../../../lib/xander-email.js"

const viewsPath = "./examples/hello-world/modules/mailer/views"

export async function sendEmail(req, res) {
  try {
    await mailer.sendMail({
      from: "Login System Support <login-system-support@gmail.com>",
        to: "Login System Client <login-system-client@gmail.com>",
        subject: "Test",
        html: displayView("body", viewsPath)
    })
  
    return res.status(200).json({ message: "OK" })
  } catch (error) {
    console.error(error)
    res.status(400).json({ error: "Error in sending email" })
  }
}