import React from 'react'
import { IconContext } from "react-icons";
import { Link, useLocation } from "react-router-dom";
import './sidebarbutton.css';

const Sidebarbutton = (props) => {
    const location = useLocation();//imp

    const isActive = location.pathname === props.to;
  
    const btnClass = isActive ? "btn-body active" : "btn-body";
    return (
      <Link to={props.to}>
        <div className={btnClass}>
          <IconContext.Provider value={{ size: "24px", className: "btn-icon" }}>
            {props.icon}
            
          </IconContext.Provider>
        </div>
      </Link>
    );
}

export default Sidebarbutton
