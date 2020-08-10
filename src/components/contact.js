import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"
import { Container, Row, Col, Form, FormGroup, Button } from "react-bootstrap"

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
          <div className="col-lg-7 text-center">
            <h2 className="section-title">{data.strapiKontakt.title}</h2>
            <p className="mb-5">
              <ReactMarkdown source={data.strapiKontakt.intro_text} />
            </p>

            <form
              method="post"
              data-netlify-honeypot="bot-field"
              data-netlify="true"
              name="contact"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <label>
                Name
                <input type="text" name="name" id="name" />
              </label>
              <label>
                Email
                <input type="email" name="email" id="email" />
              </label>
              <label>
                Subject
                <input type="text" name="subject" id="subject" />
              </label>
              <label>
                Message
                <textarea name="message" id="message" rows="5" />
              </label>
              <button type="submit">Send</button>
              <input type="reset" value="Clear" />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
