export interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  backdropUrl: string;
  releaseDate: string;
  rating: number;
  overview: string;
  genres: string[];
  runtime: number;
  director: string;
  cast: string[];
}

export interface MovieList {
  title: string;
  movies: Movie[];
}