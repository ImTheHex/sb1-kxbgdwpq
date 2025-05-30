import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, ArrowLeft } from 'lucide-react';
import { searchMovies } from '../data/mockMovies';
import { Movie } from '../types/movie';
import MovieCard from '../components/MovieCard';

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState(query);

  useEffect(() => {
    setLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      setSearchResults(searchMovies(query));
      setLoading(false);
    }, 800);
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchInput.trim())}`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/" className="text-white flex items-center hover:text-red-500 transition-colors mb-4">
            <ArrowLeft className="w-5 h-5 mr-1" />
            Back to Home
          </Link>
          
          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search movies..."
                className="bg-gray-800 text-white rounded-full py-3 px-6 pl-12 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
              <button 
                type="submit" 
                className="absolute right-2 top-2 bg-red-500 text-white px-4 py-1.5 rounded-full hover:bg-red-600 transition-colors"
              >
                Search
              </button>
            </div>
          </form>
          
          <h1 className="text-2xl font-bold text-white">
            {query ? `Search results for "${query}"` : 'All Movies'}
          </h1>
        </div>
        
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-red-600"></div>
          </div>
        ) : (
          <>
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {searchResults.map(movie => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h2 className="text-xl text-white mb-4">No movies found for "{query}"</h2>
                <p className="text-gray-400 mb-6">Try adjusting your search terms or browse our categories</p>
                <Link 
                  to="/" 
                  className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  Browse All Movies
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchPage;