import React from 'react'
import './sidebarindex.css';
import Sidebarbutton from './sidebarbutton';
import { FaGripfire } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";

const Sidebarindex = () => {
  return (
    <div className="sidebar-container">
        {/* for the upper sidebar */}
       <div className='sidebartop-container'>
       <Sidebarbutton title="favourites" to="/favourites" icon={<MdFavorite />}/>
       
         <Sidebarbutton title="Trending" to="/trending" icon={<FaGripfire />} /> 
       </div>
       {/* For the middle sidebar*/}
        <div className='sidebarmiddle-container'>
        <Sidebarbutton title="Library" to="/" icon={<IoLibrary />} />
            
        </div>
        <div>
        <Sidebarbutton title="favourites" to="/favourites" icon={<MdFavorite />}/>
        </div>
    </div>
  )
}

export default Sidebarindex