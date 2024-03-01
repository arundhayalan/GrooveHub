import React from 'react'

import { Link, useLocation } from "react-router-dom";
import './sidebartext.css'

const Sidebartext = ({ title, to }) => {
    const location = useLocation();//imp

    const isActive = location.pathname === to;

    const txtClass = isActive ? "txt-body active" : "txt-body";
  return (
    <Link to={to}>
    <div className={txtClass} >
      
        {title}
     
    </div>
    
  </Link>
  )
}

export default Sidebartext
