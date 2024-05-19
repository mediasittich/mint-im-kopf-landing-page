import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"
import Form from "./form"
import ContactForm from "./contactForm"

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
            <div className="text-center mb-5">
              <h2 className="section-title">
                {data.strapiKontakt.section_title}
              </h2>
              <ReactMarkdown
                className="mb-4"
                source={data.strapiKontakt.description}
              />
              <p>
                <strong>{data.strapiKontakt.email}</strong>
              </p>

              <p>
                <strong>{data.strapiKontakt.phone}</strong>
              </p>
            </div>

            <Form data={data} />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
