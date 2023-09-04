import React,{useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setMovies] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  async function fetchMoviesHandler(){
    setIsLoading(true);
    // fetch("https://swapi.dev/api/films/").then((response) =>{
    //   return response.json();
    // }).then((data) =>{
    //   const transformedData =data.results.map((movieData) =>{
    //     return{
    //       id:movieData.episode_id,
    //       openingText:movieData.opening_crawl,
    //       title:movieData.title,
    //       releaseDate:movieData.release_date
    //     }
    //   });
    //   setMovies(transformedData);
    // });
    const response =await fetch("https://swapi.dev/api/films/");
    const data = await response.json();
    const transformedData =data.results.map((movieData) =>{
      return{
        id:movieData.episode_id,
        openingText:movieData.opening_crawl,
        title:movieData.title,
        releaseDate:movieData.release_date
      }
    });
    setMovies(transformedData);
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length>0&&<MoviesList movies={movies}/>}
        {!isLoading && movies.length===0 && <p>No MoviesFound</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
