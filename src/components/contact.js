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

            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      id="inputLastName"
                      value={lastName}
                      onChange={e => setLasttName(e.target.value)}
                    ></Form.Control>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Form.Label>Vorname</Form.Label>
                    <Form.Control
                      type="text"
                      id="inputFirstName"
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                    ></Form.Control>
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup>
                <label for="inputTelefon">Telefon</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  className="form-control"
                  id="inputFirstName"
                />
              </FormGroup>
              <FormGroup>
                <label for="inputEmail">Email</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  className="form-control"
                  id="inputFirstName"
                />
              </FormGroup>

              <FormGroup>
                <label for="exampleFormControlTextarea1">Ihre Nachricht</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                ></textarea>
              </FormGroup>

              <Button
                as="input"
                variant="primary"
                type="submit"
                value="Absenden"
              />
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
