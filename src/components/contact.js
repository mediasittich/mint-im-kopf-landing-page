import React, { useState } from "react"
import { Container, Row, Col, Form, FormGroup, Button } from "react-bootstrap"

const Contact = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLasttName] = useState("")

  const handleSubmit = () => {
    alert("Nachricht gesendet")
  }
  return (
    <section className="contact-section bg-light" style={{ padding: "4em 0" }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={7}>
            <h2>Kontakt</h2>
            <p className="mb-5">
              Rufen Sie mich gerne an oder schreiben Sie mir eine E-Mail.
              Alternativ können sie auch das untenstehende Kontaktformular
              nutzen.
            </p>
            <p>E-Mail: kontakt@mint-im-kopf.de Telefon: 0162 3028119</p>
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
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
