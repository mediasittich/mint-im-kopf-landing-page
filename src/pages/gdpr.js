import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GDPR = ({ data }) => (
  <Layout>
    <SEO lang="de" />
    <div className="container">
      <ReactMarkdown source={data.strapiImpressum.content} />
    </div>
  </Layout>
)
export const query = graphql`
  {
    strapiImpressum {
      content
    }
  }
`

export default GDPR
