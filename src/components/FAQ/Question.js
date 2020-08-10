import React from "react"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"

const Question = ({ question, answer }) => {
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          {question}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{answer}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default Question
