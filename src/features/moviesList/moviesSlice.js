import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        genres: [],
        results: [],
        actors: [],
        loading: false,
        currentPage: 1,
        totalPages: undefined,
        maxPages: 500,
        isSearching: false,
        searchQuery: "",
        isActorsPage: false,
    },
    reducers: {
        fetchMovies: state => {
            state.loading = true;
            state.isSearching = false;
            state.currentPage = 1;
        },

        setMovies: (state, { payload: movies }) => {
            state.movies = movies.movies || movies.results;
            state.results = movies.results || movies.movies;
            state.totalPages = movies.total_pages < state.maxPages ? movies.total_pages : state.maxPages;
            state.loading = false;
        },
        setGenres: (state, { payload: genres }) => {
            state.genres = genres;
        },

        setActor: (state, { payload: results }) => {
            state.actors = results.results || results;
            state.totalPages = results.total_pages < state.maxPages ? results.total_pages : state.maxPages || 0;
            state.loading = false;
        },

        setNewMoviesPage: (state, { payload: movies }) => {
            state.movies = movies;
            state.loading = false;
        },

        setSearching: (state, { payload }) => {
            state.loading = true;
            state.isSearching = payload.query ? true : false;
            state.searchQuery = payload.query;
            state.currentPage = 1;
            state.isActorsPage = payload.isActorsPage;
        },

        setNextPage: (state) => {
            if (state.currentPage < state.totalPages) {
                state.currentPage += 1;
                state.loading = true;
            }
        },

        setLastPage: (state) => {
            if (state.currentPage !== state.totalPages) {
                state.currentPage = state.totalPages;
                state.loading = true;
            }
        },

        setPreviousPage: (state) => {
            if (state.currentPage > 1) {
                state.currentPage -= 1;
                state.loading = true;
            }
        },

        setFirstPage: (state) => {
            if (state.currentPage !== 1) {
                state.currentPage = 1;
                state.loading = true;
            }
        }
    }
});

export const moviesStateSelector = state => state.movies;
export const moviesSelector = state => moviesStateSelector(state).movies;
export const moviesGenreSelector = state => moviesStateSelector(state).genres;
export const moviesActorSelector = state => moviesStateSelector(state).actors;
export const currentPageSelector = state => moviesStateSelector(state).currentPage;
export const totalPagesSelector = state => moviesStateSelector(state).totalPages;
export const isSearchingSelector = state => moviesStateSelector(state).isSearching;
export const searchQuerySelector = state => moviesStateSelector(state).searchQuery;
export const isActorsPageSelector = state => moviesStateSelector(state).isActorsPage;
export const loadingSelector = state => moviesStateSelector(state).loading;


export const { fetchMovies, setMovies, setGenres, setActor, setNewMoviesPage, setSearching, setNextPage, setLastPage, setPreviousPage, setFirstPage, } = moviesSlice.actions;
export default moviesSlice.reducer;