import React from "react";
import Nav from "./nav";
import Footer from "./footer";

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="bg-beige">
      <Nav />
      {children}
      <div className="h-10"></div>
      <Footer />
    </div>
  )
}

export default RootLayout;