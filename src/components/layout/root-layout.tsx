import React from "react";
import Nav from "./nav";
import Footer from "./footer";

interface RootLayoutProps {
  children: React.ReactNode
  nav?: boolean
  footer?: boolean
}

const RootLayout = ({ children, nav = true, footer = true}: RootLayoutProps) => {
  return (
    <div className="bg-beige">
      {nav && <Nav />}
      <div className="overflow-hidden">
        {children}
      </div>
      {footer && <Footer />}
    </div>
  )
}

export default RootLayout;