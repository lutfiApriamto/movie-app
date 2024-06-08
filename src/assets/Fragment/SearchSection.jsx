import React from 'react';
import Card from '../Component/Card';

const SearchSection = ({ data }) => {
  return (
    <section id="main" className="pt-6">
      <div className="w-full md:h-1/2 container mx-auto px-6 sm:flex sm:flex-wrap sm:justify-center gap-6">
        {data && data.map((movie) => (
          <Card
            key={movie.imdbID}
            src={movie.Poster}
            movieTitle={movie.Title}
            movieYear={movie.Year}
            movieId={movie.imdbID}
          />
        ))}
      </div>
    </section>
  );
};

export default SearchSection;
