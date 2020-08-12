import { Link } from "gatsby"
import React from "react"
import { FaAlignRight } from "react-icons/fa"

import Logo from "../images/SylviaLogo.svg"
import PageLinks from "../constants/pageLinks"

const Header = () => (
  <header className="site-navbar">
    <Link className="logo-link" to="/">
      <Logo className="logo" />
    </Link>
    {/* <button type="button" className="toggle-btn" onClick={toggleSidebar}> */}
    <button type="button" className="toggle-btn d-lg-none">
      <FaAlignRight></FaAlignRight>
    </button>
    <nav className="d-none d-lg-inline-block">
      <PageLinks />
    </nav>
  </header>
)

export default Header
