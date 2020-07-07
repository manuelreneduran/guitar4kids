import React from "react"
import BcgImage from "gatsby-background-image"
import Img from "gatsby-image"

const Card = ({ service: { image, body, title } }) => {
  return (
    <>
      <div className="service__card">
        <div className="service__card__top">
          <Img fluid={image.fluid} className="service__card__image" />
        </div>
        <div className="service__card__bottom">
          <h6 className="service__card__title">{title}</h6>
          <span className="service__card__desc">{body}</span>
        </div>
      </div>
    </>
  )
}

export default Card
