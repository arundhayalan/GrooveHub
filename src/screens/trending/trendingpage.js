import React, { useEffect, useState } from 'react'
import { IconContext } from 'react-icons';
import { AiFillPlayCircle } from "react-icons/ai";
import apiClient from '../../spotifyApi';
import './trendingpage.css'



const  Trendingpage = ({ isLibraryClicked , playtrack }) => {

  const [tracks, setTracks] = useState([]);
  

  useEffect(() => {
    apiClient.get("/playlists/5hmt23Zd72PcEvWq2TGIIA").then(response => {
      setTracks(response.data.tracks.items);
      console.log(response.data);
    }).catch(error => {
      console.error('Error fetching playlist tracks:', error);
    });
  }, []);

  const shortenTrackName = (name, maxLength) => {
    if (name.length <= maxLength) {
      return name;
    } else {
      return name.slice(0, maxLength) + '...'; // Adjust the maxLength as needed
    }
  };

  

  return (
    <div className='screen-container'>
      <div className={`playlist-container ${isLibraryClicked ? 'library-clicked' : ''}`}>
        {tracks.map(track => (
          
          <div className={`tracks-card ${isLibraryClicked ? 'library-clicked' : ''}`} key={track.track.id}>
             
             
            <img className="track-img"src={track.track.album.images[1].url} alt='song'/>
             
              
           
            <div className="track-name" >{shortenTrackName(track.track.name, 15)}</div>
            <p className="track-artist">
              {track.track.artists[0].name}
              </p> 
              <div className='play-icon' onClick={() => playtrack(track.track.id)}>
              <IconContext.Provider value={{size: "50px" , color: "71E573"}}>
            <AiFillPlayCircle />
            </IconContext.Provider>
            </div>
              
          </div>
        ))}
      </div>
    </div>
     
  )
}

export default Trendingpage
