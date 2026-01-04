import React from 'react'
import MovieGrid from '../components/MovieGrid.jsx';

const SearchResult = ({movie}) => {
     if (!movie) {
    return (
      <div className="text-white text-center py-20 text-xl">
        Loading movie...
      </div>
    );
  }
  return (
    <div>
      <MovieGrid movie={movie} />
    </div>
  )
}

export default SearchResult