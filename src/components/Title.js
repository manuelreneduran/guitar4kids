import React from "react"
import StyledSpan from "./StyledSpan"

const Title = ({ title }) => {
  const words = title.split(" ")
  const lastWord = words.splice(-1, 1)
  return (
    <div>
      <h2 className="d-flex justify-content-center">
        {words.join(" ")} <StyledSpan home={false}>{lastWord}</StyledSpan>{" "}
      </h2>
    </div>
  )
}

export default Title
