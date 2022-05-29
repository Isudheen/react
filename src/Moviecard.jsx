import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className='movie'>
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={
            movie.Poster !== 'N/A'
              ? movie.Poster
              : 'https://pixselo.com/wp-content/uploads/2018/03/dummy-placeholder-image-400x400.jpg'
          }
          alt={movie.Title}
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
