import React from "react";
import Nav from "./nav";
import Footer from "./footer";

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}

export default RootLayout;