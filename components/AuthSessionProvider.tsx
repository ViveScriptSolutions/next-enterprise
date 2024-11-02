"use client"

import { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"

interface SessionProps extends React.PropsWithChildren {
  session: Session | null
}

const AuthSessionProvider = ({ children, session }: SessionProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>
}

export default AuthSessionProvider
