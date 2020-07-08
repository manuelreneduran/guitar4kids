import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Testimonial from "./Testimonial"
import Title from "../Title"

const Testimonials = ({ testimonials }) => {
  return (
    <div style={{ width: "100%" }}>
      <Container fluid className="testimonials">
        <Row>
          <Col>
            <Title title="Our Testimonials" />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          {testimonials.nodes.map(ele => (
            <Col className="p-0" sm={12} md={6} lg={4} xl={5}>
              <Testimonial key={ele.id} data={ele} />
            </Col>
          ))}
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Button variant="primary" type="button" className="my-4">
              Book your first free lesson
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Testimonials
