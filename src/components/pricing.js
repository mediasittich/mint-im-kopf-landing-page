import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

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
        <p>
          <ReactMarkdown source={price.description} />
        </p>
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
