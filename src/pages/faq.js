import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero/Hero"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default ({ data }) => {
  return (
    <Layout home={false}>
      <SEO title="faq" description="faq page" />
      <Hero
        className="faq"
        home={false}
        img={data.defaultBcg.childImageSharp.fluid}
      >
        <Container className="text-center faq__hero" fluid>
          <Row>
            <Col>
              <h1>FAQ</h1>
            </Col>
          </Row>
        </Container>
      </Hero>
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
