import React from "react"
import Cards from "./Cards"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Title from "../Title"

const Services = ({ services }) => {
  return (
    <Container fluid className="mt-4 services">
      <Row>
        <Col>
          <Title title="OUR SERVICES" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Cards services={services} />
        </Col>
      </Row>
    </Container>
  )
}

export default Services
