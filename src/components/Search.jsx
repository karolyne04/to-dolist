import React from 'react'

const Search = ({serach, setSearch}) => {
  return (
   <div className='search'>
        <h2>Pesquisar:</h2>
        <input
        type="text"
        value={serach}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Digite para pesquisar..."
          />
   </div>
  );
};

export default Search;