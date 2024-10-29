import { ReactNode } from "react"
import Header from "@/components/Header"

const layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      <Header />
      <main className="remove-scrollbar container mx-auto min-h-screen max-w-7xl">{children}</main>
      <footer className="text-dark-500 bg-gray-100">{/* <CopyRights /> */}</footer>
    </>
  )
}

export default layout
