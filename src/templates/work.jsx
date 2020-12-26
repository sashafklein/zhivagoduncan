import React from 'react'
import { graphql } from 'gatsby'
import SiteMetadata from '../components/SiteMetadata'
import Layout from '../layouts/Layout'

export default props => {
  console.log(props)
  const { work: { title, medium, year, size, images } } = props.data
  return <Layout>
    <SiteMetadata title={`Work - ${title}`} description={`${title} by Zhivago Duncan: ${medium} (${year})`} />

  </Layout>
}

export const query = graphql`
  query WorkQuery($id: String!) {
    work: contentfulWork(id: { eq: $id }) {
      id
      title
      medium
      images {
        file {
          url
        }
      }
      year
      size {
        size
      }
    }
  }
`