import React from 'react';
import { useState,useEffect,useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  
  const[movies,setMovies]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
   const fetchMoviesHAndler=useCallback(async()=>{
    setIsLoading(true);
    const response= await fetch('https:swapi.dev/api/films/')
    const data=await response.json()
    const transformedData= data.results.map((movie)=>{
        return{id:movie.episode_id,title:movie.title,openingText:movie.opening_crawl,releaseDate:movie.release_date}
      })
      setMovies(transformedData);
      setIsLoading(false)
    },[])
    useEffect(()=>{
    fetchMoviesHAndler()
  },[fetchMoviesHAndler])

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHAndler}>Fetch Movies</button>
      </section>
      <section>
        {isLoading&&<p>Loading...</p>}
        {!isLoading&&<MoviesList movies={movies} />}
      </section>
    </React.Fragment>
  );
}

export default App;
