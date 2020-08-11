import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import ReactMarkdown from "react-markdown"

const About = () => {
  const data = useStaticQuery(graphql`
    {
      strapiAbout {
        section_title
        profile_img {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        description
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
      id="about-bg-img"
      // className="about-bg-image overlay bg-dark text-white"
      fluid={data.strapiAbout.bg_img.childImageSharp.fluid}
      fadeIn
    >
      <section className="about-section site-section ">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-8 text-center quote">
              <h3 className="mb-4">{data.strapiAbout.section_title}</h3>
              <Img
                fluid={data.strapiAbout.profile_img.childImageSharp.fluid}
                className="img-fluid w-25 mb-4 rounded-circle"
              />
              <blockquote>
                <ReactMarkdown source={data.strapiAbout.description} />
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </BackgroundImage>
  )
}

export default About
