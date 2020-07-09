import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero/Hero"

export default ({ data }) => {
  return (
    <Layout home={false}>
      <SEO title="faq" description="faq page">
        test
        <Hero home={false} img={data.defaultBcg.childImageSharp.fluid}>
          <h1>FAQ</h1>
        </Hero>
      </SEO>
    </Layout>
  )
}

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
