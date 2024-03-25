import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import RootLayout from "../components/layout/root-layout"
import Hero from "../components/home/sections/hero"
import Services from "../components/home/sections/services"
import Team from "../components/home/sections/team"
import Work from "../components/home/sections/work"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <RootLayout>
      <main>
        <Hero />
        <Services />
        <Work />
        <Team />
      </main>
    </RootLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>einfacheinfach</title>
