import React, { useState } from 'react';

function Nav({ setQuery, setCategory, genres }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setQuery(searchTerm);
  };

  const handleCategoryChange = (e) => {
    const genreId = e.target.value;
    setSelectedGenre(genreId);
    setCategory(genreId); // Notify diri ang parent component about the selected genre
  };

  return (
    <nav>
      <form onSubmit={handleSearchSubmit}>
      
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      <div className="category-filter">
        <select value={selectedGenre} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
}

export default Nav;