import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Cards from "./Cards"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Title from "../Title"

const getServices = graphql`
  {
    service: allContentfulService {
      nodes {
        id
        image {
          fixed(width: 270, height: 240) {
            ...GatsbyContentfulFixed_withWebp
          }
        }
        title
        body
      }
    }
  }
`

const Services = () => {
  const { service } = useStaticQuery(getServices)

  return (
    <Container className="mt-4 services">
      <Row>
        <Col>
          <Title title="Our Services" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Cards service={service} />
        </Col>
      </Row>
    </Container>
  )
}

export default Services
