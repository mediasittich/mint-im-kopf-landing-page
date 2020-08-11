import { Link } from "gatsby"
import React from "react"

import Logo from "../images/SylviaLogo.svg"
import PageLinks from "../constants/pageLinks"

const Header = () => (
  <header className="site-navbar">
    <Link className="logo-link" to="/">
      <Logo className="logo" />
    </Link>

    <nav>
      <PageLinks />
    </nav>
  </header>
)

export default Header
