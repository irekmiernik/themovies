import { Buttons } from "../../../common/Buttons";
import { PageTitle } from "../../../common/PageHeader";
import { PageContainer, MovieListContainer, StyledLink } from "./styled";
import { MovieCard, } from "../MovieCard";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  currentPageSelector,
  fetchMovies,
  moviesSelector,
  moviesGenreSelector,
  searchQuerySelector,
  setSearching,
  totalPagesSelector,
  isSearchingSelector,
  loadingSelector,
  isActorsPageSelector
} from "../moviesSlice";
import { Link } from "react-router-dom";
import NoResults from "../../../common/NoResults";
import Loading from "../../../common/Loading";

export const MovieList = () => {

  const [searchParams] = useSearchParams();
  const query = searchParams.get("search");
  const dispatch = useDispatch();
  const isActorsPage = useSelector(isActorsPageSelector);

  const isSearching = useSelector(isSearchingSelector);
  const movie = useSelector(moviesSelector);
  const isLoading = useSelector(loadingSelector);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  useEffect(() => {
    if (query && query.length > 0) {
      dispatch(setSearching({ query, isActorsPage: false }))
    } else {
      dispatch(setSearching({ query: "", isActorsPage: false }))
      dispatch(fetchMovies())
    }
  }, [query])

  return (
    <>
      <PageContainer>
        {isLoading ? (
          <Loading />
        ) : movie.length > 0 ? (
          <>
            <PageTitle title={`${query ? `Result for: ${query}` : "Popular movies"}`} />

            <MovieListContainer>

              {Array.isArray(movie) && movie.map(m => (
                <StyledLink to={`movie/${m.id}` } key={m.id}>
                  <MovieCard
                    key={m.id}
                    movieTitle={m.title}
                    movieReleaseDate={m.release_date}
                    movieVoteAverage={m.vote_average}
                    movieVoteCount={m.vote_count}
                    moviePosterPath={m.poster_path}
                    movieGenreId={m.genre_ids}
                  />
                </StyledLink>

              ))}

            </MovieListContainer>
          </>
        ) : isSearching ? (<NoResults query={query} />) : <Loading />}

        <Buttons />
      </PageContainer>
    </>
  );
}
