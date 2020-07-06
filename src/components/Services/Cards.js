import React from "react"
import Card from "./Card"

const Cards = ({ services }) => {
  return (
    <div>
      {services.nodes.map(ele => (
        <Card key={ele.id} service={ele} />
      ))}
    </div>
  )
}

export default Cards
