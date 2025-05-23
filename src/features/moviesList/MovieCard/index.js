import { moviesGenreSelector } from "../moviesSlice";
import { useSelector } from "react-redux";
import {
  MovieCardContainer,
  MovieImage,
  MovieTitle,
  MovieYear,
  MovieGenreContainer,
  MovieGenre,
  MovieRatingContainer,
  MovieRating,
  MovieDetailsContainer,
  Votes,
  MovieStar,
} from "./styled";
import emptyImage from "../../../common/detailsPages/emptyImage.png";
export const MovieCard = ({ movieTitle, movieReleaseDate, movieVoteAverage, movieVoteCount, moviePosterPath, movieGenreId }) => {


  const movieGenres = useSelector(moviesGenreSelector);
  const getMovieGenres = (movieGenres, movieGenreId) => {

    if (!Array.isArray(movieGenres.genres) || movieGenres.genres.length === 0) {
      console.error('movieGenres is not an array:', movieGenres);
      return [];
    }

    return movieGenreId?.map(id => {
      const genre = movieGenres.genres.find((g) => g.id === id);
      return genre ? genre.name : "Unknown";
    });
  };

  const genreNames = getMovieGenres(movieGenres, movieGenreId);
  const year = new Date(movieReleaseDate).getFullYear();

  return (
    <MovieCardContainer>
      <MovieImage
        src={moviePosterPath ? `https://image.tmdb.org/t/p/w500${moviePosterPath}` : emptyImage}
        alt={movieTitle}
      />

      <MovieDetailsContainer>
        <MovieTitle>{movieTitle}</MovieTitle>
        <MovieYear>{year}</MovieYear>

        <MovieGenreContainer>
          {genreNames.slice(0, 4).map((genre, index) => (
            <MovieGenre key={index}>{genre}</MovieGenre>
          ))}
        </MovieGenreContainer>

        <MovieRatingContainer>
          <MovieStar>⭐️</MovieStar>
          <MovieRating> {movieVoteAverage.toFixed(1)}</MovieRating>
          <Votes>{movieVoteCount} votes</Votes>
        </MovieRatingContainer>
      </MovieDetailsContainer>
    </MovieCardContainer>
  );
}