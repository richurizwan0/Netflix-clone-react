import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import {nowPlaying, imageUrl} from '../../constants'
import './Banner.css'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`${nowPlaying}`).then((response)=>{
      setMovie(response.data.results[7])
    })
  }, [])
  
  
  
  return (
    <div className='banner' style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ''})`}}>
        <h1 className='title'>{movie ? movie.title : ''}</h1>
        <p className="description">{movie ? movie.overview : ''}</p>
        <div className="buttons">
            <button className="button"><i className='bx bx-play'></i> Play</button>
            <button className="button"><i className='bx bx-info-circle' ></i> Info</button>
        </div>
    </div>
  )
}

export default Banner