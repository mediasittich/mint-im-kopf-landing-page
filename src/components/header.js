import { Link } from "gatsby"
import React from "react"

import Logo from "../images/SylviaLogo.svg"

const Header = () => (
  <header className="site-navbar">
    <Link className="logo-link" to="/">
      <Logo className="logo" />
    </Link>

    <nav>
      <ul className="nav-links">
        <li>
          <a href="#">Leistungen</a>
        </li>
        <li>
          <a href="#">Über mich</a>
        </li>
        <li>
          <a href="#">Lehrkonzept</a>
        </li>
        <li>
          <a href="#">Preise</a>
        </li>
      </ul>
    </nav>
    <a className="btn cta" href="#">
      Kontakt
    </a>
  </header>
)

export default Header
