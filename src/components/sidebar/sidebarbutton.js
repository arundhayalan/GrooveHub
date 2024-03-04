import React  from 'react'
import { IconContext } from "react-icons";
import { Link, useLocation } from "react-router-dom";
import './sidebarbutton.css';

const Sidebarbutton = ({ to, icon, onClick }) => {
    const location = useLocation();//imp

    const isActive = location.pathname === to;

    const btnClass = isActive ? "btn-body active" : "btn-body";
  

    const handleClick = () => {
      if(onClick){
        onClick();
      }
     
    }
    
   
    return (

      <Link  onClick={handleClick}>
        <div className={btnClass} >
          <IconContext.Provider value={{ size: "24px", className: "btn-icon" }}>
            {icon}
          </IconContext.Provider>
        </div>
        
      </Link>
      
    );
}

export default Sidebarbutton
