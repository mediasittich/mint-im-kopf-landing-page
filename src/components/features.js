import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FiCheck } from "react-icons/fi"
import ReactMarkdown from "react-markdown"
import Fade from "react-reveal/Fade"

const Features = () => {
  const data = useStaticQuery(graphql`
    {
      strapiKonzept {
        section_title
        feature_img {
          childImageSharp {
            fluid(maxWidth: 900, quality: 70) {
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
      <li className="d-flex custom-icon-wrap mb-4" key={feature.id}>
        <span className="custom-icon-inner">
          <FiCheck />
        </span>
        <div className="m-0 ml-4 list-item-text">
          <div>
            <p>{feature.title}</p>
            {feature.description ? (
              <ReactMarkdown source={feature.description} />
            ) : (
              ""
            )}
          </div>
        </div>
      </li>
    )
  })
  return (
    <section id="features-section" className="features-section site-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-lg-7 text-center">
            <Fade bottom>
              <h2 className="section-title">
                {data.strapiKonzept.section_title}
              </h2>
            </Fade>
          </div>
        </div>
        <div className="row">
          <Fade bottom>
            <div className="col-lg-6 ml-auto align-self-start">
              <ul className="p-4 rounded bg-white features-list-box">{list}</ul>
            </div>
          </Fade>
          <Fade right>
            <div className="col-lg-5 align-self-end mt-5 mt-lg-0">
              <Img
                fluid={data.strapiKonzept.feature_img.childImageSharp.fluid}
                className="img-fluid feature-img"
              />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default Features
