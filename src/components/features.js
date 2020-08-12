import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FiCheck } from "react-icons/fi"
import ReactMarkdown from "react-markdown"

const Features = () => {
  const data = useStaticQuery(graphql`
    {
      strapiKonzept {
        section_title
        feature_img {
          childImageSharp {
            fluid(maxWidth: 400, quality: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        features_list_item {
          id
          title
          description
        }
      }
    }
  `)

  const list = data.strapiKonzept.features_list_item.map(feature => {
    return (
      <div
        className="d-flex custom-icon-wrap custom-icon-light mb-3"
        key={feature.id}
      >
        <div className="mr-3">
          <span className="custom-icon-inner">
            <FiCheck />
          </span>
        </div>
        <div>
          <span className="m-0 list-item-text">
            <p>{feature.title}</p>
            {feature.description ? (
              <ReactMarkdown source={feature.description} />
            ) : (
              ""
            )}
          </span>
        </div>
      </div>
    )
  })
  return (
    <section id="features-section" className="features-section site-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-lg-7 text-center">
            <h2 className="section-title">
              {data.strapiKonzept.section_title}
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 ml-auto align-self-start">
            <div className="p-4 rounded bg-white features-list-box">{list}</div>
          </div>
          <div className="col-lg-5 align-self-end mt-5 mt-lg-0">
            <Img
              fluid={data.strapiKonzept.feature_img.childImageSharp.fluid}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
