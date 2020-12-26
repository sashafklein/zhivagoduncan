import { graphql } from "gatsby"
import React from "react"
import Cards from "../components/Cards"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SiteMetadata title="Works" description="Works by Zhivago Duncan" />

      <div className="bg-white py-12 lg:py-16">
        {data.works && data.works.nodes.length > 0 ? (
          <Cards items={data.works.nodes} />
        ) : (
          <div className="container">No projects found.</div>
        )}
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    works: allContentfulWork {
      nodes {
        ...WorkCard
      }
    }
  }
`
