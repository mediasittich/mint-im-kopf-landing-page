import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"

const Contact = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLasttName] = useState("")

  const handleSubmit = () => {
    alert("Nachricht gesendet")
  }
  const data = useStaticQuery(graphql`
    {
      strapiKontakt {
        title
        intro_text
      }
    }
  `)

  return (
    <section
      className="contact-section site-section bg-light"
      style={{ padding: "4em 0" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="text-center">
              <h2 className="section-title">{data.strapiKontakt.title}</h2>
              <p className="mb-5">
                <ReactMarkdown source={data.strapiKontakt.intro_text} />
              </p>
            </div>

            <form action={`${process.env.GATSBY_FORM_ENDPOINT}`} method="POST">
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
              <div class="form-group">
                <label for="inputPhone">Telefon</label>
                <input
                  type="text"
                  name="phone"
                  class="form-control"
                  id="inputPhone"
                />
              </div>
              <div class="form-group">
                <label for="inputEmail">Email</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">@</div>
                  </div>
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    id="inputEmail"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="textMessage">Ihre Nachricht</label>
                <textarea
                  class="form-control"
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
