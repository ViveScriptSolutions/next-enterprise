"use server"

import { RegisterSchema } from "@/lib/schema"
import * as z from "zod"
import bcrypt from "bcryptjs"
import { db } from "@/lib/db"
import { getUserByEmail } from "@/lib/actions/user.action"

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

  // TODO: Send verification token email

  return { success: "User created successfully!" }
}
