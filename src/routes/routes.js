import App from "../App";
import ErrorPage from "../common/ErrorPage";
import NoResults from "../common/NoResults";
import ActorPageApp from "../features/actorPage/ActorPageApp";
import ActorsListApp from "../features/actorsList/ActorsListApp";
import MoviePageApp from "../features/moviePage/MoviePageApp";
import MovieListApp from "../features/moviesList/MovieListApp";

export const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                index: true,
                element: <MovieListApp />,
            },
            {
                path: "movie/:id",
                element: <MoviePageApp />,
            },
            {
                path: "actors",
                element: <ActorsListApp />,
            },
            {
                path: "actors/actor/:id",
                element: <ActorPageApp />
            },
            {
                path: "noresults",
                element: <NoResults />,
            },
            {
                path: "error",
                element: <ErrorPage />,
            }
        ]
    }
];