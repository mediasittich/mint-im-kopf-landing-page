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
  console.log(process.env.FORM_ENDPOINT)
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

            <form action={`${process.env.GATSBY_FORM_ENDPOINT}`} method="POST">
              <input type="text" name="name" />
              <input type="email" name="email" />
              <input type="text" name="message" />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
