import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"

const About = () => {
  const data = useStaticQuery(graphql`
    {
      strapiAbout {
        title
        description
      }
    }
  `)
  return (
    <div
      className="site-section bg-image overlay bg-dark text-white"
      style={{ backgroundImage: 'url("../images/hero_1.jpg")' }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8 text-center testimony">
            {/* <img
              src="../images/person_4.webp"
              alt="Image"
              className="img-fluid w-25 mb-4 rounded-circle"
            /> */}
            <h3 className="mb-4">{data.strapiAbout.title}</h3>
            <blockquote>
              <blockquote>
                <ReactMarkdown source={data.strapiAbout.description} />
              </blockquote>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
