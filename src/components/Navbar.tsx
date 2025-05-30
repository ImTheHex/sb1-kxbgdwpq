import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, Film, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Film className="w-7 h-7 text-red-500 mr-2" />
            <span className="text-white font-bold text-xl">CineFlix</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
            <Link to="/categories" className="text-gray-300 hover:text-white transition-colors">Categories</Link>
            <Link to="/trending" className="text-gray-300 hover:text-white transition-colors">Trending</Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:block relative">
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search movies..."
                className="bg-gray-800 text-white rounded-full py-2 px-4 pl-10 w-64 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
              <button type="submit" className="absolute right-3 top-2 bg-red-500 rounded-full p-1 text-white hover:bg-red-600 transition-colors">
                <Search className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-gray-900 transition-all duration-300 overflow-hidden ${
        mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 py-2 space-y-1">
          <Link to="/" className="block py-2 text-gray-300 hover:text-white transition-colors">Home</Link>
          <Link to="/categories" className="block py-2 text-gray-300 hover:text-white transition-colors">Categories</Link>
          <Link to="/trending" className="block py-2 text-gray-300 hover:text-white transition-colors">Trending</Link>
          <form onSubmit={handleSearch} className="mt-4">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search movies..."
                className="bg-gray-800 text-white rounded-full py-2 px-4 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
              <button type="submit" className="absolute right-3 top-2 bg-red-500 rounded-full p-1 text-white hover:bg-red-600 transition-colors">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Navbar;