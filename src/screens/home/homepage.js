
import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registerpage from "../../components/register/registerpage";

import Sidebarindex from "../../components/sidebar/sidebarindex";
import Librarypage from "../library/librarypage";
import './homepage.css';
import Trendingpage from '../trending/trendingpage';
import Favouritespage from '../favourites/favouritespage';
import Login from '../../components/login/login';
import Player from '../Player/player';



const Homepage = () => {
  const [ screenWidth , setScreenWidth] = useState(false);
  return (
    <Router>
         <div className="main-body">
           
            <Sidebarindex setScreenWidth={setScreenWidth} />
          
            
        <Routes>
            <Route path="/" element={<Librarypage />} />
            <Route path='/trending' element={<Trendingpage screenWidth={screenWidth} />}/>
            <Route path='/favourites' element={<Favouritespage screenWidth={screenWidth}/>} />
            <Route path='/register' element={<Registerpage />} />
            <Route path='/login' element={<Login />} />  
        </Routes>  
        
        <div className='player-body'>
        <Player />
        </div>
        </div>
        
    </Router>
  )
}

export default Homepage;