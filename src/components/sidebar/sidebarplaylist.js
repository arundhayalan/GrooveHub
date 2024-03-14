import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillPlayCircle } from "react-icons/ai";
import { IconContext } from 'react-icons';
import "./sidebar.css";


const Sidebarplaylist = ({  playlist, isLibraryClicked }) => {

    
  return (
    
   <Link to={`/playlists/${playlist.id}`} className={isLibraryClicked ? "chips-card-library-clicked" : "chips-card"} key={playlist.id} >
    <div >
                  <img  className={isLibraryClicked? "cards-img-library-clicked" : "cards-img"} src={playlist.images[0].url} alt="artist"/>
                  {isLibraryClicked && (<div className='cards-name'> {playlist.name}</div>)}
                  {isLibraryClicked && (<div className='play-icon-artist'>
              <IconContext.Provider value={{size: "35px" , color: "71E573"}}>
            <AiFillPlayCircle />
            </IconContext.Provider>
            </div>)}
                  </div>
   </Link>
  )
}

export default Sidebarplaylist
