import React, { useState , useEffect} from 'react'
import apiClient from '../../spotifyApi'
import './header.css'
const Header = () => {
    const[image, setImage] = useState("")
  
  useEffect(() =>{
    apiClient.get("me").then(response => {setImage(response.data.images[0].url);})
  },[]) 
  return (
    <div className='header-container'>
         
    <div className='premium-button'>
        Explore Premium
      </div>
        <div className='outer-circle'>
        <img src={image} className='inner-circle-image' alt='profile' />
      </div>
    
    </div>
   
      
  
  )
}

export default Header
