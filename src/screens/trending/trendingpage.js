import React from 'react'

const  Trendingpage = ({screenWidth}) => {

  
  return (
    <div  className={`screen-container ${screenWidth ? 'library-clicked' : ''}`}>
      <div style={{ color: "white"}}>trending </div>
    </div>
  )
}

export default Trendingpage
