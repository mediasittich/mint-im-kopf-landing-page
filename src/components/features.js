import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FiCheck } from "react-icons/fi"

const Features = () => {
  const imageData = useStaticQuery(graphql`
    {
      featureImg: file(relativePath: { eq: "student-clip-art-18.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="site-section pb-0">
      <div className="container">
        <div
          className="row mb-5 justify-content-center aos-init"
          data-aos="fade-up"
          data-aos-delay
        >
          <div className="col-lg-7 text-center">
            <h2 className="section-title">Why Choose Us</h2>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-4 ml-auto align-self-start aos-init"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="p-4 rounded bg-white why-choose-us-box">
              <div className="d-flex align-items-center custom-icon-wrap custom-icon-light mb-3">
                <div className="mr-3">
                  <span className="custom-icon-inner">
                    <FiCheck />
                  </span>
                </div>
                <div>
                  <span className="m-0">22,931 Yearly Graduates</span>
                </div>
              </div>
              <div className="d-flex align-items-center custom-icon-wrap custom-icon-light mb-3">
                <div className="mr-3">
                  <span className="custom-icon-inner">
                    <FiCheck />
                  </span>
                </div>
                <div>
                  <span className="m-0">150 Universities Worldwide</span>
                </div>
              </div>
              <div className="d-flex align-items-center custom-icon-wrap custom-icon-light mb-3">
                <div className="mr-3">
                  <span className="custom-icon-inner">
                    <FiCheck />
                  </span>
                </div>
                <div>
                  <span className="m-0">Top Professionals in The World</span>
                </div>
              </div>
              <div className="d-flex align-items-center custom-icon-wrap custom-icon-light mb-3">
                <div className="mr-3">
                  <span className="custom-icon-inner">
                    <FiCheck />
                  </span>
                </div>
                <div>
                  <span className="m-0">Expand Your Knowledge</span>
                </div>
              </div>
              <div className="d-flex align-items-center custom-icon-wrap custom-icon-light mb-3">
                <div className="mr-3">
                  <span className="custom-icon-inner">
                    <FiCheck />
                  </span>
                </div>
                <div>
                  <span className="m-0">
                    Best Online Teaching Assistant Courses
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-center custom-icon-wrap custom-icon-light">
                <div className="mr-3">
                  <span className="custom-icon-inner">
                    <FiCheck />
                  </span>
                </div>
                <div>
                  <span className="m-0">Best Teachers</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-7 align-self-end aos-init"
            data-aos="fade-left"
            data-aos-delay={200}
          >
            <Img
              fluid={imageData.featureImg.childImageSharp.fluid}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
