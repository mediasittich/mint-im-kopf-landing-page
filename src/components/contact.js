import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"
import Form from "./form"

const Contact = () => {
  const data = useStaticQuery(graphql`
    {
      strapiKontakt {
        section_title
        description
        email
        phone
        form_url
      }
    }
  `)

  return (
    <section
      id="contact-section"
      className="contact-section site-section bg-light"
      style={{ padding: "4em 0" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7">
            <div className="text-center">
              <h2 className="section-title">
                {data.strapiKontakt.section_title}
              </h2>
              <ReactMarkdown
                className="mb-5"
                source={data.strapiKontakt.description}
              />
              <p>{data.strapiKontakt.email}</p>
              <p>{data.strapiKontakt.phone}</p>
            </div>

            <Form data={data} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
