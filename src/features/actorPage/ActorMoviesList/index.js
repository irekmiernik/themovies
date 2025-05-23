import { MoviesListWrapper, SubHeader } from "./styled";
import { MoviesList } from "./MoviesList";

export const ActorMoviesList = ({ title, movies }) => {
  return (
    <MoviesListWrapper>
      <SubHeader>{`${title}(${movies.length})`}</SubHeader>
      <MoviesList movies={movies} />
    </MoviesListWrapper>
  );
};