import { useState } from 'react'
import axios from 'axios'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import SearchResult from './pages/SearchResult';

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [ movie, setMovie] = useState("");
  const fetchMovie = async (title) => {
    const apikey = import.meta.env.VITE_OMDB_API_KEY;
    const response = await axios.get(`https://www.omdbapi.com/?s=${title}&apikey=${apikey}`);
    setMovie(response.data.Search);
  }
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage setSearchQuery={setSearchQuery} fetchMovie={fetchMovie} movie={movie}/>} />
      <Route path='/details/:id' element={<MovieDetailPage searchQuery={searchQuery} fetchMovie={fetchMovie} movie={movie}/>} />
      <Route path='/searchres' element={<SearchResult movie={movie}/>} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
    </BrowserRouter>
  )
}