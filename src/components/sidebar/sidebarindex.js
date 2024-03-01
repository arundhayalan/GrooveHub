import React, { useState } from "react";
import "./sidebarindex.css";
import Sidebarbutton from "./sidebarbutton";
import { FaGripfire } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import Sidebartext from "./sidebartext";
import { useNavigate } from "react-router-dom";
import { LuPlus } from "react-icons/lu";

const Sidebarindex = ({ setScreenWidth }) => {
  const [isLibraryClicked, setIsLibraryClicked] = useState(false);
  const navigate = useNavigate();

  const handleLibraryClick = () => {
    setIsLibraryClicked(!isLibraryClicked);
    // Show titles when Library button is clicked
  };
  const handleIconClick = () => {
    if (isLibraryClicked) {
      setScreenWidth(true);
    } else {
      setScreenWidth(false);
    }
  };
  const handleClick = (name) => {
    navigate(name);
  };
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
        <Sidebarbutton to="/trending" onClick={handleIconClick()} icon={<FaGripfire />} />
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
      
      <div className={isLibraryClicked ? "text-body" : ""} onClick={handleLibraryClick} libraryClicked={isLibraryClicked}>
        <Sidebarbutton  icon={<IoLibrary />} onClick={handleLibraryClick} libraryClicked={isLibraryClicked}/>
        
            {isLibraryClicked ? (
              <Sidebartext title="Your Library"  />
            ) : (
              ""
            )}
            
          </div>
          
          <div className="add-icon">
            {isLibraryClicked ? (<LuPlus style={{fontSize:"24px"}} />):""}
            </div>
          
          
          
      </div>
    </div>
  );
};

export default Sidebarindex;
