
import React from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registerpage from "../../components/register/registerpage";

import Sidebarindex from "../../components/sidebar/sidebarindex";
import Librarypage from "../library/librarypage";
import './homepage.css';
import Trendingpage from '../trending/trendingpage';
import Favouritespage from '../favourites/favouritespage';
import Login from '../../components/login/login';



const Homepage = () => {
  return (
    <Router>
         <div className="main-body">
            <Sidebarindex />
        <Routes>
            <Route path="/" element={<Librarypage />} />
            <Route path='/trending' element={<Trendingpage />}/>
            <Route path='/favourites' element={<Favouritespage />} />
            <Route path='/register' element={<Registerpage />} />
            <Route path='/login' element={<Login />} />
           
            
            
        </Routes>
        </div>
    </Router>
  )
}

export default Homepage;