
import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registerpage from "../../components/register/registerpage";

import Sidebarindex from "../../components/sidebar/sidebarindex";

import { setClientToken } from '../../spotifyApi';
import Trendingpage from '../trending/trendingpage';
import Favouritespage from '../favourites/favouritespage';
import Login from '../../components/login/login';
import Player from '../Player/player';
import './homepage.css';
import Librarypage from '../library/librarypage';
import Playlist from '../playlists/playlist';







const Homepage = () => {
  console.log("homepage")
  const [token, setToken] = useState("");
  const [isLibraryClicked, setIsLibraryClicked] = useState(false);
  const [playsong, setPlaySong] = useState("");

  const handleLibraryClick = () => {
    setIsLibraryClicked(!isLibraryClicked); 
  };

  const playIt = (id) =>{
    setPlaySong(id);
  }

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
         <Route path='/trending' element={<Trendingpage  isLibraryClicked={isLibraryClicked} playtrack={playIt}/>}/>
         <Route path='/favourites' element={<Favouritespage />} />
         <Route path='/register' element={<Registerpage />} />
         <Route path='/playlists/:playlistId' element={<Playlist />} isLibraryClicked={isLibraryClicked} playtrack={playIt} />
         <Route path='/login' element={<Login />} />  
         
     </Routes>  
     
     <div className='player-body'>
     <Player nowplaying={playsong} />
     </div>
     </div>
     
 </Router>);
    
  
}

export default Homepage;