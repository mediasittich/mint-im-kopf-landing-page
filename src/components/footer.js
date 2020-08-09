import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="pt-5 mt-5 text-center">
          <Col md={12} className="pt-5">
            <p>
              &copy; {new Date().getFullYear()}{" "}
              <a href="https://www.mint-im-kopf.de">Mint im Kopf</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
