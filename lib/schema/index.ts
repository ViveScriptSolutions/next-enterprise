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

export const ResetSchema = z.object({
  email: z.string().email(),
})

export const NewPasswordSchema = z.object({
  password: z.string().min(6),
})

export const SendEmailSchema = z.object({
  to: z.string().min(5),
  subject: z.string(),
  html: z.string().optional(),
})
