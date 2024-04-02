import type { HeadFC, PageProps } from "gatsby"
import * as React from "react"
import Hero from "../components/home/sections/hero"
import HireCTA from "../components/home/sections/hire-cta"
import Services from "../components/home/sections/services"
import Team from "../components/home/sections/team"
import Work from "../components/home/sections/work"
import RootLayout from "../components/layout/root-layout"
import { NavContext } from "../context/NavContext"

const IndexPage: React.FC<PageProps> = () => {
  const [spread, setSpread] = React.useState<boolean>(true);
  const [scrollSpreadLocked, setScrollSpreadLocked] = React.useState<boolean>(false);

  const toggleSpread = (shouldLockScrollSpread: boolean) => {
    setSpread(!spread);
    if (shouldLockScrollSpread) {
      setScrollSpreadLocked(true);
    }
  }

  const setStateSpread = (value: boolean) => {
    setSpread(value);
  }

  return (
    <NavContext.Provider value={{ spread: spread, scrollSpreadLocked: scrollSpreadLocked, setSpread: setStateSpread, toggleSpread: toggleSpread }}>
      <RootLayout>
        <main>
          <Hero />
          <Services />
          <Work />
          <Team />
          <HireCTA/>
        </main>
      </RootLayout>
    </NavContext.Provider>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>einfacheinfach</title>
