import React, { useState , useEffect} from 'react'
import apiClient from '../../spotifyApi'
import './header.css'
import { IconContext } from 'react-icons'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const Header = () => {
    const[image, setImage] = useState("")
  
  useEffect(() =>{
    apiClient.get("me").then(response => {setImage(response.data.images[0].url);})
  },[]) 
  return (
    <div className='header-container'>
      <div className='front-back-pointer'>
        <div className='front-top-container'>
        <div className='back-pointer'>
        <IconContext.Provider value={{size: "22px" , color: "B0B2B0"}}>
        <IoIosArrowBack />
        </IconContext.Provider>
        </div>
        <div className='front-pointer'> 
        <IconContext.Provider value={{size: "22px" , color: "B0B2B0"}}>
        <IoIosArrowForward />
        </IconContext.Provider>
        </div>
        </div>
        <div className='front-end-container'>
           <p>All</p>
           <p>Music</p>
           <p>Podcasts</p>
        </div>
       
      </div>

    <div className='right-header'>
    <div className='premium-button'>
        Explore Premium
      </div>

    <div className='outer-circle'>
        <img src={image} className='inner-circle-image' alt='profile' />
    </div>
    </div>
    
    
    </div>
   
      
  
  )
}

export default Header
