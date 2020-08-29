/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import CookieConsent from "react-cookie-consent"

import Header from "./header"
import Footer from "./footer"

import "../styles/main.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

      <main>{children}</main>

      <Footer />

      <CookieConsent
        location="bottom"
        containerClasses="align-items-center"
        buttonText="Verstanden"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        disableButtonStyles
        buttonClasses="gdpr-accept-btn"
        expires={150}
      >
        mint-im-kopf.de verwendet Cookies{" "}
        <span role="img" aria-label="cookie">
          🍪
        </span>
        , um die Seitennutzung auszuwerten und zu optimieren. Cookies werden
        teilweise auch von Diensten Dritter gesetzt. Weitere Infos finden Sie in
        unserem{" "}
        <Link to="gdpr" className="gdpr-link">
          Datenschutzhinweis
        </Link>
        .
      </CookieConsent>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
