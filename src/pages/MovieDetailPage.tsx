import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Clock, ArrowLeft, Play } from 'lucide-react';
import { getMovieById, mockMovies } from '../data/mockMovies';
import { Movie } from '../types/movie';

const MovieDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([]);

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    
    setTimeout(() => {
      if (id) {
        const foundMovie = getMovieById(parseInt(id));
        setMovie(foundMovie || null);
        
        // Find similar movies based on genres
        if (foundMovie) {
          const similar = mockMovies
            .filter(m => 
              m.id !== foundMovie.id && 
              m.genres.some(genre => foundMovie.genres.includes(genre))
            )
            .slice(0, 4);
          setSimilarMovies(similar);
        }
      }
      setLoading(false);
    }, 800);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-600"></div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-4">Movie Not Found</h1>
        <p className="mb-6">Sorry, we couldn't find the movie you're looking for.</p>
        <Link to="/" className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg transition-colors">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section with Backdrop */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={movie.backdropUrl} 
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>
        
        <div className="absolute top-24 left-4">
          <Link to="/" className="text-white flex items-center hover:text-red-500 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-1" />
            Back
          </Link>
        </div>
        
        <div className="container mx-auto px-4 h-full flex items-end pb-16 relative">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Poster */}
            <div className="w-64 h-96 rounded-lg overflow-hidden shadow-xl transform -translate-y-8">
              <img 
                src={movie.posterUrl} 
                alt={movie.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Details */}
            <div className="text-white md:pt-0">
              <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
              
              <div className="flex items-center flex-wrap gap-4 mb-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="ml-1">{movie.rating.toFixed(1)}</span>
                </div>
                <span>{movie.releaseDate.split('-')[0]}</span>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{movie.runtime} min</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {movie.genres.map((genre, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-gray-800 text-gray-200 text-sm rounded-full"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Overview</h2>
                <p className="text-gray-300">{movie.overview}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-semibold mb-1">Director</h3>
                  <p className="text-gray-300">{movie.director}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Cast</h3>
                  <p className="text-gray-300">{movie.cast.join(', ')}</p>
                </div>
              </div>
              
              <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg flex items-center transition-colors">
                <Play className="w-5 h-5 mr-2 fill-white" />
                Watch Trailer
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Similar Movies Section */}
      {similarMovies.length > 0 && (
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-white mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {similarMovies.map(similar => (
              <Link key={similar.id} to={`/movie/${similar.id}`} className="group">
                <div className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform group-hover:scale-[1.02]">
                  <div className="aspect-[2/3] bg-gray-800">
                    <img 
                      src={similar.posterUrl} 
                      alt={similar.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 bg-gray-800">
                    <h3 className="text-white font-semibold">{similar.title}</h3>
                    <p className="text-gray-400 text-sm">{similar.releaseDate.split('-')[0]}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailPage;