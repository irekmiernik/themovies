import { useSelector } from "react-redux";
import { MovieList } from "./Movie list";
import { moviesSelector } from "./moviesSlice";
const MovieListApp = () => {
    const movies = useSelector(moviesSelector);

    return (
        <>
            <MovieList />
        </>
    );
};

export default MovieListApp;