import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import ReactMarkdown from "react-markdown"

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      strapiHero {
        titel
        intro_text
        bg_img {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 80) {
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
      <div className="container-fluid hero-container">
        <div className="container text-center">
          <div className="row">
            <div className="col col-lg-8 ml-auto mr-auto">
              <ReactMarkdown
                className="lead pb-5"
                source={data.strapiHero.intro_text}
              />

              <a href="#" className="btn cta">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Hero
