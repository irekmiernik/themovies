import { call, delay, put, takeEvery, select, takeLatest } from "redux-saga/effects";
import { getMoviesData } from "../../common/utils/getMoviesData";
import { getSearchMovie } from "../../common/utils/getSearchMovie";
import { getMovieGenre } from "../../common/utils/getMoviesGerne";
import { getPerson } from "../../common/utils/getPerson";
import {
    currentPageSelector,
    moviesGenreSelector,
    fetchMovies,
    isSearchingSelector,
    searchQuerySelector,
    setFirstPage,
    setLastPage,
    setMovies,
    setGenres,
    setSearching,
    setNewMoviesPage,
    setNextPage,
    setPreviousPage,
    setActor,
    isActorsPageSelector,
} from "./moviesSlice";
import { getSearchPeople } from "../../common/utils/getSearchPeople";

function* fetchMoviesWorker() {
    const page = yield select(currentPageSelector);
    const isActorsPage = yield select(isActorsPageSelector);
    try {
        yield delay(600);
        if (isActorsPage) {
            const person = yield call(getPerson, page);
            yield put(setActor(person));
        } else {
            const movies = yield call(getMoviesData, page);
            yield put(setMovies(movies));
        }
    } catch (error) {
        console.error(error);
    }
}

function* fetchGenresWorker() {
    const genres = yield select(moviesGenreSelector);

    try {
        const genres = yield call(getMovieGenre);
        yield put(setGenres(genres));
    } catch (error) {
        console.error(error);
    }
}

function* fetchActorWorker() {
    const page = yield select(currentPageSelector);
    const isActorsPage = yield select(isActorsPageSelector);

    try {
        yield delay(600);
        if (isActorsPage) {
            const person = yield call(getPerson, page);
            yield put(setActor(person));
        }
    } catch (error) {
        console.error(error);
    }
}

function* newPageWorker() {
    yield delay(600);
    const page = yield select(currentPageSelector);
    const isSearching = yield select(isSearchingSelector);
    const isActorsPage = yield select(isActorsPageSelector);

    try {
        if (isSearching) {
            const query = yield select(searchQuerySelector);
            if (isActorsPage) {
                const person = yield call(getSearchPeople, query, page);
                yield put(setActor(person));
            } else {
                const movies = yield call(getSearchMovie, query, page);
                yield put(setNewMoviesPage(movies.results));
            }
        } else {
            if (isActorsPage) {
                const person = yield call(getPerson, page);
                yield put(setActor(person));
            } else {
                const movies = yield call(getMoviesData, page);
                yield put(setMovies(movies));
            }
        }
    } catch (error) {
        console.error(error);
    }
}

function* searchWorker({ payload }) {
    try {
        const page = yield select(currentPageSelector);
        const isActorsPage = yield select(isActorsPageSelector);
        const query = payload.query;

        yield delay(600);

        if (!query) {
            if (isActorsPage) {
                const person = yield call(getPerson, page);
                yield put(setActor(person));
            } else {
                const movies = yield call(getMoviesData, page);
                yield put(setMovies(movies));
            }
            return;
        }

        if (isActorsPage) {
            const person = yield call(getSearchPeople, query, page);
            yield put(setActor(person));
        } else {
            const movies = yield call(getSearchMovie, query, page);
            yield put(setMovies(movies));
        }
    } catch (error) {
        console.error(error);
    }
}

export function* moviesSaga() {
    yield takeEvery(fetchMovies.type, fetchMoviesWorker);
    yield takeEvery(fetchMovies.type, fetchGenresWorker);
    yield takeEvery(fetchMovies.type, fetchActorWorker);
    yield takeLatest(setSearching.type, searchWorker)
    yield takeEvery(setNextPage.type, newPageWorker);
    yield takeEvery(setPreviousPage.type, newPageWorker);
    yield takeEvery(setLastPage.type, newPageWorker);
    yield takeEvery(setFirstPage.type, newPageWorker);
}