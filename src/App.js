import React, { useState } from 'react';
import { useEffect } from 'react';
import MovieCard from './Moviecard';
import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=8ac1ef0b';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchString, setSearchString] = useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies('Superman');
  }, []);
  return (
    <div className='app'>
      <h1>MoviesWorld</h1>
      <div className='search'>
        <input
          placeholder='Look for movies'
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt='search'
          onClick={() => searchMovies(searchString)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className='container'>
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
