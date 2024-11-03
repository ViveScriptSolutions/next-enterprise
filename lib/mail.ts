import * as z from "zod"
import { SendEmailSchema } from "@/lib/schema"

const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 465, // Use 587 if you prefer TLS
  secure: true, // true for 465, false for other ports
  auth: {
    user: "info@vivescriptsolutions.com", // Your Private Email address
    pass: "4GSSSVvgq,q5g,P", // TODO: Need to move this in env //Your Private Email password
  },
})

export const sendEmail = async ({ to, subject, html }: z.infer<typeof SendEmailSchema>) => {
  try {
    const info = await transporter.sendMail({
      from: '"ViveScript Solutions" <info@vivescriptsolutions.com>',
      to,
      subject,
      html,
    })

    console.log("Message sent:", info.messageId)
  } catch (error) {
    console.error("Error sending email:", error)
  }
}

export const sendVerificationEmail = async (email: string, token: string, subject?: string) => {
  const confirmationLink = `http://localhost:3000/auth/email-verification?token=${token}`

  await sendEmail({
    to: email,
    subject: subject || "Please, verify your email!",
    html: `<div><p>Please, verify your email. <a href="${confirmationLink}">Click here</a> or follow this verification url: ${confirmationLink}</p></div>`,
  })
}
