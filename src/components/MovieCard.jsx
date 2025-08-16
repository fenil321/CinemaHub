import React from 'react'

const MovieCard = ({ movie:{Title, Type ,Year, Poster} }) => {
  return (
    <div className='movie-card'>
        <img src={Poster && Poster !== "N/A" ? Poster : './No-Poster.png'} alt={Title} />

        <div className='mt-4'>
            <h3>{Title}</h3>

            <div className='content'>
                <p className='lang'>{Type}</p>
                <span>•</span>
                <p className='year'>
                    {Year? Year.split('-')[0] : 'N/A'}
                </p>
            </div>
        </div>
    </div> 

  )
}

export default MovieCard