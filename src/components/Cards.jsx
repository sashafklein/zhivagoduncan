import PropTypes from "prop-types"
import React from "react"
import Masonry from 'react-masonry-css'

import Card from "./WorkCard"

const Cards = ({ items, hideLastItemOnMobile = false }) => {
  const newItems = [...items, ...items]
  return (
    <div className="container">
      <Masonry
        className="flex"
        breakpointCols={{ default: 3, 1024: 2, 768: 1 }}>
        {newItems.map(item => (
          <Card {...item} />
        ))}
      </Masonry>
    </div>
  )
}

Cards.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Cards
