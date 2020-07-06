import React from "react"
import BcgImage from "gatsby-background-image"

const Card = ({ data: { image, body, title } }) => {
  return (
    <>
      <BcgImage fixed={image.fixed} className="card">
        <span>{title}</span>
      </BcgImage>
    </>
  )
}

export default Card
