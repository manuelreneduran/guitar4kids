import React from "react"
import BcgImage from "gatsby-background-image"

const Hero = ({ img, home, children }) => {
  return (
    <BcgImage
      className={home ? "hero hero__home" : "hero"}
      fluid={img}
      home={home}
    >
      {children}
    </BcgImage>
  )
}

export default Hero
