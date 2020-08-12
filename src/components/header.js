import { Link } from "gatsby"
import React, { useState } from "react"
import { FiMenu } from "react-icons/fi"

import { Navbar, Nav } from "react-bootstrap"

import Logo from "../images/SylviaLogo.svg"
import PageLinks from "../constants/pageLinks"
import Sidebar from "./sidebar"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = e => {
    setIsOpen(!isOpen)
  }
  console.log(isOpen)
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="primary">
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Link className="logo-link" to="/">
          <Logo className="logo" />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <FiMenu className="toggle-icon text-primary" />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto py-3 py-lg-0">
            <PageLinks />
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>

            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/*
      <nav className="d-none d-lg-inline-block navbar-nav-wrapper">
        
      </nav> */}
    </header>
  )
}

export default Header
