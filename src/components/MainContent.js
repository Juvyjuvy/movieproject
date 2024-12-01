import React from 'react';

function MainContent({ movies, loading }) {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Carousel Section */}
      <div className="carousel">
        {movies.slice(0, 1).map((movie) => (
          <div key={movie.id} className="featured-movie">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              className="carousel-image"
            />
            <div className="featured-details">
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
              <button className="watch-btn">Watch Now</button>
            </div>
          </div>
        ))}
      </div>

      {/* Suggestions Section */}
      <div className="movie-list">
        {movies.slice(2, 20).map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default MainContent;