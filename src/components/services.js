import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FiCheck } from "react-icons/fi"
import ReactMarkdown from "react-markdown"
import Fade from "react-reveal/Fade"

const Services = () => {
  const data = useStaticQuery(graphql`
    {
      strapiLeistungen {
        section_title
        description
        list_groups {
          id
          title
          description
          group_img {
            childImageSharp {
              fluid(maxWidth: 500, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          list_group_item {
            id
            title
            description
          }
        }
      }
    }
  `)

  const listGroupItems = items =>
    items.map(item => {
      return (
        <div className="d-flex custom-icon-wrap mb-4" key={item.id}>
          <span className="custom-icon-inner mr-3">
            <FiCheck />
          </span>
          <div className="list-item">
            <strong className="m-0">{item.title}</strong>
            {item.description && <ReactMarkdown source={item.description} />}
          </div>
        </div>
      )
    })

  const listGroup = () =>
    data.strapiLeistungen.list_groups.map(group => {
      return (
        <div
          className="row mb-5 align-items-center list-group-block"
          key={group.id}
        >
          <div className="col-lg-7 mb-5 list-group-image">
            <Img
              fluid={group.group_img.childImageSharp.fluid}
              className="img-fluid"
            />
          </div>
          <div className="col-lg-4 ml-auto list-group-text">
            <h3 className="text-black mb-4">{group.title}</h3>
            <ReactMarkdown className="mb-4">{group.description}</ReactMarkdown>
            {listGroupItems(group.list_group_item)}
          </div>
        </div>
      )
    })

  return (
    <div className="site-section services-section" id="services-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-lg-7 text-center">
            <Fade bottom cascade>
              <div>
                <h2 className="section-title">
                  {data.strapiLeistungen.section_title}
                </h2>
              </div>
              <div>
                <ReactMarkdown>
                  {data.strapiLeistungen.description}
                </ReactMarkdown>
              </div>
            </Fade>
          </div>
        </div>
        <Fade bottom cascade>
          {listGroup()}
        </Fade>
      </div>
    </div>
  )
}

export default Services
