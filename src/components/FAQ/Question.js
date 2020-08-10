import React from "react"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"

const Question = ({ question, answer }) => {
  return (
    <Accordion className="accordion">
      <Card className="accordion__card">
        <Accordion.Toggle
          as={Card.Header}
          className="accordion__card__header"
          eventKey="0"
        >
          <div className="accordion__card__lead__text">Q.</div> {question}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="accordion__body">
            <div className="lead__text">A.</div>
            {answer}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default Question
