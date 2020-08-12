import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Navbar, Nav } from "react-bootstrap"

const DATA = [
  {
    id: 1,
    text: "Leistungen",
    url: "/#services-section",
  },
  {
    id: 3,
    text: "Über mich",
    url: "/#about-section",
  },
  {
    id: 3,
    text: "Lehrkonzept",
    url: "/#features-section",
  },
  {
    id: 3,
    text: "Preise",
    url: "/#pricing-section",
  },
]

const LINKS = DATA.map(link => {
  return (
    <AnchorLink key={link.id} className="nav-link my-2 my-lg-0" to={link.url}>
      {link.text}
    </AnchorLink>
  )
})

export default ({ styleClass }) => {
  return (
    <>
      {LINKS}
      <AnchorLink
        className="btn cta ml-lg-4 my-2 my-lg-0"
        to="/#contact-section"
      >
        Kontakt
      </AnchorLink>
    </>
  )
}
