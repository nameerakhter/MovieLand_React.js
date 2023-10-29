import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import searchIcon from './search.svg';
import MovieCard from './MovieCard';

// 3dfc3a7

const API_URL = "https://www.omdbapi.com?apikey=3dfc3a7";


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async(title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(()=>{
    searchMovies('spiderman')
  },[])
  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input 
          placeholder='search for movies'
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
        />

        <img 
          src={searchIcon}
          alt='searchIcon'
          onClick={()=>searchMovies(searchTerm)}
        />
      </div>

      {
        movies.length >0 
          ?(
            <div className='container'>
              {movies.map((movie)=>
                <MovieCard movie={movie}/>
              )}
            </div>
          ):(
            <div className='empty'>
              <h2>No movies Found</h2>
            </div>
          )
      }

      
    </div>
  );
}

export default App;
