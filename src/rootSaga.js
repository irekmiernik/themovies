import { all, /* put */ } from "redux-saga/effects";
import { moviesSaga } from "./features/moviesList/moviesSaga";
import { watchFetchMovieDetails } from "./features/moviePage/moviePageSaga";
import { watchFetchActorDetails } from "./features/actorPage/actorPageSaga";
// import { fetchMovies } from "./features/moviesList/moviesSlice";

export default function* rootSaga() {
    // yield put(fetchMovies());
    yield all([
        moviesSaga(),
        watchFetchMovieDetails(),
        watchFetchActorDetails(),
    ]);
};