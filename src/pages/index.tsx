import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import RootLayout from "../components/layout/root-layout"
import Hero from "../components/home/sections/hero"
import Services from "../components/home/sections/services"
import Team from "../components/home/sections/team"
import Work from "../components/home/sections/work"
import { NavContext } from "../context/NavContext"


const IndexPage: React.FC<PageProps> = () => {
  const [spread, setSpread] = React.useState<boolean>(true);


  const toggleSpread = () => {
    setSpread(!spread);
  }

  const setContextSpread = (value: boolean) => {
    setSpread(value);
  }

  return (
    <NavContext.Provider value={{ spread: spread, setSpread: setContextSpread, toggleSpread: toggleSpread }}>
      <RootLayout>
        <main>
          <Hero />
          <Services />
          <Work />
          <Team />
        </main>
      </RootLayout>
    </NavContext.Provider>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>einfacheinfach</title>
