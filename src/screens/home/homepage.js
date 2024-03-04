
import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registerpage from "../../components/register/registerpage";

import Sidebarindex from "../../components/sidebar/sidebarindex";
import Librarypage from "../library/librarypage";
import { setClientToken } from '../../spotifyApi';
import Trendingpage from '../trending/trendingpage';
import Favouritespage from '../favourites/favouritespage';
import Login from '../../components/login/login';
import Player from '../Player/player';
import './homepage.css';





const Homepage = () => {
  console.log("homepage")
  const [token, setToken] = useState("");
  const [isLibraryClicked, setIsLibraryClicked] = useState(false);

  const handleLibraryClick = () => {
    setIsLibraryClicked(!isLibraryClicked);
    
    
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);

  return !token ? (
    <Login /> ) : (<Router>
      <div className="main-body">
        
        
       
         
         <Sidebarindex  isLibraryClicked={isLibraryClicked} handleLibraryClick={handleLibraryClick}/>
       
         
     <Routes>
        
         <Route path="/" element={<Librarypage />} />
         <Route path='/trending' element={<Trendingpage  isLibraryClicked={isLibraryClicked}/>}/>
         <Route path='/favourites' element={<Favouritespage />} />
         <Route path='/register' element={<Registerpage />} />
         <Route path='/login' element={<Login />} />  
         
     </Routes>  
     
     <div className='player-body'>
     <Player />
     </div>
     </div>
     
 </Router>);
    
  
}

export default Homepage;