import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FiCheck } from "react-icons/fi"
import ReactMarkdown from "react-markdown"

const Features = () => {
  const data = useStaticQuery(graphql`
    {
      strapiKonzept {
        title
        features {
          item {
            id
            content
          }
        }
        feature_img {
          childImageSharp {
            fluid(maxWidth: 600, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const list = data.strapiKonzept.features.item.map(feature => {
    return (
      <div
        className="d-flex align-items-center custom-icon-wrap custom-icon-light mb-3"
        key={feature.id}
      >
        <div className="mr-3">
          <span className="custom-icon-inner">
            <FiCheck />
          </span>
        </div>
        <div>
          <span className="m-0">
            <ReactMarkdown source={feature.content} />
          </span>
        </div>
      </div>
    )
  })
  return (
    <div className="site-section">
      <div className="container">
        <div className="row mb-5 justify-content-center aos-init">
          <div className="col-lg-7 text-center">
            <h2 className="section-title">{data.strapiKonzept.title}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 ml-auto align-self-start aos-init">
            <div className="p-4 rounded bg-white why-choose-us-box">{list}</div>
          </div>
          <div className="col-lg-7 align-self-end aos-init">
            <Img
              fluid={data.strapiKonzept.feature_img.childImageSharp.fluid}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
