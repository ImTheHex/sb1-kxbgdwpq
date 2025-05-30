import React from 'react';
import MovieCard from './MovieCard';
import { MovieList as MovieListType } from '../types/movie';

interface MovieListProps {
  list: MovieListType;
}

const MovieList: React.FC<MovieListProps> = ({ list }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6 ml-1">{list.title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {list.movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;