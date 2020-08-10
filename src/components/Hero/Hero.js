import React from "react"
import BcgImage from "gatsby-background-image"
const Hero = ({ img, home, children }) => {
  return (
    <div className={home ? null : "hero__wrapper"}>
      <BcgImage
        className={home ? "hero hero__home" : "hero hero__page"}
        fluid={img}
        home={home}
      >
        {children}
      </BcgImage>
    </div>
  )
}

export default Hero
