import React, { useEffect ,useState } from 'react'
import apiClient from '../../spotifyApi';
import './player.css'

const Player = ({nowplaying}) => {

  const [trackDetails, setTrackDetails] = useState(null);
  useEffect(() => {
    const fetchTrackDetails = async () => {
      try {
        const response = await apiClient.get(`/tracks/${nowplaying}`);
        setTrackDetails(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching track details:', error);
      }
    };

    if (nowplaying) {
      fetchTrackDetails();
    }
  }, [nowplaying]);
  return (
    <div className='player-container'>
      
      {trackDetails && (
          <div className='left-player'>
            <img className="tracked-img" src={trackDetails.album.images[1].url} alt='song'/>
            <div className='left-player-details'>
            <h5>{trackDetails.name}</h5>
            <p>{trackDetails.artists.map(artist => artist.name).join(', ')}</p>
            </div>
          </div>
        )}
      </div>
    
  )
}

export default Player
