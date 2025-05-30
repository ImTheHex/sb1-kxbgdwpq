import React from 'react';
import Hero from '../components/Hero';
import MovieList from '../components/MovieList';
import { movieLists } from '../data/mockMovies';

const HomePage: React.FC = () => {
  // Get some featured movies from the mock data
  const featuredMovies = [
    movieLists[0].movies[0],  // Featured from latest
    movieLists[1].movies[0],  // Featured from popular
    movieLists[2].movies[0],  // Featured from trending
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Hero featuredMovies={featuredMovies} />
      
      <div className="container mx-auto px-4 py-12">
        {movieLists.map((list, index) => (
          <MovieList key={index} list={list} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;