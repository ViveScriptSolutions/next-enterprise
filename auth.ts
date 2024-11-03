import { PrismaAdapter } from "@auth/prisma-adapter"
import { UserRole } from "@prisma/client"
import NextAuth from "next-auth"
import { getUserById } from "@/lib/data/user"
import authConfig from "./auth.config"
import { db } from "./lib/db"

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  adapter: PrismaAdapter(db),
  pages: {
    signIn: "/auth/sign-in",
    error: "/auth/error",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({ where: { id: user.id }, data: { emailVerified: new Date() } })
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") return true

      const existingUser = await getUserById(user.id) // TODO: Fix this type error

      if (!existingUser?.emailVerified) return false

      return true
    },

    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }

      if (token.role && session.user) {
        // TODO: This approach need to change once resolve
        session.user.role = token.role as UserRole
      }

      return session
    },

    async jwt({ token }) {
      if (!token.sub) return token

      const existingUser = await getUserById(token.sub)

      if (!existingUser) return token

      token.role = existingUser.role

      return token
    },
  },
  session: {
    strategy: "jwt",
  },
  ...authConfig,
})

// export const authOptions: NextAuthConfig = {
//     adapter: PrismaAdapter(prisma as unknown as PrismaClient),
//     providers: [GitHub],
//     callbacks: {
//       // async signIn({ user, account, profile, email, credentials }) {
//       //   const isAllowedToSignIn = true
//       //   if (isAllowedToSignIn) {
//       //     return true
//       //   } else {
//       //     // Return false to display a default error message
//       //     return false
//       //     // Or you can return a URL to redirect to:
//       //     // return '/unauthorized'
//       //   }
//       // },
//       async redirect({ url, baseUrl }) {
//         return `${baseUrl}/dashboard/`
//       },
//       async session({ session, user, token }) {
//         session.user = user
//         return session
//       },
//       // async jwt({ token, user, account, profile, isNewUser }) {
//       //   return token
//       // },
//     },
//     events: {
//       async signIn({ user }) {
//         console.log({ user }, "Signed in")
//       },
//     },
//     secret: process.env.AUTH_SECRET,

//     pages: {
//       signIn: "/sign-in",
//       // verifyRequest: "auth/verify-request",
//     },
//   }

//   export const { handlers, signIn, signOut, auth } = NextAuth(authOptions)
