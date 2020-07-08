import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Testimonial from "./Testimonial"
import Title from "../Title"

const Testimonials = () => {
  const data = [
    {
      body:
        "Theo has been a wonderful guitar teacher for our 11 year old daughter. His demeanor is calm, kind and patient. His creative approach has been inspiring for our child and she is thoroughly enjoying the lessons! He always takes the time to ask her how her week has been in general - and also asks her about some of the songs/music she might like to learn to play. Thanks to Theo, she is starting to feel confident and motivated on the guitar! I’d highly recommend him to others.",
      name: "Kathryn W.",
      id: 1,
    },
    {
      body:
        "Theo has been a wonderful guitar teacher for our 11 year old daughter. His demeanor is calm, kind and patient. His creative approach has been inspiring for our child and she is thoroughly enjoying the lessons! He always",
      name: "Kathryn W.",
      id: 2,
    },
    {
      body:
        "Theo has been a wonderful guitar teacher for our 11 year old daughter. His demeanor is calm, kind and patient.",
      name: "Kathryn W.",
      id: 3,
    },
  ]
  return (
    <Container fluid className="testimonials">
      <Row>
        <Col>
          <Title title="Our Testimonials" />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        {data.map(ele => (
          <Col sm={12} md={6} lg={4} xl={5}>
            <Testimonial key={ele.id} data={ele} />
          </Col>
        ))}
      </Row>
      <Row className="d-flex justify-content-center">
        <Col xl={3}>
          <Button variant="primary" size="md" type="button" className="my-4">
            Book your first free lesson
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Testimonials
