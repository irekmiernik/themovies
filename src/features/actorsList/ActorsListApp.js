import { useSelector } from 'react-redux';
import { ActorsList } from './ActorsList';
import { moviesActorSelector } from '../../features/moviesList/moviesSlice';
const ActorsListApp = () => {
    const actors = useSelector(moviesActorSelector);

    return (
        <>
            <ActorsList />
        </>
    );
};

export default ActorsListApp;