import React, {  useState } from "react";
import Sidebarbutton from "./sidebarbutton";
import { FaGripfire } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import Sidebartext from "./sidebartext";
import { useNavigate } from "react-router-dom";
import { LuPlus } from "react-icons/lu";
import apiClient from '../../spotifyApi';
import "./sidebarindex.css";

const Sidebarindex = ({ isLibraryClicked, handleLibraryClick }) => {
  
 const [showArtists, setShowArtists] = useState([]);
 const [isActive, setIsActive] = useState(false);
  
  const navigate = useNavigate();

  
  const handleClick = (name) => {
    navigate(name);
  };

  const handleClickArtist = async () =>{

    setIsActive(!isActive);
    try {
      const response = await apiClient.get('/me/following', {
        params: {
          type: 'artist'
        }
      });
      setShowArtists(response.data.artists.items);
      
      console.log(response.data.artists);
    } catch (error) {
      console.error('Error fetching track details:', error);
    }
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

          <div className={isLibraryClicked ? "inside-container":""}>
            
              {isLibraryClicked && (
              <div className="chips">
                 <div className="recent-chip">
                  <p>PlayLists</p></div>
                 <div className={isActive ? "artist-chip active": "artist-chip"} onClick={handleClickArtist}><p>Artists</p></div>
                </div>
                )}

              <div className={`artists-container ${isLibraryClicked ? 'library-clicked' : ''}`} >
               {showArtists.map(artist =>(
                <div className={`artists-card ${isLibraryClicked ? 'library-clicked' : ''}`} key={artist.id}>
                  <img  className={`artists-img ${isLibraryClicked ? 'library-clicked' : ''}`} src={artist.images[0].url}/>
                  <div className={`artist-name ${isLibraryClicked ? 'library-clicked' : ''}`}> {artist.name}</div>
                  </div>

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
