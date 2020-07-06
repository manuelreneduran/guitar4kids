import React from "react"
import Card from "./Card"

const Cards = ({ service }) => {
  console.log(service)
  return (
    <div>
      {service.nodes.map(ele => (
        <Card key={ele.id} data={ele} />
      ))}
    </div>
  )
}

export default Cards
