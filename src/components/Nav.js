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
      <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3Q3Z2c3cmF4cnV2azJydmY3amNiNGY0b2Q2cW1jNXI5Ymhqa3VqYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Pi0upoZ9sk1yoyn8Eb/giphy.webp" alt="Logo" />
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