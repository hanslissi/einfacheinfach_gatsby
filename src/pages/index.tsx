import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import RootLayout from "../components/layout/root-layout"
import Hero from "../components/home/hero"
import Services from "../components/home/services"
import Team from "../components/home/team"
import Work from "../components/home/work"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <RootLayout>
      <main>
        <Hero />
        <Services />
        <Team />
        <Work />
      </main>
    </RootLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>einfacheinfach</title>
