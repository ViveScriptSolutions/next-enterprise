"use server"

import bcrypt from "bcryptjs"
import * as z from "zod"
import { getUserByEmail } from "@/lib/data/user"
import { db } from "@/lib/db"
import { RegisterSchema } from "@/lib/schema"
import { generateVerificationToken } from "../tokens"
import { sendVerificationEmail } from "../mail"

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values)

  if (!validateFields.success) {
    return { error: "Invalid fields!" }
  }

  const { name, email, password } = validateFields.data
  const hassedPassword = await bcrypt.hash(password, 10)

  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    return { error: "Email already in use!" }
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hassedPassword,
    },
  })

  // Send verification token email
  const verificationToken = await generateVerificationToken(email)

  await sendVerificationEmail(verificationToken.email, verificationToken.token)

  return { success: "Please check your email and verify!" }
}
