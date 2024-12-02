import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

const API_KEY = '3fd2be6f0c70a2a598f084ddfb75487c';
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  const fetchMovies = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results || []);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(API_URL);
  }, []);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
        const data = await response.json();
        setGenres(data.genres || []);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    if (query) {
      fetchMovies(SEARCH_API + query);
    } else {
      fetchMovies(API_URL);
    }
  }, [query]);

  useEffect(() => {
    if (selectedGenre) {
      const genreUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${selectedGenre}&sort_by=popularity.desc`;
      fetchMovies(genreUrl);
    } else {
      fetchMovies(API_URL);
    }
  }, [selectedGenre]);

  return (
    <div className="App">
      <Nav setQuery={setQuery} setCategory={setSelectedGenre} genres={genres} />
      <MainContent movies={movies} loading={loading} />
      <Footer />
    </div>
  );
}

export default App;
