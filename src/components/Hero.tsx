import React, { useState, useEffect } from 'react';
import { Play, Star, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Movie } from '../types/movie';

interface HeroProps {
  featuredMovies: Movie[];
}

const Hero: React.FC<HeroProps> = ({ featuredMovies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentMovie = featuredMovies[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredMovies.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [featuredMovies.length]);

  return (
    <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black">
        <img 
          src={currentMovie.backdropUrl} 
          alt={currentMovie.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative h-full flex items-center">
        <div className="max-w-2xl animate-fade-in" key={currentMovie.id}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{currentMovie.title}</h1>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="ml-1 text-white">{currentMovie.rating.toFixed(1)}</span>
            </div>
            <span className="text-gray-300">{currentMovie.releaseDate.split('-')[0]}</span>
            <div className="flex items-center text-gray-300">
              <Clock className="w-4 h-4 mr-1" />
              <span>{currentMovie.runtime} min</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {currentMovie.genres.map((genre, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-gray-800/80 text-gray-200 text-sm rounded-full"
              >
                {genre}
              </span>
            ))}
          </div>
          
          <p className="text-gray-300 mb-8 line-clamp-3 md:line-clamp-none">{currentMovie.overview}</p>
          
          <div className="flex flex-wrap gap-4">
            <Link 
              to={`/movie/${currentMovie.id}`}
              className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg flex items-center transition-colors"
            >
              <Play className="w-5 h-5 mr-2 fill-white" />
              Watch Now
            </Link>
            <Link 
              to={`/movie/${currentMovie.id}`}
              className="bg-gray-800/80 hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {featuredMovies.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentIndex ? 'bg-red-600 w-8' : 'bg-gray-500'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;