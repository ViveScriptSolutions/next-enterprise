import bcrypt from "bcryptjs"
import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import { getUserByEmail } from "./lib/data/user"
import { LoginSchema } from "./lib/schema"

// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    Google,
    GitHub,
    Credentials({
      async authorize(credentials) {
        const validateFields = LoginSchema.safeParse(credentials)

        if (validateFields.success) {
          const { email, password } = validateFields.data

          const user = await getUserByEmail(email)

          if (!user || !user.email || !user.password) return null

          const passwordMatched = await bcrypt.compare(password, user.password)

          if (passwordMatched) return user
        }

        return null
      },
    }),
  ],
} satisfies NextAuthConfig
