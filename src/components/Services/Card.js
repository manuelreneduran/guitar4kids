import React from "react"
import BcgImage from "gatsby-background-image"
import Img from "gatsby-image"

const Card = ({ service: { image, body, title } }) => {
  return (
    <>
      <div className="service__card">
        <div className="service__card__inner">
          <Img fixed={image.fixed} className="service__card__image" />
        </div>
        <div className="service__card__title">
          <span>{title}</span>
        </div>
        <div className="service__card__body">
          <span>{body}</span>
        </div>
      </div>
    </>
  )
}

export default Card
