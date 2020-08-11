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
    // let priceStr = price.price.split(" ", 1)
    // console.log(price)
    return (
      <div className="colg-xs-12 col-md-6 col-lg-3" key={price.id}>
        <div className="card mb-5 text-center">
          <div className="card-header">
            <h3 className="display-2">
              <span className="currency">€</span>
              <span className="price">{price.price}</span>
              <span className="unit">{price.unit}</span>
            </h3>
          </div>
          <div className="card-body pt-0">
            <h4 className="card-title">bis 10. Klasse</h4>
            <ul className="list-group">
              <li className="list-group-item">inkl. Anfahrt</li>
              <li className="list-group-item">inkl. Anfahrt</li>
            </ul>

            {/* <ReactMarkdown source={price.description} /> */}
          </div>
        </div>
      </div>
    )
  })
  return (
    <section className="site-section pricing-section" id="pricing-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="colg-lg-7 text-center">
            <h2 className="section-title">{data.strapiPrices.title}</h2>
          </div>
        </div>

        <div className="row">{pricesList}</div>
        {/* <div className="card-deck">{pricesList}</div> */}
      </div>
    </section>
  )
}

export default Pricing
