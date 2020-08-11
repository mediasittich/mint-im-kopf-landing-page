/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ lang, meta }) {
  const data = useStaticQuery(graphql`
    {
      strapiSeo {
        site_title
        site_description
        site_url
        site_author {
          username
        }
        site_img {
          childImageSharp {
            fluid(maxWidth: 100, quality: 90) {
              src
            }
          }
        }
      }
    }
  `)

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={data.strapiSeo.site_title}
      meta={[
        {
          name: `description`,
          content: data.strapiSeo.site_description,
        },
        {
          property: `og:title`,
          content: data.strapiSeo.site_title,
        },
        {
          property: `og:description`,
          content: data.strapiSeo.site_description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: data.strapiSeo.site_author.username,
        },
        {
          name: `twitter:title`,
          content: data.strapiSeo.site_title,
        },
        {
          name: `twitter:description`,
          content: data.strapiSeo.site_description,
        },
        {
          name: `twitter:image`,
          content: data.strapiSeo.site_img.childImageSharp.fluid.src,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `de`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
