import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FiCheck } from "react-icons/fi"

const Services = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiLeistungen {
        nodes {
          Titel
          Intro_Text
          Gruppe {
            id
            List_image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            Item {
              id
              content
            }
          }
        }
      }
    }
  `)
  const [services] = data.allStrapiLeistungen.nodes

  const listGroupList = bullets =>
    bullets.map(bullet => {
      return (
        <div
          className="d-flex align-items-center custom-icon-wrap mb-3"
          key={bullet.id}
        >
          <span className="custom-icon-inner mr-3">
            <FiCheck />
          </span>
          <div>
            <strong className="m-0">{bullet.content}</strong>
          </div>
        </div>
      )
    })

  const listGroup = () =>
    services.Gruppe.map(category => {
      return (
        <div
          className="row mb-5 align-items-center list-group-block"
          key={category.id}
        >
          <div className="col-lg-7 mb-5 list-group-image">
            <Img
              fluid={category.List_image.childImageSharp.fluid}
              className="img-fluid"
            />
          </div>
          <div className="col-lg-4 ml-auto  list-group-text">
            <h2 className="text-black mb-4">We Are Excellent In Education</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              maxime nam porro possimus fugiat quo molestiae illo.
            </p>
            {listGroupList(category.Item)}
          </div>
        </div>
      )
    })

  console.log(services.Gruppe)
  return (
    <div className="site-section" id="services-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-lg-7 text-center aos-init">
            <h2 className="section-title">{services.Titel}</h2>
            <p>{services.Intro_Text}</p>
          </div>
        </div>
        <div>{listGroup()}</div>
      </div>
    </div>
  )
}

export default Services
