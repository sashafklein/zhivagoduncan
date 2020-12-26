import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import React from "react"

const Card = props => {
  const { title, medium, images, id } = props

  return (
    <div className="bg-white shadow-sm rounded-md overflow-hidden group relative">
      <Link to={`/works/${id}`}>
        <div className="group-hover:opacity-25 transition duration-150 ease-in-out pb-4">
          <Img fluid={images[0].localFile.childImageSharp.fluid} alt={title} />
        </div>
        <div className="absolute inset-0 pb-4 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
          <div className="justify-items-center items-center flex flex-col absolute text-center" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
            <h1 className="text-lg text-gray-900 font-bold">{title}</h1>
            <p className="text-md font-semibold text-gray-700">{medium}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Card

export const query = graphql`
  fragment WorkCard on ContentfulWork {
    id
    title
    size {
      size
    }
    images {
      localFile {
        childImageSharp {
          fluid(maxWidth: 444, quality: 85) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    medium
  }
`
