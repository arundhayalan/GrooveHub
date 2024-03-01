import React from 'react'

const Favouritespage = ({screenWidth}) => {
  return (
    <div  className={`screen-container ${screenWidth ? 'library-clicked' : ''}`}>
      <div style={{ color: "white"}}>favourites </div>
    </div>
  )
}

export default Favouritespage
