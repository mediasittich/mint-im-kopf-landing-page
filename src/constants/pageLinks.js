import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

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
    <li key={link.id}>
      <AnchorLink to={link.url}>{link.text}</AnchorLink>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`nav-links ${styleClass ? styleClass : ""}`}>
      {LINKS}
      <AnchorLink className="btn cta" to="/#contact-section">
        Kontakt
      </AnchorLink>
    </ul>
  )
}
