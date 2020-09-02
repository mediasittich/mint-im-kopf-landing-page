import { Link } from "gatsby"
import React from "react"
import { FiMenu } from "react-icons/fi"

import { Navbar, Nav } from "react-bootstrap"

import Logo from "./logo"

import PageLinks from "../constants/pageLinks"

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="primary">
        <div className="container-fluid">
          <Link className="logo-link my-3" to="/">
            <Logo />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <FiMenu className="toggle-icon text-primary" />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto py-3 mb-3 m-lg-0 py-lg-0">
              <PageLinks />
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  )
}

export default Header
