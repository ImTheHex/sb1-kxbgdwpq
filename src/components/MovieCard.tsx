import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="group">
      <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform group-hover:scale-[1.02] group-hover:shadow-xl">
        <div className="aspect-[2/3] bg-gray-800 overflow-hidden">
          <img 
            src={movie.posterUrl} 
            alt={`${movie.title} poster`}
            className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex items-center mb-2">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
              <span className="text-white text-sm font-medium">{movie.rating.toFixed(1)}</span>
            </div>
            <p className="text-white text-xs line-clamp-2">{movie.overview}</p>
          </div>
        </div>
        <div className="p-3 bg-gray-900">
          <h3 className="text-white font-semibold truncate">{movie.title}</h3>
          <p className="text-gray-400 text-sm">{movie.releaseDate.split('-')[0]}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;