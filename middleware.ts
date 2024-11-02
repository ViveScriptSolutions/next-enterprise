import NextAuth from "next-auth"
import authConfig from "@/auth.config"
import { apiAuthPrefix, authRoutes, DEFAULT_LOGIN_REDIRECT, publicRoutes } from "@/routes"

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)

  if (isApiAuthRoute) {
    return null
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }

    return null
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/sign-in", nextUrl))
  }

  return null
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
}

// import { NextResponse } from "next/server"
// import type { NextRequest } from "next/server"
// // import { getToken } from "next-auth/jwt"
// // import { getSession } from "next-auth/react"
// import { auth, authOptions } from "@/lib/auth"

// export default auth((req: NextRequest) => {
//   const isLoggedIn = !!req.auth

// if (isLoggedIn) {
//   return NextResponse.next()
// }

// // console.log("Isloggedin? ", isLoggedIn)
// return NextResponse.redirect(new URL("/sign-in", req.url))
// })
