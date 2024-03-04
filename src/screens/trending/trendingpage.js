import React, { useEffect, useState, useRef } from 'react'
import apiClient from '../../spotifyApi';
import './trendingpage.css'



const  Trendingpage = ({ isLibraryClicked }) => {

  const [tracks, setTracks] = useState([]);
  const trackNameRef = useRef(null);

  useEffect(() => {
    apiClient.get("/playlists/5hmt23Zd72PcEvWq2TGIIA").then(response => {
      setTracks(response.data.tracks.items);
      console.log(response.data.tracks.items);
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
             
            <img className={`track-img ${isLibraryClicked ? 'library-clicked':''}`} src={track.track.album.images[1].url}/>
           
            <div className={`track-name ${isLibraryClicked ? 'library-clicked': ''}`} >{shortenTrackName(track.track.name, 15)}</div>
            <div className={`track-artist ${isLibraryClicked ? 'library-clicked': ''}`}>
              {track.track.artists[0].name}
              </div> 
          </div>
        ))}
      </div>
    </div>
     
  )
}

export default Trendingpage
