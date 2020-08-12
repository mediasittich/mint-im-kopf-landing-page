import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FiCheck } from "react-icons/fi"
import ReactMarkdown from "react-markdown"

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
        <div
          className="d-flex align-items-center custom-icon-wrap mb-3"
          key={item.id}
        >
          <span className="custom-icon-inner mr-3">
            <FiCheck />
          </span>
          <div>
            <strong className="m-0">{item.title}</strong>
            <ReactMarkdown source={item.description} />
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
          <div
            className="col-lg-7 mb-5 list-group-image"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="100"
            data-sal-easing="ease"
          >
            <Img
              fluid={group.group_img.childImageSharp.fluid}
              className="img-fluid"
            />
          </div>
          <div
            className="col-lg-4 ml-auto list-group-text"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="200"
            data-sal-easing="ease"
          >
            <h2 className="text-black mb-4">{group.title}</h2>
            <p className="mb-4">{group.description}</p>
            {listGroupItems(group.list_group_item)}
          </div>
        </div>
      )
    })

  return (
    <div className="site-section" id="services-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div
            className="col-lg-7 text-center"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="0"
            data-sal-easing="ease"
          >
            <h2 className="section-title">
              {data.strapiLeistungen.section_title}
            </h2>
            <p>{data.strapiLeistungen.description}</p>
          </div>
        </div>
        <div>{listGroup()}</div>
      </div>
    </div>
  )
}

export default Services
