import * as z from "zod"

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export const RegisterSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
})

// export const EmailVerificationSchema = z.object({
//   email: z.string().email(),
//   token: z.string(),
// })

export const SendEmailSchema = z.object({
  to: z.string().min(5),
  subject: z.string(),
  html: z.string().optional(),
})
