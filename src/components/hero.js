import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import ReactMarkdown from "react-markdown"

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      strapiHero {
        section_title
        description
        cta {
          id
          title
          ref
        }
        bg_img {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      id="hero-bg-img"
      fluid={data.strapiHero.bg_img.childImageSharp.fluid}
      fadeIn
    >
      <div id="hero-section" className="container-fluid hero-container">
        <div className="container text-center">
          <div className="row">
            <div className="col col-lg-8 ml-auto mr-auto">
              <ReactMarkdown
                className="lead pb-5"
                source={data.strapiHero.description}
              />
              {data.strapiHero.cta.map(btn => {
                return (
                  <a href={`${btn.ref}`} className="btn cta">
                    {btn.title}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Hero
