const path = require(`path`)

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//     type contentfulPortfolioDescriptionTextNode implements Node {
//       description: String
//     }
//     type ContentfulPortfolio implements Node {
//       description: contentfulPortfolioDescriptionTextNode
//       gallery: [ContentfulAsset]
//       id: ID!
//       name: String!
//       related: [ContentfulPortfolio]
//       slug: String!
//       summary: String!
//       thumbnail: ContentfulAsset
//       url: String
//     }
//   `
//   createTypes(typeDefs)
// }

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  console.log(`

  ----------------------
  --- CREATING PAGES ---
  ----------------------

  `)

  return new Promise((resolve, reject) => {
    graphql(`
      {
        works: allContentfulWork {
          nodes {
            id
          }
        }
      }
    `).then(({ errors, data }) => {
      if (errors) {
        reject(errors)
      }

      if (data && data.works) {
        console.log("WORKS PAGES")
        const component = path.resolve("./src/templates/work.jsx")
        data.works.nodes.map(({ id }) => {
          const path = `/works/${id}`
          console.log(`- ${path}`)
          createPage({
            path,
            component,
            context: { id },
          })
        })
      }

      resolve()
    })
  })
}
