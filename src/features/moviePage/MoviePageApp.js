import { DetailsPages } from "../../common/detailsPages/DetailsPages";
import { MoviePage } from "./MoviePage";
import { actions, selectors } from "./moviePageSlice";

const MoviePageApp = () => (
  <DetailsPages
    statusSelector={selectors.selectStatus}
    fetchAction={actions.fetch}
    clearAction={actions.clear}
  >
    <MoviePage />
  </DetailsPages>
);

export default MoviePageApp;