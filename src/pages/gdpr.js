import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GDPR = ({ data }) => (
  <Layout>
    <SEO lang="de" />
    <div className="container py-5 my-2">
      <ReactMarkdown source={data.strapiGdpr.content} />
    </div>
  </Layout>
)
export const query = graphql`
  {
    strapiGdpr {
      content
    }
  }
`

export default GDPR
