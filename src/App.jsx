import React, { useEffect, useState } from 'react'
import Search from './components/Search'
import Spinner from './components/Spinner';
import MovieCard from './components/MovieCard';
import { useDebounce } from "react-use";
import { updateSearchCount, getTrendingMovies } from './appwrite.js';

const API_BASE_URL = 'https://www.omdbapi.com/'

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const API_OPTIONs = {
  method:'GET',
  headers:{
    accept:'application/json',
    authorization:`Bearer ${API_KEY}`
  }
}

const App = () => {
  const [searchTerm, setsearchTerm] = useState('');

  const [errorMessage, seterrorMessage] = useState('');

  const [movieList, setmovieList] = useState([]);

  const [trendingMovies, settrendingMovies] = useState([]);

  const [isLoading, setisLoading] = useState(false);

  const [debounceSearch, setdebounceSearch] = useState('');

  useDebounce(() => setdebounceSearch(searchTerm),1000,[searchTerm]);

  const fetchMovies = async (query = '', page = 1) => {
  setisLoading(true);
  seterrorMessage('');
  try {
    const endpoint = `${API_BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query || "the")}&page=${page}`;

    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }

    const data = await response.json();
    //console.log(data);

    if (data.Response === "True") {
      setmovieList(data.Search); // set the actual list
      
      if (query && data.Search && data.Search.length > 0) {
        await updateSearchCount(query, data.Search[0]);
      }

    } else {
      seterrorMessage(data.Error || "No movies found");
      setmovieList([]); // clear list if no results
      
    }

  } catch (error) {
    console.error(`Error fetching movies: ${error}`);
    seterrorMessage('Error fetching movies. Please try again later.');
  } finally {
    setisLoading(false);
  }
};

const loadTrendingMovies = async () => {
  try {
    const movies = await getTrendingMovies();

    settrendingMovies(movies);
  } catch (error) {
    console.error(`Error fetching treding movies: ${error}`);
    
  }
}

  useEffect(() => {
    if (searchTerm.trim() === '') {
      fetchMovies('avengers'); // default sample movies
    } else {
      fetchMovies(searchTerm);
    }
  }, [searchTerm]);

    useEffect(() => {
    loadTrendingMovies();
  },[]);

  return (
    <main>
      <div className='pattern' />  
      <div className='wrapper'>
        <header>
          <img src="./hero-img.png" alt="Hero Banner" />
          <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the hassle</h1>
           <Search searchTerm={searchTerm} setsearchTerm={setsearchTerm}/>
        </header>

        {trendingMovies.length>0 && (
          <section className='trending'>
                <h2>Trending Movies</h2>
                <ul>
                  {trendingMovies.map((movie,index) => (
                    <li key={movie.$id}>
                        <p>{index + 1}</p>
                        <img src={movie.poster_url} alt={movie.Title} />
                    </li>
                  ))}
                </ul>
          </section>
        )}

        <section className='all-movies'>
            <h2>All movies</h2>
            {isLoading ? (
              <Spinner/>
            ) : errorMessage ? (
              <p className='text-red-500'>{errorMessage}</p>
            ) : (
              <ul>
                {movieList.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie}/>
                ))}
              </ul>
            )}
        </section>
       
        
      </div>
    </main>
    
  )
}

export default App
