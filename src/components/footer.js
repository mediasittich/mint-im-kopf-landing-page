import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="d-flex justify-content-center pt-5 pb-5">
          <p className="mb-0 footer-items">
            <span className="footer-item">
              &copy; {new Date().getFullYear()}{" "}
              <a href="https://www.mint-im-kopf.de">Mint im Kopf</a>
            </span>
            |
            <span className="footer-item">
              <Link to="/impressum">Impressum</Link>
            </span>
            |
            <span className="footer-item">
              <Link to="/gdpr">Datenschutzerklärung</Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
