import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useNavigate } from 'react-router';
export default function Search({ setSearchQuery, performSearch }) {
  const [searchInput, setSearchInput] = React.useState("");
  const Navigate = useNavigate();
  const onSearch = () => {
    setSearchQuery(searchInput);
    performSearch(searchInput);
    setSearchInput("");
    Navigate("/searchres")
    
  }

  return (
    <div className="search" >
      <div>
        <button
          className='text-blue-400'
          onClick={onSearch}
        > <FaMagnifyingGlass /> </button>

        <input
          type="text"
          className='border-white-500  outline-0 px-2 py-1 rounded-xl'
          placeholder='Search from million movies...'
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onSearch();
            }
          }}
        />
        
      </div>
    </div>
  )
}