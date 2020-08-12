import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"

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

            <form action={`${data.strapiKontakt.form_url}`} method="POST">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputLastName">Name</label>
                  <input
                    type="text"
                    name="lastname"
                    id="inputLastName"
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputFirstName">Vorname</label>
                  <input
                    type="text"
                    name="firstname"
                    id="inputFirstName"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputPhone">Telefon</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  id="inputPhone"
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputEmail">Email</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">@</div>
                  </div>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="inputEmail"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="textMessage">Ihre Nachricht</label>
                <textarea
                  name="textMessage"
                  className="form-control"
                  id="textMessage"
                  rows="5"
                ></textarea>
              </div>
              <div className="form-group row">
                <div className="col-sm-10">
                  <button className="btn btn-primary" type="submit">
                    Anfrage absenden
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
