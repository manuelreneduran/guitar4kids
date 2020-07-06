import React from "react"
import StyledSpan from "./StyledSpan"

const Title = ({ title }) => {
  const words = title.split(" ")
  const lastWord = words.splice(-1, 1)
  return (
    <div className="container">
      <h2>
        {words.join(" ")} <StyledSpan home={false}>{lastWord}</StyledSpan>{" "}
      </h2>
      <div className="line"></div>
    </div>
  )
}

export default Title
