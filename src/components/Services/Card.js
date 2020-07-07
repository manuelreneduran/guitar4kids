import React from "react"
import BcgImage from "gatsby-background-image"
import Img from "gatsby-image"

const Card = ({ service: { image, body, title } }) => {
  return (
    <>
      <div className="service__card">
        <BcgImage fluid={image.fluid} className="service__card__image">
          <div className="service__card__inner">
            <span className="service__card__body">{body}</span>
            <span className="service__card__title">{title} </span>
          </div>
        </BcgImage>
      </div>
    </>
  )
}

export default Card
