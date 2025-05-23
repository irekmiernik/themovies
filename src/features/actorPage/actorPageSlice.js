import { createDetailsSlice } from "../../common/detailsPages/detalisSlice";

export const actorPageSlice = createDetailsSlice({
  name: "actorDetails",
});

export const { actions, selectors } = actorPageSlice;

export default actorPageSlice.reducer;