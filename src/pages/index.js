import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Services from "../sections/home/Services"

export default ({ data }) => (
  <Layout home={true}>
    <SEO title="Home" description="This is a description" />
    <Hero home={true} img={data.defaultBcg.childImageSharp.fluid}>
      <h1>Title</h1>
    </Hero>
    <Services />
  </Layout>
)

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "pages/landing/hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
