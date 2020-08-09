import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      strapiHero {
        Titel
        Intro_Text
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
          <p className="lead pb-5">{data.strapiHero.Intro_Text}</p>
          <a href="#" variant="primary" className="btn btn-primary btn-lg">
            Learn more
          </a>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Hero
