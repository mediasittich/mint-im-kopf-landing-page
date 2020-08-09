import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container } from "react-bootstrap"

import Logo from "./logo"

const Header = ({ siteTitle }) => (
  <header>
    <Container fluid>
      <div className="d-flex align-items-center">
        <div className="site-logo mr-auto w-25">
          <Link to="/">
            <Logo />
          </Link>
        </div>
      </div>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
