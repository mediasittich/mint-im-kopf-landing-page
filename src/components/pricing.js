import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Pricing = () => {
  const data = useStaticQuery(graphql`
    {
      strapiPrices {
        title
        Price_tag {
          id
          price
          unit
          description
        }
      }
    }
  `)

  const pricesList = data.strapiPrices.Price_tag.map(price => {
    console.log(price)
    return (
      <div key={price.id}>
        <p>{price.price}</p>
        <p>{price.unit}</p>
        <p>{price.description}</p>
      </div>
    )
  })
  return (
    <div>
      <h2>{data.strapiPrices.title}</h2>
      <div>{pricesList}</div>
    </div>
  )
}

export default Pricing
