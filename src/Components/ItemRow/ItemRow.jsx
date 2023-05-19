import React, { useEffect, useState } from 'react'
import './ItemRow.css'
import axios from '../../axios'
import {imageUrl} from '../../constants'

function ItemRow(props) {
    const [movie, setMovie] = useState([])
  useEffect(() => {
    axios.get(`${props.url}`).then((response)=>{
      console.log(response.data.results)
      setMovie(response.data.results)
    })
  }, [])
    
  return (
    <div>
        <h1 className='itemTitle'>{props.title}</h1>
        <div className="itemRow">
            {movie.map((object)=>{
                return(
                    <div className="item" style={{backgroundImage: `url(${imageUrl+object.backdrop_path})`}}>
                <div className="play">
                    <h1><i className='playButton bx bx-play'></i></h1>
                    <h6 className='movieTitle'>{object.title}</h6>
                </div>
            </div>
                )
            })}

            
        </div>
    </div>
  )
}

export default ItemRow