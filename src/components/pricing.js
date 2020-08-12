import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

const Pricing = () => {
  const data = useStaticQuery(graphql`
    {
      strapiPricing {
        section_title
        pricing_list_item {
          id
          price
          unit
          category
          description_item {
            id
            title
          }
        }
      }
    }
  `)

  const pricesList = data.strapiPricing.pricing_list_item.map(item => {
    // let priceStr = price.price.split(" ", 1)
    // console.log(price)
    return (
      <div className="col-xs-12 col-md-6 col-lg-4 card-container" key={item.id}>
        <div className="card mb-5 text-center">
          <div className="card-header">
            <h3 className="display-2">
              <span className="currency">€</span>
              <span className="price">{item.price}</span>

              <p className="unit">pro {item.unit}</p>
            </h3>
          </div>
          <div className="card-body pt-0">
            <h4 className="card-title">{item.category}</h4>
            <ul className="list-group">
              {item.description_item.map(bullet => {
                return (
                  <li key={bullet.id} className="list-group-item">
                    {bullet.title}
                  </li>
                )
              })}
            </ul>
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
            <h2 className="section-title">
              {data.strapiPricing.section_title}
            </h2>
          </div>
        </div>

        <div className="row prices-card-wrap">{pricesList}</div>
      </div>
    </section>
  )
}

export default Pricing
