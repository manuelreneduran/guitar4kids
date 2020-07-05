import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledSpan from "../components/StyledSpan"
import Services from "../sections/home/Services"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default ({ data }) => (
  <Layout home={true}>
    <SEO title="Home" description="This is a description" />
    <Hero home={true} img={data.defaultBcg.childImageSharp.fluid}>
      <Container className="text-center" fluid>
        <Row>
          <Col>
            <h1>
              Give them the gift of <StyledSpan>music</StyledSpan>
            </h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center pt-4">
          <Col className="text-center" md="6">
            <h2>
              <StyledSpan>In-home</StyledSpan> and{" "}
              <StyledSpan>remote</StyledSpan> music lessons in Austin, TX and
              Portland, OR
            </h2>
          </Col>
        </Row>
      </Container>
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
