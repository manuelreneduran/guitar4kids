import React from "react"

const Testimonial = ({ data: { body, name } }) => {
  return (
    <div className="testimonial">
      <div className="testimonial__body">{body}</div>
      <div className="testimonial__name">--{name}</div>
    </div>
  )
}

export default Testimonial
