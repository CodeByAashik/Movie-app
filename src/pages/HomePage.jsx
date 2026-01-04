import React from 'react'
import Search from '../components/Search.jsx';
export default function HomePage({setSearchQuery, fetchMovie}) {
  return (
    <main>
      <div className='pattern' />
      <div className='wrapper'>
        <header>
        <img src="./hero-img.png" alt="hero poster" />
        <h1>Search latest <span className='text-gradient'>Movies </span> at one place</h1>
        </header>
        <Search setSearchQuery={setSearchQuery} performSearch={fetchMovie}/>
      </div>
    </main>
  )
}
