// import Footer from "@/components/Footer/Footer";
// import Header from "@/components/Header/Header";
import { ReactNode } from "react"
import Header from "@/components/Header"

const layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  )
}

export default layout
