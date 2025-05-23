import { actions } from "./moviePageSlice";
import { detailsSaga } from "../../common/detailsPages/detailsSaga";
import { getMovieDetails } from "./getMovieDetails";

export function* watchFetchMovieDetails() {
  yield detailsSaga({
    getData: getMovieDetails,
    actions,
  });
};