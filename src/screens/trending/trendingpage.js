import React from 'react'
import Header from '../../components/header/header'



const  Trendingpage = ({screenWidth}) => {

  

  return (
    <div  className={`screen-container ${screenWidth ? 'library-clicked' : ''}`}>
      <div style={{ color: "white"}}>trending </div>
      <div className='header-page'>
      <Header />
      </div>
      
    </div>
  )
}

export default Trendingpage
