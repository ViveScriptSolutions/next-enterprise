import { db } from "@/lib/db"

export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const passWordRestToken = await db.passwordRestToken.findFirst({ where: { email } })

    return passWordRestToken
  } catch (error) {
    return null
  }
}

export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const passWordRestToken = await db.passwordRestToken.findUnique({ where: { token } })

    return passWordRestToken
  } catch (error) {
    return null
  }
}
