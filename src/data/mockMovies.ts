import { Movie, MovieList } from '../types/movie';

// Mock movie data
export const mockMovies: Movie[] = [
  {
    id: 1,
    title: 'Cosmic Horizons',
    posterUrl: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backdropUrl: 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    releaseDate: '2025-01-15',
    rating: 8.7,
    overview: 'A journey beyond the stars, where humanity discovers a new home and faces the ultimate challenge of adaptation.',
    genres: ['Sci-Fi', 'Adventure', 'Drama'],
    runtime: 142,
    director: 'Elena Rodriguez',
    cast: ['Michael Chen', 'Sophia Patel', 'David Kim', 'Olivia Johnson']
  },
  {
    id: 2,
    title: 'Echoes of Time',
    posterUrl: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backdropUrl: 'https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    releaseDate: '2024-11-03',
    rating: 9.2,
    overview: 'A mysterious artifact allows a historian to communicate with people from different eras, altering the course of history.',
    genres: ['Thriller', 'Sci-Fi', 'Mystery'],
    runtime: 128,
    director: 'James Wilson',
    cast: ['Emma Stone', 'John Boyega', 'Zoe Kravitz', 'Oscar Isaac']
  },
  {
    id: 3,
    title: 'Shadow Kingdom',
    posterUrl: 'https://images.pexels.com/photos/2582931/pexels-photo-2582931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backdropUrl: 'https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    releaseDate: '2024-08-22',
    rating: 7.8,
    overview: 'In a realm where shadows gain consciousness, a young sorceress must unite warring factions to face an ancient darkness.',
    genres: ['Fantasy', 'Action', 'Adventure'],
    runtime: 155,
    director: 'Marcus Lee',
    cast: ['Isabella Wong', 'Thomas Clarke', 'Aisha Okoro', 'Rafael Diaz']
  },
  {
    id: 4,
    title: 'Neon Nights',
    posterUrl: 'https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backdropUrl: 'https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    releaseDate: '2024-06-11',
    rating: 8.1,
    overview: 'A detective navigates a cyberpunk metropolis to solve a series of murders linked to a new virtual reality technology.',
    genres: ['Cyberpunk', 'Thriller', 'Mystery'],
    runtime: 118,
    director: 'Akira Tanaka',
    cast: ['Lucas Reed', 'Maya Blackwood', 'Jin Zhao', 'Eva Martinez']
  },
  {
    id: 5,
    title: 'Whispering Sands',
    posterUrl: 'https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backdropUrl: 'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    releaseDate: '2025-02-28',
    rating: 8.5,
    overview: 'A journey through the desert reveals ancient secrets and tests the bonds between a father and daughter as they search for a legendary oasis.',
    genres: ['Adventure', 'Drama', 'Mystery'],
    runtime: 136,
    director: 'Amara Nkosi',
    cast: ['Omar Hakim', 'Lily Chen', 'Gabriel Santos', 'Nora Al-Fahim']
  },
  {
    id: 6,
    title: 'Fractured Memories',
    posterUrl: 'https://images.pexels.com/photos/2341290/pexels-photo-2341290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backdropUrl: 'https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    releaseDate: '2024-09-17',
    rating: 7.9,
    overview: 'After an experimental treatment, a woman begins experiencing memories that aren\'t her own, uncovering a conspiracy that spans decades.',
    genres: ['Psychological Thriller', 'Mystery', 'Drama'],
    runtime: 132,
    director: 'Sarah Johnson',
    cast: ['Naomi Scott', 'Daniel Kaluuya', 'Elizabeth Olsen', 'Mahershala Ali']
  },
  {
    id: 7,
    title: 'Eternal Bloom',
    posterUrl: 'https://images.pexels.com/photos/3391932/pexels-photo-3391932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backdropUrl: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    releaseDate: '2024-10-05',
    rating: 8.3,
    overview: 'In a world where emotions manifest as visible auras, a botanist discovers a rare flower that can manipulate feelings, leading to unforeseen consequences.',
    genres: ['Fantasy', 'Romance', 'Drama'],
    runtime: 127,
    director: 'Hikari Yamamoto',
    cast: ['Freya Anderson', 'Dev Patel', 'Sophie Turner', 'John David Washington']
  },
  {
    id: 8,
    title: 'Steel Resolve',
    posterUrl: 'https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backdropUrl: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    releaseDate: '2024-07-12',
    rating: 8.0,
    overview: 'A retired soldier is pulled back into action when a global threat emerges, forcing him to confront his past while protecting the future.',
    genres: ['Action', 'Thriller', 'Drama'],
    runtime: 145,
    director: 'Victor Kovacs',
    cast: ['Jason Clarke', 'Florence Pugh', 'Winston Duke', 'Michelle Yeoh']
  }
];

// Create different movie lists
export const movieLists: MovieList[] = [
  {
    title: 'Latest Releases',
    movies: [mockMovies[0], mockMovies[4], mockMovies[2], mockMovies[6]]
  },
  {
    title: 'Most Popular',
    movies: [mockMovies[1], mockMovies[3], mockMovies[7], mockMovies[5]]
  },
  {
    title: 'Trending Now',
    movies: [mockMovies[2], mockMovies[5], mockMovies[0], mockMovies[3]]
  }
];

export const getAllMovies = (): Movie[] => {
  return mockMovies;
};

export const getMovieById = (id: number): Movie | undefined => {
  return mockMovies.find(movie => movie.id === id);
};

export const searchMovies = (query: string): Movie[] => {
  const lowerCaseQuery = query.toLowerCase();
  return mockMovies.filter(movie => 
    movie.title.toLowerCase().includes(lowerCaseQuery) ||
    movie.genres.some(genre => genre.toLowerCase().includes(lowerCaseQuery)) ||
    movie.overview.toLowerCase().includes(lowerCaseQuery)
  );
};