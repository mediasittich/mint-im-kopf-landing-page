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
            fluid {
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
      <div fluid className="container-fluid hero-container">
        <div className="container text-center">
          <div className="row">
            <div className="col col-lg-8 ml-auto mr-auto">
              <p className="lead pb-5">
                <ReactMarkdown source={data.strapiHero.intro_text} />
              </p>
              <a href="#" variant="primary" className="btn btn-primary btn-lg">
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
