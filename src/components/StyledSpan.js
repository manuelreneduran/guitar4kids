import React from "react"

const StyledSpan = ({ children, hero }) => {
  return (
    <span className={hero ? "styled__span" : "styled__span__title"}>
      {children}
    </span>
  )
}

export default StyledSpan
