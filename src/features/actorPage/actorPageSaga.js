import { actions } from "./actorPageSlice";
import { detailsSaga } from "../../common/detailsPages/detailsSaga";
import { getActorDetails } from "./getActorDetails";

export function* watchFetchActorDetails() {
  yield detailsSaga({
    getData: getActorDetails,
    actions,
  });
};