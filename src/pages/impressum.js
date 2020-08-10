import React from "react"
import { Link, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Impressum = ({ data }) => (
  <Layout>
    <SEO title="Page two" />
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

export default Impressum
