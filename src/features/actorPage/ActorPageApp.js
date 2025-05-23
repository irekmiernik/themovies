import { DetailsPages } from "../../common/detailsPages/DetailsPages";
import { ActorPage } from "./ActorPage";
import { actions, selectors } from "./actorPageSlice";

const ActorPageApp = () => (
  <DetailsPages
    statusSelector={selectors.selectStatus}
    fetchAction={actions.fetch}
    clearAction={actions.clear}
  >
    <ActorPage />
  </DetailsPages>
);

export default ActorPageApp;