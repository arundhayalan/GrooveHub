import React, {  useEffect, useState } from "react";
import Sidebarbutton from "./sidebarbutton";
import { FaGripfire } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import Sidebartext from "./sidebartext";
import { useNavigate } from "react-router-dom";
import { LuPlus } from "react-icons/lu";
import { IconContext } from 'react-icons';
import { AiFillPlayCircle } from "react-icons/ai";

import { IoMdClose } from "react-icons/io";
import apiClient from '../../spotifyApi';
import "./sidebar.css";
import Sidebarplaylist from "./sidebarplaylist";

const Sidebarindex = ({ isLibraryClicked, handleLibraryClick }) => {
  
 const [showArtists, setShowArtists] = useState([]);
 const [showPlayLists, setShowPlayLists]  = useState([]);
 const [isActive, setIsActive] = useState(false);
 const [isPlayListActive, setPlayListActive] = useState(false);
  

 useEffect(() => {
  const fetchData = async () => {
    try {
      const artistResponse = await apiClient.get('/me/following', {
        params: { type: 'artist' }
      });
      setShowArtists(artistResponse.data.artists.items);
      
      const playlistResponse = await apiClient.get('/me/playlists');
      setShowPlayLists(playlistResponse.data.items);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);

const navigate = useNavigate();

const handleClick = (name) => {
  navigate(name);
};

const handlecloseChipClick = () => {
  setIsActive(false);
  setPlayListActive(false);
}

const handleClickPlaylist = () =>{
  setPlayListActive(true);
  setIsActive(false);
}

const handleClickArtist = () =>{
  setIsActive(true);
  setPlayListActive(false);
}

  return (
    <div className={`sidebar-container ${ isLibraryClicked ? "library-clicked" : "" }`}>

      {/* for the upper sidebar */}

      <div className={`sidebartop-container ${isLibraryClicked ? "library-clicked" : "" }`} >

        <div className={isLibraryClicked ? "text-body" : ""} onClick={() => handleClick("/favourites")} >

          <Sidebarbutton to="/favourites"  icon={<MdFavorite />} />
          <div>
            {isLibraryClicked ? (
              <Sidebartext title="Favourites" to="/favourites" />
            ) : (
              ""
            )}
          </div>
        </div>

        <div className={isLibraryClicked ? "text-body" : ""} onClick={() => handleClick("/trending")}>

        {/* handleIconClick() --> I have used function call directly coz i need to check that method once for every action done in handleLibrary */}
        <Sidebarbutton to="/trending"  icon={<FaGripfire />} />
        <div>
            {isLibraryClicked ? (
              <Sidebartext title="Trending" to="/trending" />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      {/* For the middle sidebar*/}
      <div className={`sidebarmiddle-container ${isLibraryClicked ? "library-clicked" : ""}`} >
      
      <div className={isLibraryClicked ? "text-body" : ""} onClick={handleLibraryClick}>
        <Sidebarbutton  icon={<IoLibrary />} onClick={handleLibraryClick} libraryclicked={isLibraryClicked}/>
        
            {isLibraryClicked ? (
              <Sidebartext title="Your Library"  />
            ) : (
              ""
            )}
          </div>

     
          <div className={isLibraryClicked ? "inside-middle-container-library-clicked":"inside-middle-container"}>
            
              {isLibraryClicked && (
              <div className="chips">

                 <div className={isPlayListActive ? "playlists-chip active": "playlists-chip"} onClick={handleClickPlaylist}>
                  <p>PlayLists</p></div>
                 <div className={isActive ? "artist-chip active": "artist-chip"} onClick={handleClickArtist}><p>Artists</p></div>
                 {(isPlayListActive || isActive) && (<div className="close-chips" onClick={handlecloseChipClick}><IconContext.Provider value={{size: "15px" , color: "B3B6B3"}}>
                <IoMdClose />
            </IconContext.Provider> </div>)}
                </div>
                )}

                

                {/* artist side container*/}

              <div className={isLibraryClicked ? "chips-container-library-clicked": "chips-container"} >

              {!isActive && !isPlayListActive && (<div className={isLibraryClicked ? "chips-container-library-clicked": "chips-container"}>

                {
                  showArtists.map(artist =>(
                    <div className={isLibraryClicked ? "chips-card-library-clicked" : "chips-card"} key={artist.id}>
                      <img  className={isLibraryClicked? "cards-img-library-clicked" : "cards-img"} src={artist.images[0].url} alt="artist"/>
                      {isLibraryClicked && (<div className='cards-name'> {artist.name}</div>)}
                      {isLibraryClicked && (<div className='play-icon-artist'>
                  <IconContext.Provider value={{size: "35px" , color: "71E573"}}>
                <AiFillPlayCircle />
                </IconContext.Provider>
                </div>)}
                      </div>
                   ))
                }

                {
                  showPlayLists.map(playlist =>(
                    <Sidebarplaylist key={playlist.id} playlist={playlist} isLibraryClicked={isLibraryClicked}/>
    
                   ))
                }

              </div>)}





               {isActive && !isPlayListActive && showArtists.map(artist =>(
                <div className={isLibraryClicked ? "chips-card-library-clicked" : "chips-card"} key={artist.id}>
                  <img  className={isLibraryClicked? "cards-img-library-clicked" : "cards-img"} src={artist.images[0].url} alt="artist"/>
                  {isLibraryClicked && (<div className='cards-name'> {artist.name}</div>)}
                  {isLibraryClicked && (<div className='play-icon-artist'>
              <IconContext.Provider value={{size: "35px" , color: "71E573"}}>
            <AiFillPlayCircle />
            </IconContext.Provider>
            </div>)}
                  </div>

               ))}
               
                {/* playlist side container*/}
               {isPlayListActive && !isActive && showPlayLists.map(playlist =>(
                <Sidebarplaylist key={playlist.id} playlist={playlist} isLibraryClicked={isLibraryClicked}/>
               ))}
               </div>
              

                

  
</div>
          
          <div className="add-icon">
            {isLibraryClicked ? (<LuPlus style={{fontSize:"24px"}} />):""}
            </div>
          
          
          
      </div>
    </div>
  );
};

export default Sidebarindex;
