"use server"

import { AuthError } from "next-auth"
import * as z from "zod"
import { signIn } from "@/auth"
import { sendVerificationEmail } from "@/lib/mail"
import { LoginSchema } from "@/lib/schema"
import { generateVerificationToken } from "@/lib/tokens"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { getUserByEmail } from "../data/user"

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(values)

  if (!validateFields.success) {
    return { error: "Invalid fields!" }
  }

  const { email, password } = validateFields.data
  const existingUser = await getUserByEmail(email)

  if (!existingUser || !existingUser.email) {
    return { error: "Email does not exist!" }
  }

  if (existingUser && !existingUser.password) {
    return { error: "Try login using Google or Github!" }
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(existingUser.email)

    await sendVerificationEmail(verificationToken.email, verificationToken.token, "Re-send: Please, verify your email!")

    return { success: "Verification email sent again! Check you email please." }
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" }

        default:
          return { error: "Something went wrong!" }
      }
    }
    throw error
  }
}
