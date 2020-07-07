import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledSpan from "../components/StyledSpan"
import Services from "../components/Services/Services"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

export default ({ data }) => (
  <Layout home={true}>
    <SEO title="Home" description="This is a description" />
    <Hero
      className="home"
      home={true}
      img={data.defaultBcg.childImageSharp.fluid}
    >
      <Container className="text-center home__container" fluid>
        <Row>
          <Col>
            <h1>
              Give them the gift of <StyledSpan hero={true}>music</StyledSpan>
            </h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center pt-4">
          <Col className="text-center" md="6">
            <h3>
              <StyledSpan hero={true}>In-home</StyledSpan> and{" "}
              <StyledSpan hero={true}>remote</StyledSpan> music lessons in
              Austin, TX and Portland, OR
            </h3>
          </Col>
        </Row>
        <Row className="justify-content-md-center pt-4">
          <Col className="text-center" md="6">
            <Button variant="primary" size="md" type="button">
              Book your first free lesson
            </Button>
          </Col>
        </Row>
      </Container>
    </Hero>
    <Services services={data.services} />
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
    services: allContentfulService {
      nodes {
        id
        image {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        title
        body
      }
    }
  }
`
